import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { categorySchema } from '@/schemas/category.schema';
import categoriesModel from '@/models/Category';

export async function POST(req) {
  try {
    await connectToDB();
    const isUserValidated = (await validateUser()).status === 200;
    if (!isUserValidated) return response.json(null, { status: 401 });

    const category = await req.json();
    const validated = categorySchema.safeParse(category);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'Invalid user input', errors }, { status: 400 });
    }

    const alreadyExists = await categoriesModel.findOne({
      $or: [{ title: category.title }, { slug: category.slug }],
    });

    if (alreadyExists) {
      return Response.json(
        { message: 'Category with this title/slug already exists.' },
        { status: 409 }
      );
    }
    const createdCategory = await categoriesModel.create(category);
    return Response.json(createdCategory, { status: 201 });
  } catch (error) {
    console.error('Failed to add Category to database => ', error);
    return Response.json({ message: 'Failed to add Category to database' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const categories = await categoriesModel.find({}, '-__v');
    return Response.json(categories);
  } catch (error) {
    console.error('Failed to get categories => ', error);
    return Response.json({ message: 'Failed to get categories.' }, { status: 500 });
  }
}
