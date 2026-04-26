import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { verifyToken } from '@/utils/auth';
import { tokenNames } from '@/constants';

export default async function proxy(req) {
  const cookiesStore = await cookies();
  const refreshToken = cookiesStore.get(tokenNames.JWT_REFRESH)?.value;
  const accessToken = cookiesStore.get(tokenNames.JWT_ACCESS)?.value;
  const refreshPayload = verifyToken(refreshToken);
  const accessPayload = verifyToken(accessToken);

  // No tokens at all — redirect to sign-in
  if (!refreshPayload && !accessPayload) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  // invalid access token, call refresh endpoint
  if (!accessPayload && refreshPayload) {
    try {
      const refreshResponse = await fetch(new URL('/api/auth/refresh', req.url), {
        method: 'POST',
        headers: {
          Cookie: cookiesStore.toString(),
        },
      });

      //  Refresh failed. User must login again.
      if (!refreshResponse.ok) throw new Error('refresh_failed');

      const newCookies = refreshResponse.headers.getSetCookie();
      const response = NextResponse.next();
      newCookies.forEach((cookie) => response.headers.append('Set-Cookie', cookie));
      return response;
    } catch (err) {
      const response = NextResponse.redirect(new URL('/sign-in', req.url));
      response.cookies.delete(tokenNames.JWT_REFRESH);
      response.cookies.delete(tokenNames.JWT_ACCESS);
      return response;
    }
  }

  // Access token is still valid — forward normally
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
