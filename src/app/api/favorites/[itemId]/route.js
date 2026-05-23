import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import favoritesModel from '@/models/Favorite';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const userRes = await validateUser();
    if (userRes.status !== 200)
      return Response.json({ message: 'ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const { itemId } = await params;

    const isItemIdValid = Types.ObjectId.isValid(itemId);

    if (!isItemIdValid) return Response.json({ message: 'شناسه نامعتبر.' }, { status: 400 });

    const { user } = await userRes.json();

    const likedItem = await favoritesModel.findOne({ user: user._id, item: itemId });

    return Response.json(likedItem);
  } catch (error) {
    console.log('Error adding product to favorites => ', error);
    return Response.json({ message: 'خطا در دریافت علاقه مندی ها.' }, { status: 500 });
  }
}
