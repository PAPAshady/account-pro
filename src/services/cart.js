import api from '@/axiosInstance';

export const getCart = async () => {
  const cart = await api.get('api/cart');
  return cart.data;
};

export const addToCart = async ({ _id, quantity }) => {
  const res = await api.post('/api/cart', { id: _id, quantity });
  return res.data;
};
