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

export const getFavoriteProducts = async () => {
  const res = await api.get('/api/favorites/type/product');
  return res.data;
};

export const toggleBlogFavoriteStatus = async (itemId) => {
  const res = await api.post('/api/favorites', { type: FAVORITES_ITEM_TYPES.BLOG, itemId });
  return res.data;
};

export const isBlogInFavorites = async (blogId) => {
  const res = await api.get(`/api/favorites/${blogId}`);
  return res.data;
};

export const getFavoriteBlogs = async () => {
  const res = await api.get('/api/favorites/type/blog');
  return res.data;
};
