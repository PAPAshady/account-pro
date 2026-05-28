import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { blogsSchema } from '@/schemas/blogs.schema';
import blogsModel from '@/models/Blog';
import { saveFileToDisk } from '@/utils/file';

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

    const alreadyExists = await blogsModel.findOne({
      $or: [{ title: blog.title }, { slug: blog.slug }],
    });

    if (alreadyExists) {
      return Response.json(
        { message: 'این مقاله با این تیتر یا شناسه وجود دارد.' },
        { status: 409 }
      );
    }

    const imageUrl = await saveFileToDisk(blog.imageFile, `${blog.slug}`, 'blogs');
    delete blog.imageFile;
    const { user } = await userRes.json();

    const createdBlog = await blogsModel.create({ ...blog, imageUrl, creator: user._id });

    return Response.json(createdBlog, { status: 201 });
  } catch (error) {
    console.log('Error creating blog => ', error);
    return Response.json({ message: 'خطا در ایجاد مقاله.', error });
  }
}
