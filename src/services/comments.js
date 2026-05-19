import api from '@/axiosInstance';

export const addComment = async (comment) => {
  const res = await api.post('/api/comments', comment);
  return res.data;
};
