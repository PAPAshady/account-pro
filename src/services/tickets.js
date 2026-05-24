import api from '@/axiosInstance';

export const addTicket = async (ticket) => {
  const res = await api.post('/api/tickets', ticket);
  return res.data;
};
