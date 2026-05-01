import { cookies } from 'next/headers';

import model from '@/models/User';
import { connectToDB } from '@/utils/db';
import { verifyToken } from '@/utils/auth';
import { ACCESS_TOKEN_NAME } from '@/constants';

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
