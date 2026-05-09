import { connectToDB } from '@/utils/db';
import cartModel from '@/models/Cart';
import { cartItemsSchema } from '@/schemas/cartItem.schema';
import { validateUser } from '@/utils/auth';

export async function POST(req) {
  try {
    await connectToDB();
    const userValidationRes = await validateUser();
    if (userValidationRes.status !== 200)
      return Response.json({ message: 'Login first' }, { status: 401 });

    const { user } = await userValidationRes.json();
    const product = await req.json();

    const validated = cartItemsSchema.safeParse(product);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'Invalid quanitity', errors }, { status: 400 });
    }

    const cart = await cartModel.findOne({ user: user._id }, '-__v').populate('items.product');

    const productAlreadyExists = cart.items.find(
      (item) => item.product._id.toString() === product.id
    );

    if (productAlreadyExists) {
      return Response.json({ message: 'محصول در سبد شما موجود است.' }, { status: 409 });
    }

    // Push new item to array
    const updatedCart = await cartModel
      .findOneAndUpdate(
        { user: user._id },
        {
          $push: {
            items: { product: product.id, quantity: product.quantity },
          },
        },
        { returnDocument: 'after' }
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
    const userValidationRes = await validateUser();
    if (userValidationRes.status !== 200)
      return Response.json({ message: 'Login first' }, { status: 401 });
    const { user } = await userValidationRes.json();
    const cart = await cartModel.findOne({ user: user._id }, '-__v').populate('items.product');
    return Response.json(cart, { status: 200 });
  } catch (error) {
    console.error('Failed to get cart => ', error);
    return Response.json({ message: 'Failed to get cart.' }, { status: 500 });
  }
}
