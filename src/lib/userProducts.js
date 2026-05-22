import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import userProductsModel from '@/models/UserProduct';

export const getUserProducts = async () => {
  try {
    await connectToDB();
    const userRes = await validateUser();
    if (userRes.status !== 200) return [];
    const { user } = await userRes.json();
    const userProducts = await userProductsModel
      .findOne({ user: user._id }, 'products -_id')
      .lean();

    if (!userProducts) {
      await userProductsModel.create({ user: user._id, products: [] });
      return [];
    }

    return JSON.parse(JSON.stringify(userProducts.products)) || [];
  } catch (err) {
    console.log('Failed to get user products => ', err);
    return [];
  }
};
