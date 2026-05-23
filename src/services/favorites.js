import api from '@/axiosInstance';
import { FAVORITES_ITEM_TYPES } from '@/constants';

export const toggleProductFavoriteStatus = async (itemId) => {
  const res = await api.post('/api/favorites', { type: FAVORITES_ITEM_TYPES.PRODUCT, itemId });
  return res.data;
};
