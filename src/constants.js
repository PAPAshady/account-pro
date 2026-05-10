export const ACCESS_TOKEN_NAME = 'jwt_access';

export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const CART_ACTION_TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

export const CART_ITEM_AMOUNT_LIMIT = {
  MIN: 1,
  MAX: 99,
};
