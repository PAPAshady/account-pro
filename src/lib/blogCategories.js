import { unstable_cache } from 'next/cache';

import { connectToDB } from '@/utils/db';
import blogCategoriesModel from '@/models/BlogCategory';

export const getBlogCategories = unstable_cache(
  async () => {
    try {
      await connectToDB();
      const blogCategories = await blogCategoriesModel.find().lean();
      return { data: JSON.parse(JSON.stringify(blogCategories)), status: 200 };
    } catch (error) {
      console.log('Error fetching blog categories => ', error);
      return { data: null, status: 500 };
    }
  },
  ['blog-categories'],
  { tags: ['blog-categories'] }
);
