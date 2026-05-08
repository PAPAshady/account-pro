import api from '@/axiosInstance';

export const getCartItems = async () => {
  const cart = await api.get('api/cart');
  return cart.data?.items;
};
