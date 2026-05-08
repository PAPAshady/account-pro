import { unstable_cache } from 'next/cache';

import { connectToDB } from '@/utils/db';
import categoriesModel from '@/models/Category';

export const getCategories = unstable_cache(
  async () => {
    try {
      await connectToDB();
      const categories = await categoriesModel.find({}, '-__v').lean();
      return JSON.parse(JSON.stringify(categories));
    } catch (error) {
      console.error('Failed to get categories => ', error);
      return null;
    }
  },
  ['categories'],
  { tags: ['categories'] }
);
