import { unstable_cache } from 'next/cache';

import { connectToDB } from '@/utils/db';
import categoriesModel from '@/models/Category';
import productsModel from '@/models/Product';

export const getCategories = unstable_cache(
  async ({ limit } = {}) => {
    try {
      await connectToDB();
      const categories = await categoriesModel.find({}, '-__v').limit(limit).lean();
      return JSON.parse(JSON.stringify(categories));
    } catch (error) {
      console.error('Failed to get categories => ', error);
      return null;
    }
  },
  ['categories'],
  { tags: ['categories'] }
);

export const getNavbarDropdownLinks = unstable_cache(
  async () => {
    try {
      await connectToDB();
      const categories = await categoriesModel.find({}, 'slug title _id iconName').limit(5).lean();
      const categoryIds = categories.map((category) => category._id);
      const products = await productsModel
        .find({ category: { $in: categoryIds } }, 'slug title category')
        .lean();

      const data = categories.map(({ slug, title, _id, iconName }) => {
        return {
          _id,
          title,
          slug,
          iconName,
          products: products.filter((product) => product.category.toString() === _id.toString()),
        };
      });

      return { data: JSON.parse(JSON.stringify(data)), status: 200 };
    } catch (error) {
      console.error('Failed to get categories => ', error);
      return { data: [], status: 500 };
    }
  },
  ['navbar-categories'],
  {
    tags: ['categories', 'products'],
  }
);
