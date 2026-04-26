import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { verifyToken } from '@/utils/auth';
import { tokenNames } from '@/constants';

const protectedRoutes = ['/dashboard'];

let refreshPromise = null;

export default async function proxy(req) {
  const { pathname } = req.nextUrl;
  const isProtectedRoute = protectedRoutes.some((path) => pathname.startsWith(path));
  if (!isProtectedRoute) return NextResponse.next();

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
      // prevent race conditions in case multiple requests trigger with invalid token.
      if (!refreshPromise) {
        refreshPromise = fetch(new URL('/api/auth/refresh', req.url), {
          method: 'POST',
          headers: {
            Cookie: cookiesStore.toString(),
          },
        });
      }

      const refreshResponse = await refreshPromise;
      refreshPromise = null;

      //  Refresh failed. User must login again.
      if (!refreshResponse.ok) throw new Error('refresh_failed');

      const newCookies = refreshResponse.headers.getSetCookie();
      const response = NextResponse.next();
      newCookies.forEach((cookie) => response.headers.append('Set-Cookie', cookie));
      return response;
    } catch (err) {
      refreshPromise = null;
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
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|fonts).*)'],
};
