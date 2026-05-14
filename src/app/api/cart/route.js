import { connectToDB } from '@/utils/db';
import cartModel from '@/models/Cart';
import { cartItemsSchema } from '@/schemas/cartItem.schema';
import { validateUser } from '@/utils/auth';
import { cartItemQuantitySchema } from '@/schemas/cartItem.schema';
import plansModel from '@/models/Plan';
import productsModel from '@/models/Product';

export async function POST(req) {
  try {
    await connectToDB();
    const userValidationRes = await validateUser();
    if (userValidationRes.status !== 200)
      return Response.json({ message: 'Login first' }, { status: 401 });

    const { user } = await userValidationRes.json();
    const reqBody = await req.json();
    const validated = cartItemsSchema
      .extend({ quantity: cartItemQuantitySchema })
      .safeParse(reqBody);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'Invalid user input', errors }, { status: 400 });
    }

    const plan = await plansModel.findOne(
      { _id: reqBody.plan },
      'title duration price _id productId'
    );

    if (!plan) return Response.json({ message: "This plan dosen't have exist" }, { status: 404 });

    const product = await productsModel.findOne({ _id: plan.productId }, 'title images -_id slug');

    if (!product)
      return Response.json({ message: "This product dosen't have exist" }, { status: 404 });

    const cart = await cartModel.findOne({ user: user._id }, '-__v');

    const productAlreadyExists = cart.items.find(
      (item) => item.planId.toString() === plan._id.toString()
    );

    if (productAlreadyExists) {
      return Response.json({ message: 'محصول در سبد شما موجود است.' }, { status: 409 });
    }

    const newCartItem = {
      quantity: reqBody.quantity,
      accountType: reqBody.accountType,
      title: `${[product.title]} - ${plan.title} (${plan.duration} روزه)`,
      imageUrl: product.images[0].url,
      price: plan.price,
      duration: plan.duration,
      planId: plan._id,
      planTitle: plan.title,
      slug: product.slug,
    };

    // Push new item to array
    const updatedCart = await cartModel.findOneAndUpdate(
      { user: user._id },
      {
        $push: {
          items: newCartItem,
        },
      },
      { returnDocument: 'after' }
    );

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
    const cart = await cartModel.findOne({ user: user._id }, '-__v');
    return Response.json(cart, { status: 200 });
  } catch (error) {
    console.error('Failed to get cart => ', error);
    return Response.json({ message: 'Failed to get cart.' }, { status: 500 });
  }
}
