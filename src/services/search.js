import api from '@/axiosInstance';

export const searchItems = async (query) => {
  const res = await api.get(`/api/search?query=${query}`);
  return res.data;
};
