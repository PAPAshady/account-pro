import { revalidateTag } from 'next/cache';

import { connectToDB } from '@/utils/db';
import { planSchema } from '@/schemas/plan.schema';
import { validateUser } from '@/utils/auth';
import productsModel from '@/models/Product';
import plansModel from '@/models/Plan';

export async function POST(req) {
  try {
    await connectToDB();
    const isUserValidated = (await validateUser({ checkIsAdmin: true })).status === 200;
    if (!isUserValidated) return Response.json({ message: 'Unauthorize access.' });

    const plan = await req.json();
    const validated = planSchema.safeParse(plan);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'Invalid user input.', errors }, { status: 400 });
    }

    const productExists = await productsModel.findOne({ _id: plan.productId }, '_id');
    if (!productExists)
      return Response.json(
        { message: 'Product with this productId dose not have exist in the database.' },
        { status: 404 }
      );

    const planAlreadyExists = await plansModel.findOne({ title: plan.title }, '_id');
    if (planAlreadyExists)
      return Response.json({ message: 'Plan with this title already exists.' }, { status: 409 });

    const createdPlan = await plansModel.create(plan);
    revalidateTag('price-range');
    return Response.json(createdPlan);
  } catch (err) {
    console.log('Failed to add new plan => ', err);
    return Response.json({ message: 'Failed to add new plan' }, { status: 500 });
  }
}
