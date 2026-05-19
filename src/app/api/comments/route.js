import { Types } from 'mongoose';
import z from 'zod';

import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { commentsSchema } from '@/schemas/comment.schema';
import commentsModel from '@/models/Comment';
import productsModel from '@/models/Product';

export async function POST(req) {
  try {
    await connectToDB();
    const userRes = await validateUser();
    if (!userRes.status === 200)
      return Response.json({ message: 'ابتدا وار حساب کاربری خود شوید' }, { status: 401 });

    const comment = await req.json();

    const validated = commentsSchema
      .extend({
        productId: z.refine((val) => Types.ObjectId.isValid(val), {
          message: 'Invalid product id',
        }),
      })
      .safeParse(comment);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'خطا در ایجاد کامنت.', errors }, { status: 400 });
    }

    const productExists = await productsModel.findOne({ _id: comment.productId }, '_id');
    if (!productExists) return Response.json({ message: 'این محصول وجود ندارد.' }, { status: 404 });

    const { user } = await userRes.json();

    const newComment = {
      ...comment,
      user: user._id,
      parentComment: null,
    };

    const createdComment = await commentsModel.create(newComment);
    return Response.json(createdComment, { status: 201 });
  } catch (error) {
    console.log('Error adding new comment => ', error);
    return Response.json({ message: 'خطا در ایجاد کامنت.' }, { status: 500 });
  }
}
