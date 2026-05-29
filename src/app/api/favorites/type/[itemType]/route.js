import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import favoritesModel from '@/models/Favorite';
import { FAVORITES_ITEM_TYPES } from '@/constants';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const userRes = await validateUser();
    if (userRes.status !== 200)
      return Response.json({ message: 'ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const { itemType } = await params;

    const isItemTypeValid = Object.values(FAVORITES_ITEM_TYPES)
      .map((type) => type.toLowerCase())
      .includes(itemType.toLowerCase());

    if (!isItemTypeValid) return Response.json({ message: 'تایپ نامعتبر.' }, { status: 400 });

    const { user } = await userRes.json();

    const isProduct = FAVORITES_ITEM_TYPES.PRODUCT.toLowerCase() === itemType.toLowerCase();

    // Required fields for articles is empty because we got no articles collection (yet).
    const requiredFields = isProduct ? 'title images minPlanPrice slug region _id' : '';

    const favoriteItems = await favoritesModel
      .find({
        user: user._id,
        type: isProduct ? FAVORITES_ITEM_TYPES.PRODUCT : FAVORITES_ITEM_TYPES.BLOG,
      })
      .populate({ path: 'item', select: requiredFields });

    return Response.json(favoriteItems);
  } catch (error) {
    console.log('Error adding product to favorites => ', error);
    return Response.json({ message: 'خطا در دریافت علاقه مندی ها.' }, { status: 500 });
  }
}
