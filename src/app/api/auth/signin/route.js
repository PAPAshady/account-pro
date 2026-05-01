import { NextResponse } from 'next/server';

import { connectToDB } from '@/utils/db';
import { verifyPassword, generateAccessToken } from '@/utils/auth';
import { signInSchema } from '@/schemas/auth.schema';
import { ACCESS_TOKEN_NAME } from '@/constants';
import model from '@/models/User';

export async function POST(req) {
  try {
    await connectToDB();
    const data = await req.json();
    const validated = signInSchema.safeParse(data);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return NextResponse.json({ message: 'ثبت نام ناموفق بود.', errors }, { status: 400 });
    }

    const user = await model.findOne({ email: data.email }, '+password -__v');

    const incorrectCrendentialsResponse = NextResponse.json(
      { message: 'ایمیل یا رمز عبور اشتباه است.' },
      { status: 401 }
    );

    if (!user) return incorrectCrendentialsResponse;

    const isPasswordValid = verifyPassword(data.password, user.password);

    if (!isPasswordValid) return incorrectCrendentialsResponse;

    // make sure to NOT send password in the response.
    const userData = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      _id: user._id,
    };

    const response = NextResponse.json({ user: userData, message: 'خوش آمدید' });
    const accessToken = generateAccessToken({ email: user.email });

    response.cookies.set(ACCESS_TOKEN_NAME, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.ACCESS_TOKEN_EXPIRE_TIME,
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
