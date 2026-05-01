import { hashSync, compareSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

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
