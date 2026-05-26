import api from '@/axiosInstance';

export const getMessages = async (chatId) => {
  const res = await api.get(`/api/tickets/${chatId}`);
  return res.data
};
