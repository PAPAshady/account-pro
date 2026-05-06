import { cookies } from 'next/headers';

import { hashSync, compareSync } from 'bcryptjs';
import { connectToDB } from './db';
import { sign, verify } from 'jsonwebtoken';
import { ACCESS_TOKEN_NAME } from '@/constants';
import usersModel from '@/models/User';
import { USER_ROLES } from '@/constants';

export const hashPassword = (password) => {
  return hashSync(password, 12);
};

export const verifyPassword = (password, hashedPassword) => {
  return compareSync(password, hashedPassword);
};

export const generateAccessToken = (payload) => {
  return sign(payload, process.env.JWT_SECRET, {
    expiresIn: +process.env.ACCESS_TOKEN_EXPIRE_TIME,
  });
};

export const verifyToken = (token) => {
  try {
    return verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const validateUser = async ({ checkIsAdmin = false } = {}) => {
  try {
    await connectToDB();
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get(ACCESS_TOKEN_NAME)?.value;
    const tokenPayload = verifyToken(accessToken);
    if (!tokenPayload) return Response.json(false, { status: 401 });
    const user = await usersModel.findOne({ email: tokenPayload?.email }, '-__v');
    if (!user) return Response.json(false, { status: 401 });

    if (checkIsAdmin) {
      const adminRoles = [USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN];
      if (adminRoles.includes(user.role)) return Response.json(true);
      return Response.json(false, { status: 403 });
    }

    return Response.json(true);
  } catch (err) {
    console.error('Failed to get user data => ', err);
    return Response.json(false, { status: 500 });
  }
};
