import { unstable_cache } from 'next/cache';

import { connectToDB } from '@/utils/db';
import productsModel from '@/models/Product';
import categoriesModel from '@/models/Category';

export const getCachedProducts = unstable_cache(
  async () => {
    try {
      await connectToDB();
      const products = await productsModel.find().lean().populate('category', '-__v');
      return JSON.parse(JSON.stringify(products));
    } catch (err) {
      console.error('Error fetching products => ', err);
      return null;
    }
  },
  ['products'],
  { tags: ['products'] }
);

export const getFilteredProducts = async (searchParams) => {
  try {
    await connectToDB();
    const categoryParams = searchParams.getAll('cat');

    // Build filter dynamically
    const filters = {};

    if (categoryParams.length) {
      const categories = await categoriesModel.find({ slug: { $in: categoryParams } }, '_id');
      const categoryIds = categories.map((cat) => cat.id);
      if (categoryIds.length) filters.category = { $in: categoryIds };
    }
    const products = await productsModel.find(filters, '-__v').lean().populate('category', '-__v');
    return JSON.parse(JSON.stringify(products));
  } catch (err) {
    console.error('Error fetching products => ', err);
    return null;
  }
};
