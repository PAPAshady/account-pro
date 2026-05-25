import api from '@/axiosInstance';

export const createChat = async (chat) => {
  const res = await api.post('/api/chats', chat);
  return res.data;
};

export const getChats = async (status = 'all') => {
  const res = await api.get(`/api/chats/${status}`);
  return res.data;
};
