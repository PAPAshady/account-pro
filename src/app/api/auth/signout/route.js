import { cookies } from 'next/headers';

import { ACCESS_TOKEN_NAME } from '@/constants';

export async function POST() {
  try {
    const cookiesStore = await cookies();
    cookiesStore.delete(ACCESS_TOKEN_NAME);
    return new Response({ message: 'خارچ شدید.' });
  } catch (error) {
    console.error('Error signing out user => ', error);
    return Response.json({ message: 'خطا هنگام خروج از حساب کاربری' }, { status: 500 });
  }
}
