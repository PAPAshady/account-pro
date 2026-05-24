import api from '@/axiosInstance';

export const addTicket = async (ticket) => {
  const res = await api.post('/api/tickets', ticket);
  return res.data;
};

export const getTickets = async (status = 'all') => {
  console.log(status);
  const res = await api.get(`/api/tickets/${status}`);
  return res.data;
};
