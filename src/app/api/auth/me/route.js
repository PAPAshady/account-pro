import { cookies } from 'next/headers';

import model from '@/models/User';
import { connectToDB } from '@/utils/db';
import { verifyToken, validateUser, verifyPassword, hashPassword } from '@/utils/auth';
import { ACCESS_TOKEN_NAME } from '@/constants';
import { userProfileSchema } from '@/schemas/auth.schema';
import usersModel from '@/models/User';

export async function GET() {
  try {
    await connectToDB();
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get(ACCESS_TOKEN_NAME)?.value;
    const tokenPayload = verifyToken(accessToken);
    if (!tokenPayload) return Response.json(null, { status: 401 });
    const user = await model.findOne({ email: tokenPayload?.email }, '-__v');
    if (!user) return Response.json(null, { status: 401 });
    return Response.json(user);
  } catch (err) {
    console.error('Failed to get user data => ', err);
    return Response.json({ message: 'Failed to get user data' }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectToDB();
    const userRes = await validateUser({ includePassword: true });

    if (userRes.status !== 200)
      return Response.json({ message: 'ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const reqBody = await req.json();
    const validated = userProfileSchema.safeParse(reqBody);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'خطا در ویرایش اطلاعات کاربر.', errors }, { status: 400 });
    }

    const { user } = await userRes.json();

    const isValidPassword = verifyPassword(reqBody.prevPassword, user.password);

    if (!isValidPassword) {
      return Response.json(
        { message: 'پسورد وارد شده اشتباه است.', field: 'prevPassword' },
        { status: 400 }
      );
    }

    const newPassword = hashPassword(reqBody.newPassword);

    const newUserData = await usersModel.findOneAndUpdate(
      { _id: user._id },
      { password: newPassword, phone: reqBody.phone, name: reqBody.name },
      { returnDocument: 'after' }
    );

    return Response.json(newUserData);
  } catch (err) {
    console.error('Failed to update user data => ', err);
    return Response.json({ message: 'خطا در ویرایش اطلاعات کاربر.' }, { status: 500 });
  }
}
