import { revalidateTag } from 'next/cache';

import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { blogsSchema } from '@/schemas/blogs.schema';
import blogCategoriesModel from '@/models/BlogCategory';
import blogsModel from '@/models/Blog';
import { saveFileToDisk } from '@/utils/file';
import { ca } from 'zod/v4/locales';

export async function POST(req) {
  try {
    await connectToDB();
    const userRes = await validateUser({ checkIsAdmin: true });
    if (userRes.status !== 200)
      return Response.json({ message: 'شما دسترسی لازم را ندارید.' }, { status: 401 });

    const data = await req.formData();
    const blog = {};

    for (let [key, value] of data) {
      if (key === 'readTime') blog.readTime = +value;
      else blog[key] = value;
    }

    const validated = blogsSchema.safeParse(blog);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'خطا در ایجاد مقاله.', errors }, { status: 400 });
    }

    const categoryExists = await blogCategoriesModel.findOne({ _id: blog.category }, '_id');
    if (!categoryExists)
      return Response.json({ message: 'این دسته بندی برای مقالات وجود ندارد.' }, { status: 404 });

    const alreadyExists = await blogsModel.findOne({
      $or: [{ title: blog.title }, { slug: blog.slug }],
    });

    if (alreadyExists) {
      return Response.json(
        { message: 'این مقاله با این تیتر یا شناسه موجود است.' },
        { status: 409 }
      );
    }

    const imageUrl = await saveFileToDisk(blog.imageFile, `${blog.slug}`, 'blogs');
    delete blog.imageFile;
    const { user } = await userRes.json();

    const createdBlog = await blogsModel.create({ ...blog, imageUrl, creator: user._id });
    revalidateTag('blogs');
    return Response.json(createdBlog, { status: 201 });
  } catch (error) {
    console.log('Error creating blog => ', error);
    return Response.json({ message: 'خطا در ایجاد مقاله.', error });
  }
}

export async function GET(req) {
  try {
    await connectToDB();
    const params = req.nextUrl.searchParams;
    const categoryParam = params.get('cat');
    const searchParam = params.get('search')?.trim();

    // Build filter dynamically
    const filters = {};

    if (categoryParam) filters.category = categoryParam;

    if (searchParam) {
      // prevent regex injection
      const safeSearchParam = searchParam.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      filters.$or = [
        { title: { $regex: safeSearchParam, $options: 'i' } },
        { latinTitle: { $regex: safeSearchParam, $options: 'i' } },
      ];
    }

    const blogs = await blogsModel.find(filters);
    return Response.json(blogs);
  } catch (error) {
    console.log('Error fetching blogs => ', error);
    return Response.json({ message: 'خطا در دریافت مقالات.' }, { status: 500 });
  }
}
