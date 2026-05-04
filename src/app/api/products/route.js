import { connectToDB } from '@/utils/db';
import { productSchema } from '@/schemas/product.schema';
import { validateUser } from '@/utils/auth';
import model from '@/models/Product';

export async function POST(req) {
  try {
    await connectToDB();
    const isUserValidated = (await validateUser()).status === 200;

    if (!isUserValidated) return Response.json(null, { status: 401 });

    const product = await req.json();

    const validated = productSchema.safeParse(product);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'Invalid inputs', errors }, { status: 400 });
    }

    const alreadyExists = await model.find({
      $or: [{ title: product.title }, { slug: product.slug }],
    });

    if (alreadyExists) {
      return Response.json(
        { message: 'Product with this title/slug already exists.' },
        { status: 409 }
      );
    }

    const newProduct = await model.create(product);

    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error adding product => ', error);
    return Response.json({ message: 'Failed to add product to database' }, { status: 500 });
  }
}
