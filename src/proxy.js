import { NextResponse } from 'next/server';

export async function proxy(req) {
  const userRes = await fetch(new URL('/api/auth/me', req.url), {
    method: 'GET',
    headers: req.headers,
  });
  const isUserValid = userRes.status === 200;
  if (!isUserValid) return NextResponse.redirect(new URL('/sign-in', req.url));
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
