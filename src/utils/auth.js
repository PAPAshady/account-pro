import { hashSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

export const hashPassword = (password) => {
  return hashSync(password, 12);
};

export const generateAccessToken = (payload) => {
  return sign(payload, process.env.JWT_SECRET, { expiresIn: 900 }); // 15mins
};

export const generateRefreshToken = (payload) => {
  return sign(payload, process.env.JWT_SECRET, { expiresIn: '15d' });
};

export const verifyToken = (token) => {
  return verify(token, process.env.JWT_SECRET);
};
