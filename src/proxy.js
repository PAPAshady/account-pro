import { NextResponse } from 'next/server';
import { validateUser } from './utils/auth';

export async function proxy(req) {
  const isUserValid = (await validateUser()).status === 200;
  if (!isUserValid) return NextResponse.redirect(new URL('/sign-in', req.url));
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
