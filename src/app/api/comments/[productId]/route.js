import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import commentsModel from '@/models/Comment';
import productsModel from '@/models/Product';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const { productId } = await params;
    const isValidProductId = Types.ObjectId.isValid(productId);
    if (!isValidProductId) return Response.json({ message: 'Invalid product id' }, { status: 400 });

    const productExists = await productsModel.findOne({ _id: productId }, '_id');
    if (!productExists)
      return Response.json(
        { message: 'Product with this id dose not have exist' },
        { status: 404 }
      );

    const comments = await commentsModel.find({ productId }).populate({
      path: 'user',
      select: 'name role',
    });

    return Response.json(comments);
  } catch (error) {
    console.log('Error fetching comments => ', error);
    return Response.json({ message: 'خطا در دریافت کامنت ها.' }, { status: 500 });
  }
}
