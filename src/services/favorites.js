import api from '@/axiosInstance';
import { FAVORITES_ITEM_TYPES } from '@/constants';

export const toggleProductFavoriteStatus = async (itemId) => {
  const res = await api.post('/api/favorites', { type: FAVORITES_ITEM_TYPES.PRODUCT, itemId });
  return res.data;
};

export const isProductInFavorites = async (productId) => {
  const res = await api.get(`/api/favorites/${productId}`);
  return res.data;
};
