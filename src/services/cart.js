import api from '@/axiosInstance';

export const getCart = async () => {
  const cart = await api.get('api/cart');
  return cart.data;
};

export const addToCart = async (product) => {
  const res = await api.post('/api/cart', product);
  return res.data;
};

export const removeFromCart = async (productId) => {
  const res = await api.delete(`/api/cart/${productId}`);
  return res.data;
};

export const updateCartAmount = async ({ productId, actionType, quantity }) => {
  const res = await api.patch(`/api/cart/${productId}`, { actionType, quantity });
  return res.data;
};
