import { revalidateTag } from 'next/cache';

import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { categorySchema } from '@/schemas/category.schema';
import categoriesModel from '@/models/Category';
import { saveFileToDisk } from '@/utils/file';
import { getCategories } from '@/lib/categories';

export async function POST(req) {
  try {
    await connectToDB();
    const isUserValidated = (await validateUser({ checkIsAdmin: true })).status === 200;
    if (!isUserValidated) return Response.json({ message: 'Prohibited access.' }, { status: 401 });

    const data = await req.formData();
    const category = {};
    for (let [key, value] of data) category[key] = value;

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

    const imageUrl = await saveFileToDisk(category.imageFile, category.latinTitle, 'categories');

    const createdCategory = await categoriesModel.create({ ...category, imageUrl });
    revalidateTag('categories');
    return Response.json(createdCategory, { status: 201 });
  } catch (error) {
    console.error('Failed to add Category to database => ', error);
    return Response.json({ message: 'Failed to add Category to database' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const categories = await getCategories();
    return Response.json(categories);
  } catch (error) {
    console.error('Failed to get categories => ', error);
    return Response.json({ message: 'Failed to get categories.' }, { status: 500 });
  }
}
