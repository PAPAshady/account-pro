import { hashSync, compareSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { tokenNames } from '@/constants';
import model from '@/models/User';

export const hashPassword = (password) => {
  return hashSync(password, 12);
};

export const verifyPassword = (password, hashedPassword) => {
  return compareSync(password, hashedPassword);
};

export const generateAccessToken = (payload) => {
  return sign(payload, process.env.JWT_SECRET, { expiresIn: 900 }); // 15mins
};

export const generateRefreshToken = (payload) => {
  return sign(payload, process.env.JWT_SECRET, { expiresIn: '15d' });
};

export const verifyToken = (token) => {
  try {
    return verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const ensureAuthentication = async (cookies) => {
  const refreshToken = cookies.get(tokenNames.JWT_REFRESH)?.value;
  const accessToken = cookies.get(tokenNames.JWT_ACCESS)?.value;
  const refreshPayload = verifyToken(refreshToken);
  const accessPayload = verifyToken(accessToken);

  // No tokens at all — redirect to sign-in
  if (!refreshPayload && !accessPayload) {
    return { success: false, message: 'Authentication required.', newCookies: [] };
  }

  // invalid access token, call refresh endpoint
  if (!accessPayload && refreshPayload) {
    try {
      const refreshResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/auth/refresh', {
        method: 'POST',
        headers: {
          Cookie: req.cookies.toString(),
        },
      });

      //  Refresh failed. User must login again.
      if (!refreshResponse.ok)
        return { success: false, message: 'Authentication failed', newCookies: [] };

      const newCookies = refreshResponse.headers.getSetCookie();
      return { success: true, message: 'User re-authenticated.', newCookies };
    } catch (err) {
      console.log('Token validation failed => ', err);
      return { success: false, message: 'Authentication failed', newCookies: [] };
    }
  }

  // Access token is still valid — forward normally
  return { success: true, message: 'User is authenticated', newCookies: [] };
};
