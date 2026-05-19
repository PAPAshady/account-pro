import api from '@/axiosInstance';

export const getComments = async (productId) => {
  const res = await api.get(`/api/comments/${productId}`);
  return res.data;
};

export const addComment = async (comment) => {
  const res = await api.post('/api/comments', comment);
  return res.data;
};
