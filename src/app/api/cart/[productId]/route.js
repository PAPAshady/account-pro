import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import cartModel from '@/models/Cart';

export async function DELETE(_, { params }) {
  try {
    await connectToDB();
    const userValidationRes = await validateUser();
    if (userValidationRes.status !== 200)
      return Response.json({ message: 'Login first' }, { status: 401 });

    const { user } = await userValidationRes.json();

    const { productId } = await params;
    const isValidProductId = Types.ObjectId.isValid(productId);

    if (!isValidProductId) return Response.json({ message: 'Invalid product id' }, { status: 400 });

    const cart = await cartModel
      .findOneAndUpdate(
        { user: user._id },
        { $pull: { items: { product: productId } } },
        { returnDocument: 'after' }
      )
      .populate('items.product');

    return Response.json(cart);
  } catch (error) {
    console.error('Failed to delete item from cart => ', error);
    return Response.json({ message: 'Failed to delete item from cart.' }, { status: 500 });
  }
}
