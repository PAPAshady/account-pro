import api from '@/axiosInstance';

export const getFilteredProducts = async (searchParams) => {
  const res = await api.get(`/api/products?${searchParams.toString()}`);
  return res.data;
};
