import { NextResponse } from 'next/server';

import model from '@/models/User';
import { signUpSchema } from '@/schemas/auth.schema';
import { connectToDB } from '@/utils/db';
import { hashPassword } from '@/utils/auth';
import { generateAccessToken } from '@/utils/auth';
import { ACCESS_TOKEN_NAME } from '@/constants';

export async function POST(req) {
  try {
    await connectToDB();
    const data = await req.json();
    const validated = signUpSchema.safeParse(data);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'ثبت نام ناموفق بود.', errors }, { status: 400 });
    }

    const alreadyExists = await model.findOne({
      $or: [{ email: data.email }, { phone: data.phone }],
    });

    if (alreadyExists) {
      const isEmailDuplicated = alreadyExists.email === data.email;
      return Response.json(
        {
          message: `این ${isEmailDuplicated ? 'ایمیل' : 'شماره تلفن'} قبلا استفاده شده است.`,
          field: isEmailDuplicated ? 'email' : 'phone',
        },
        { status: 409 }
      );
    }

    const hashed = hashPassword(data.password);
    const user = await model.create({ ...data, password: hashed });
    const accessToken = generateAccessToken({ email: data.email });

    // make sure to NOT send password in the response.
    const userData = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      _id: user._id,
    };

    const response = NextResponse.json({ user: userData, message: 'خوش آمدید' }, { status: 201 });

    response.cookies.set(ACCESS_TOKEN_NAME, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.ACCESS_TOKEN_EXPIRE_TIME,
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (err) {
    console.error('Error creating user => ', err);
    return Response.json(
      { message: 'ثبت نام ناموفق بود. لطفا دوباره تلاش کنید.' },
      { status: 500 }
    );
  }
}
