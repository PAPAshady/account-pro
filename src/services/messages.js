import api from '@/axiosInstance';

export const sendMessage = async (message) => {
  const res = await api.post(`/api/messages`, message);
  return res.data;
};
