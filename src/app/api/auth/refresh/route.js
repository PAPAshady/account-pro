import { cookies } from 'next/headers';

import { verifyToken, generateAccessToken, generateRefreshToken } from '@/utils/auth';
import model from '@/models/User';
import { connectToDB } from '@/utils/db';

export async function POST() {
  await connectToDB();
  try {
    const cookiesStore = await cookies();
    const refreshToken = cookiesStore.get('jwt_refresh')?.value;

    const tokenPayload = await verifyToken(refreshToken);

    if (!tokenPayload) {
      return Response.json({ message: 'Invalid refresh token' }, { status: 401 });
    }

    const user = await model.findOne(
      { email: tokenPayload.email },
      '+refreshToken +refreshTokenExpires'
    );

    if (!user || user.refreshToken !== refreshToken || user.refreshTokenExpires < new Date()) {
      return Response.json({ message: 'Refresh token revoked.' }, { status: 401 });
    }

    const newAccessToken = await generateAccessToken({ email: user.email });
    const newRefreshToken = await generateRefreshToken({ email: user.email });

    user.refreshToken = newRefreshToken;
    user.refreshTokenExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await user.save();

    cookiesStore.set('jwt_access', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 15, // 15 mins
      path: '/',
    });

    cookiesStore.set('jwt_refresh', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 24 * 60 * 60, // 15 days
      path: '/',
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ message: 'Refresh failed.' }, { status: 500 });
  }
}
