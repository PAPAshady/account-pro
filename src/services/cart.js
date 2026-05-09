import api from '@/axiosInstance';

export const getCart = async () => {
  const cart = await api.get('api/cart');
  return cart.data;
};

export const addToCart = async (product) => {
  const res = await api.post('/api/cart', product);
  return res.data;
};
