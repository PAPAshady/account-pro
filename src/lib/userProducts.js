import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import userProductsModel from '@/models/UserProduct';

export const getUserProducts = async () => {
  try {
    await connectToDB();
    const userRes = await validateUser();
    if (userRes.status !== 200) return [];
    const { user } = await userRes.json();
    const userProducts = await userProductsModel.find({ user: user._id }).lean();
    return JSON.parse(JSON.stringify(userProducts));
  } catch (err) {
    console.log('Failed to get user products => ', err);
    return [];
  }
};
