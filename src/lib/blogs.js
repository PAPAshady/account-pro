import { unstable_cache } from 'next/cache';

import { connectToDB } from '@/utils/db';
import blogsModel from '@/models/Blog';

export const getLandingPageBlogs = unstable_cache(
  async () => {
    try {
      await connectToDB();
      const blogs = await blogsModel.find().limit(4).lean();
      return { data: JSON.parse(JSON.stringify(blogs)), status: 200 };
    } catch (error) {
      console.log('Error fetching landing page blogs => ', error);
      return { data: null, status: 500 };
    }
  },
  ['blogs'],
  { tags: ['blogs'] }
);

export const getBlog = async (slug) => {
  try {
    await connectToDB();
    const blog = await blogsModel
      .findOne({ slug }, '-__v')
      .populate({ path: 'creator', select: 'name' })
      .lean();
    if (!blog) return { data: null, status: 404 };
    return JSON.parse(JSON.stringify({ data: blog, status: 200 }));
  } catch (error) {
    console.error('Failed to fetch blog => ', error);
    return { data: null, status: 500 };
  }
};
