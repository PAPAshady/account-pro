import { NextResponse } from 'next/server';

import { connectToDB } from '@/utils/db';
import { verifyPassword, generateAccessToken, generateRefreshToken } from '@/utils/auth';
import { signInSchema } from '@/schemas/auth.schema';
import { tokenNames } from '@/constants';
import model from '@/models/User';

export async function POST(req) {
  await connectToDB();
  try {
    const userData = await req.json();
    const validated = signInSchema.safeParse(userData);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return NextResponse.json({ message: 'ثبت نام ناموفق بود.', errors }, { status: 400 });
    }

    const user = await model.findOne({ email: userData.email }, 'password _id');

    const incorrectCrendentialsResponse = NextResponse.json(
      { message: 'ایمیل یا رمز عبور اشتباه است.' },
      { status: 401 }
    );

    if (!user) return incorrectCrendentialsResponse;

    const isPasswordValid = verifyPassword(userData.password, user.password);

    if (!isPasswordValid) return incorrectCrendentialsResponse;

    const accessToken = generateAccessToken({ email: user.email });
    const refreshToken = generateRefreshToken({ email: user.email });

    await model.findByIdAndUpdate(user._id, { refreshToken });

    const response = NextResponse.json({ message: 'خوش آمدید' }, { status: 201 });

    response.cookies.set(tokenNames.JWT_ACCESS, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.ACCESS_TOKEN_EXPIRE_TIME,
      sameSite: 'lax',
      path: '/',
    });

    response.cookies.set(tokenNames.JWT_REFRESH, refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.REFRESH_TOKEN_EXPIRE_TIME,
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('Error signing-in user => ', err);
    return NextResponse.json(
      { message: 'ورود ناموفق بود. لطفا مجددا تلاش کنید.' },
      { status: 500 }
    );
  }
}
