import api from '@/axiosInstance';

export const addOrder = async (data) => {
  const res = await api.post('/api/orders', data);
  return res.data;
};
