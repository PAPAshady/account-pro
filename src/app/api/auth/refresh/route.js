import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { verifyToken, generateAccessToken, generateRefreshToken } from '@/utils/auth';
import model from '@/models/User';
import { connectToDB } from '@/utils/db';

export async function POST() {
  await connectToDB();
  try {
    const cookiesStore = await cookies();
    const refreshToken = cookiesStore.get('jwt_refresh')?.value;

    const tokenPayload = verifyToken(refreshToken);

    if (!tokenPayload) {
      return Response.json({ message: 'Invalid refresh token. User must login.' }, { status: 401 });
    }

    const user = await model.findOne({ email: tokenPayload?.email }, 'refreshToken email _id');

    if (!user || user.refreshToken !== refreshToken) {
      return Response.json({ message: 'Refresh token revoked. User must login' }, { status: 401 });
    }

    const newAccessToken = generateAccessToken({ email: user.email });
    const newRefreshToken = generateRefreshToken({ email: user.email });

    await model.findByIdAndUpdate(user._id, { refreshToken: newRefreshToken });

    const response = NextResponse.json({ success: true });

    response.cookies.set('jwt_access', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.ACCESS_TOKEN_EXPIRE_TIME,
      sameSite: 'lax',
      path: '/',
    });

    response.cookies.set('jwt_refresh', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.REFRESH_TOKEN_EXPIRE_TIME,
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (err) {
    console.log('Refresh error => ', err);
    return Response.json({ message: 'Refresh failed.' }, { status: 500 });
  }
}
