import { hashSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const hashPassword = (password) => {
  return hashSync(password, 12);
};

export const generateAccessToken = (payload) => {
  return sign(payload, process.env.JWT_SECRET, { expiresIn: 900 }); // 15mins
};
