import { cookies } from 'next/headers';

import { isValidObjectId } from 'mongoose';

import { connectToDB } from '@/utils/db';
import cartModel from '@/models/Cart';
import { BASE_URL } from '@/constants';

export async function POST(req) {
  try {
    await connectToDB();
    const cookiesStore = await cookies();
    const userRes = await fetch(`${BASE_URL}/api/auth/me`, { headers: { cookie: cookiesStore } });
    if (userRes.status !== 200) return Response.json({ message: 'Login first' }, { status: 401 });

    const { _id: userId } = await userRes.json();

    const { _id: productId } = await req.json();
    const isValidId = isValidObjectId(productId);
    if (!isValidId) return Response.json({ message: 'Invalid Product Id' }, { status: 400 });

    let cart = await cartModel.findOne({ user: userId }, '-__v').populate('items.product');

    if (!cart) {
      cart = await cartModel.create({ user: userId, items: [{ product: productId, quantity: 1 }] });
      const populatedCart = await cart.populate('user items.product');
      return Response.json(populatedCart, { status: 201 });
    }

    const productAlreadyExists = cart.items.find(
      (item) => item.product._id.toString() === productId
    );

    let updatedCart = null;

    if (productAlreadyExists) {
      // Increment existing item's quantity
      updatedCart = await cartModel
        .findOneAndUpdate(
          {
            user: userId,
            'items.product': productId, // Find cart containing this product
          },
          {
            $inc: { 'items.$.quantity': 1 }, // Increment quantity by 1
            // $ refers to the matched item in the array
          },
          { new: true }
        )
        .populate('user items.product');
    } else {
      // Push new item to array
      updatedCart = await cartModel
        .findOneAndUpdate(
          { user: userId },
          {
            $push: {
              items: { product: productId, quantity: 1 },
            },
          },
          { new: true }
        )
        .populate('user items.product');
    }

    return Response.json(updatedCart, { status: 201 });
  } catch (error) {
    console.error('Failed to get cart => ', error);
    return Response.json({ message: 'Failed to get cart.' }, { status: 500 });
  }
}
