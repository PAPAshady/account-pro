import { revalidateTag } from 'next/cache';

import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { blogCategoriesSchema } from '@/schemas/blogCategories.schema';
import blogCategoriesModel from '@/models/BlogCategory';

export async function POST(req) {
  try {
    await connectToDB();
    const isUserValidated = (await validateUser({ checkIsAdmin: true })).status === 200;
    if (!isUserValidated)
      return Response.json({ message: 'شما دسترسی لازم را ندارید.' }, { status: 401 });

    const category = await req.json();

    const validated = blogCategoriesSchema.safeParse(category);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'خطا در ایجاد دسته بندی مقاله', errors }, { status: 400 });
    }

    const alreadyExists = await blogCategoriesModel.findOne({
      $or: [{ title: category.title }, { slug: category.slug }],
    });

    if (alreadyExists) {
      return Response.json(
        { message: 'این دسته بندی با این شناسه یا تیتر موجود میباشد.' },
        { status: 409 }
      );
    }

    const createdBlogCategory = await blogCategoriesModel.create(category);
    revalidateTag('blog-categories');
    return Response.json(createdBlogCategory, { status: 201 });
  } catch (error) {
    console.error('Failed to add blog category to database => ', error);
    return Response.json({ message: 'خطا در ایجاد دسته بندی مقاله', error }, { status: 500 });
  }
}
