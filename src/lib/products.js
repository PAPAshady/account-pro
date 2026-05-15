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
    const searchParam = searchParams.get('search')?.trim();

    // Build filter dynamically
    const filters = {};

    if (categoryParams.length) {
      const categories = await categoriesModel.find({ slug: { $in: categoryParams } }, '_id');
      const categoryIds = categories.map((cat) => cat.id);
      if (categoryIds.length) filters.category = { $in: categoryIds };
    }

    if (searchParam) {
      // prevent regex injection
      const safeSearchParam = searchParam.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      filters.$or = [
        { title: { $regex: safeSearchParam, $options: 'i' } },
        { latinTitle: { $regex: safeSearchParam, $options: 'i' } },
      ];
    }

    const products = await productsModel.find(filters, '-__v').lean().populate('category', '-__v');

    return JSON.parse(JSON.stringify(products));
  } catch (err) {
    console.error('Error fetching products => ', err);
    return null;
  }
};

export const getProduct = async (slug) => {
  try {
    await connectToDB();
    const product = await productsModel.findOne({ slug }, '-__v').lean().populate();
    if (!product) return { data: null, status: 404 };
    return JSON.parse(JSON.stringify({ data: product, status: 200 }));
  } catch (error) {
    console.error('Failed to fetch product => ', error);
    return { data: null, status: 500 };
  }
};

export const getProductPriceRange = unstable_cache(
  async () => {
    try {
      await connectToDB();
      const priceRange = await productsModel.aggregate([
        {
          $group: {
            _id: null,
            minPrice: { $min: '$minPlanPrice' },
            maxPrice: { $max: '$maxPlanPrice' },
          },
        },
      ]);

      const range = priceRange[0] || { minPrice: 0, maxPrice: 0 };

      return JSON.parse(
        JSON.stringify({
          minPrice: range.minPrice || 0,
          maxPrice: range.maxPrice || 0,
        })
      );
    } catch (err) {
      console.log('Failed to get product price ranges => ', err);
      return null;
    }
  },
  ['price-range'],
  { tags: ['price-range'] }
);
