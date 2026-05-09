import { cookies } from 'next/headers';

import { connectToDB } from '@/utils/db';
import cartModel from '@/models/Cart';
import { BASE_URL } from '@/constants';
import { cartItemsSchema } from '@/schemas/cartItem.schema';

export async function POST(req) {
  try {
    await connectToDB();
    const cookiesStore = await cookies();
    const userRes = await fetch(`${BASE_URL}/api/auth/me`, { headers: { cookie: cookiesStore } });
    if (userRes.status !== 200) return Response.json({ message: 'Login first' }, { status: 401 });

    const { _id: userId } = await userRes.json();

    const product = await req.json();

    const validated = cartItemsSchema.safeParse(product);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'Invalid quanitity', errors }, { status: 400 });
    }

    const cart = await cartModel.findOne({ user: userId }, '-__v').populate('items.product');

    const productAlreadyExists = cart.items.find(
      (item) => item.product._id.toString() === product.id
    );

    if (productAlreadyExists) {
      return Response.json({ message: 'محصول در سبد شما موجود است.' }, { status: 409 });
    }

    // Push new item to array
    const updatedCart = await cartModel
      .findOneAndUpdate(
        { user: userId },
        {
          $push: {
            items: { product: product.id, quantity: product.quantity },
          },
        },
        { new: true }
      )
      .populate('user items.product');

    return Response.json(updatedCart, { status: 201 });
  } catch (error) {
    console.error('Failed to add to cart => ', error);
    return Response.json({ message: 'Failed to add to cart.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const cookiesStore = await cookies();
    const userRes = await fetch(`${BASE_URL}/api/auth/me`, { headers: { cookie: cookiesStore } });
    if (userRes.status !== 200) return Response.json({ message: 'Login first' }, { status: 401 });

    const { _id: userId } = await userRes.json();

    let cart = await cartModel.findOne({ user: userId }, '-__v').populate('items.product');
    if (!cart) cart = await cartModel.create({ user: userId, items: [] });

    return Response.json(cart, { status: 200 });
  } catch (error) {
    console.error('Failed to get cart => ', error);
    return Response.json({ message: 'Failed to get cart.' }, { status: 500 });
  }
}
