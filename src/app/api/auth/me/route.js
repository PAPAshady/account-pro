import { cookies } from 'next/headers';

import { connectToDB } from '@/utils/db';
import { ensureAuthentication, verifyToken } from '@/utils/auth';
import { tokenNames } from '@/constants';
import model from '@/models/User';

export async function GET() {
  await connectToDB();
  try {
    const cookiesStore = await cookies();
    const { success, newCookies } = await ensureAuthentication(cookiesStore);
    if (!success) return Response.json(null);
    const accessToken = cookiesStore.get(tokenNames.JWT_ACCESS).value;
    const tokenPayload = verifyToken(accessToken);
    const user = await model.findOne(
      { email: tokenPayload.email },
      'email name phone _id createdAt updatedAt'
    );
    if (!user) return Response.json(null);
    const response = Response.json(user, { status: 200 });
    newCookies.map((cookie) => response.headers.append('Set-Cookie', cookie));
    return response;
  } catch (err) {
    console.error('Error getting user data => ', err);
    return Response.json({ message: 'Error getting user data.' }, { status: 500 });
  }
}
