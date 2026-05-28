import api from '@/axiosInstance';

export const getBlogs = async () => {
  const res = await api.get('/api/blogs');
  return res.data;
};
