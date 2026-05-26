import api from '@/axiosInstance';
import queryClient from '@/queryClient';

export const getUser = async () => {
  const user = await api.get('/api/auth/me');
  return user.data;
};

export const updateUser = (user) => {
  queryClient.setQueryData(['user'], user);
};
