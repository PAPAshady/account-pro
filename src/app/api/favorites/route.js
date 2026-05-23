import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { favoritesSchema } from '@/schemas/favorites.schema';
import favoritesModel from '@/models/Favorite';
import { FAVORITES_ITEM_TYPES } from '@/constants';

export async function POST(req) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const likedItem = await req.json();
    const validated = favoritesSchema.safeParse(likedItem);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json(
        { message: 'آیتم مورد نظر به علاقه مندی ها  اضافه نشد.', errors },
        { status: 400 }
      );
    }

    const { user } = await userRes.json();

    const itemFilters = {
      item: likedItem.itemId,
      type: FAVORITES_ITEM_TYPES.PRODUCT,
      user: user._id,
    };

    const isProductInFavorites = await favoritesModel.findOne(itemFilters);
    const isProduct = FAVORITES_ITEM_TYPES.PRODUCT === likedItem.type;

    if (isProductInFavorites) {
      await favoritesModel.findOneAndDelete(itemFilters);
      return Response.json({
        message: `${isProduct ? 'محصول' : 'مقاله'} مورد نظر از علاقه مندی ها حذف شد.`,
      });
    }

    await favoritesModel.create(itemFilters);
    return Response.json({
      message: `${isProduct ? 'محصول' : 'مقاله'} مورد نظر به علاقه مندی ها اضافه شد.`,
    });
  } catch (error) {
    console.log('Error adding product to favorites => ', error);
    return Response.json({ message: 'آیتم مورد نظر به علاقه مندی ها اضافه نشد.' }, { status: 500 });
  }
}
