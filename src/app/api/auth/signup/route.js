import { cookies } from 'next/headers';

import model from '@/models/User';
import { signUpSchema } from '@/schemas/auth.schema';
import { connectToDB } from '@/utils/db';
import { hashPassword } from '@/utils/auth';
import { generateAccessToken, generateRefreshToken } from '@/utils/auth';

export async function POST(req) {
  await connectToDB();
  try {
    const user = await req.json();
    const validated = signUpSchema.safeParse(user);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'ثبت نام ناموفق بود.', errors }, { status: 400 });
    }

    const alreadyExists = await model.findOne({
      $or: [{ email: user.email }, { phone: user.phone }],
    });

    if (alreadyExists) {
      const isEmailDuplicated = alreadyExists.email === user.email;
      return Response.json(
        {
          message: `این ${isEmailDuplicated ? 'ایمیل' : 'شماره تلفن'} قبلا استفاده شده است.`,
          field: isEmailDuplicated ? 'email' : 'phone',
        },
        { status: 409 }
      );
    }

    const hashed = hashPassword(user.password);
    const cookiesStore = await cookies();
    const accessToken = generateAccessToken({ email: user.email });
    const refreshToken = generateRefreshToken({ email: user.email });
    const refreshTokenExpires = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);

    await model.create({ ...user, refreshToken ,refreshTokenExpires, password: hashed });

    cookiesStore.set('jwt_access', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 15, // 15 mins
      path: '/',
    });

    cookiesStore.set('jwt_refresh', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 24 * 60 * 60, // 15 days
      path: '/',
    });

    return Response.json('خوش آمدید.', { status: 201 });
  } catch (err) {
    console.error('Error creating user => ', err);
    return Response.json(
      { message: 'ثبت نام ناموفق بود. لطفا دوباره تلاش کنید.' },
      { status: 500 }
    );
  }
}
