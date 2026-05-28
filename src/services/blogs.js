import api from '@/axiosInstance';

export const getBlogs = async (searchParams) => {
  const res = await api.get(`/api/blogs?${searchParams.toString()}`);
  return res.data;
};
