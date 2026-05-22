import { connectToDB } from '@/utils/db';
import { checkoutSchema } from '@/schemas/checkout.schema';
import { validateUser } from '@/utils/auth';
import cartModel from '@/models/Cart';
import ordersModel from '@/models/Order';
import { ORDER_STATUS } from '@/constants';
import userProductsModel from '@/models/UserProduct';

export async function POST(req) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200) {
      return Response.json({ message: 'لطفا ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });
    }

    const order = await req.json();
    const validated = checkoutSchema.safeParse(order);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'ثبت سفارش ناموفق بود.', errors }, { status: 400 });
    }

    const { user } = await userRes.json();

    const cart = await cartModel.findOne({ user: user._id }, 'items');

    if (!cart || !cart.totalItems) {
      return Response.json({ message: 'سبد خرید شما خالی است.' }, { status: 400 });
    }

    const newOrder = {
      ...order,
      user: user._id,
      orders: cart.items,
      status: ORDER_STATUS.SUCCESS,
      orderId: Date.now().toString(36).toUpperCase(),
    };

    const newUserProducts = cart.items.map(
      ({ title, price, accountType, imageUrl, duration, slug }) => ({
        title,
        price,
        accountType,
        imageUrl,
        duration,
        slug,
        userName: `${order.firstName} ${order.lastName}`,
        email: order.email,
        createdAt: new Date(),
        expiresAt: new Date(new Date().getTime() + duration * 24 * 60 * 60 * 1000),
      })
    );

    const userProducts = await userProductsModel.findOne({ user: user._id }, '_id');

    if (userProducts) {
      await userProductsModel.findOneAndUpdate(
        { user: user._id },
        { $push: { products: { $each: newUserProducts } } }
      );
    } else {
      await userProductsModel.create({ user: user._id, products: newUserProducts });
    }

    const createdOrder = await ordersModel.create(newOrder);
    await cartModel.findOneAndUpdate({ user: user._id }, { items: [] }); // empty cart
    return Response.json(createdOrder, { status: 201 });
  } catch (err) {
    console.log('Error adding order to db => ', err);
    return Response.json({ message: 'خطا در ثبت  سفارش.' }, { status: 500 });
  }
}
