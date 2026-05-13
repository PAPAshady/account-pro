import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import cartModel from '@/models/Cart';
import { cartItemAmountSchema } from '@/schemas/cartItem.schema';
import { CART_ACTION_TYPES } from '@/constants';

export async function DELETE(_, { params }) {
  try {
    await connectToDB();
    const userValidationRes = await validateUser();
    if (userValidationRes.status !== 200)
      return Response.json({ message: 'Login first' }, { status: 401 });

    const { user } = await userValidationRes.json();

    const { planId } = await params;
    const isValidProductId = Types.ObjectId.isValid(planId);

    if (!isValidProductId) return Response.json({ message: 'Invalid plan id' }, { status: 400 });

    const cart = await cartModel.findOneAndUpdate(
      { user: user._id },
      { $pull: { items: { planId } } },
      { returnDocument: 'after' }
    );

    return Response.json(cart);
  } catch (error) {
    console.error('Failed to delete item from cart => ', error);
    return Response.json({ message: 'خطا در حذف کالا از سبد خرید.' }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    await connectToDB();
    const userValidationRes = await validateUser();
    if (userValidationRes.status !== 200)
      return Response.json({ message: 'Login first' }, { status: 401 });
    const { user } = await userValidationRes.json();
    const { planId } = await params;
    const product = await req.json();

    const isValidProductId = Types.ObjectId.isValid(planId);
    const isValidActionType = cartItemAmountSchema.safeParse(product);

    if (!isValidActionType.success)
      return Response.json({ message: 'Invalid actionType' }, { status: 400 });
    if (!isValidProductId) return Response.json({ message: 'Invalid product id' }, { status: 400 });

    const updatedCart = await cartModel.findOneAndUpdate(
      { user: user._id, 'items.planId': planId },
      {
        $inc: {
          'items.$.quantity': product.actionType === CART_ACTION_TYPES.INCREMENT ? +1 : -1, // $ is the position of matched item
        },
      },
      { returnDocument: 'after' }
    );

    return Response.json(updatedCart);
  } catch (err) {
    console.log(err);
    return Response.json({ message: 'خطا در به روز رسانی سبد خرید' }, { status: 500 });
  }
}
