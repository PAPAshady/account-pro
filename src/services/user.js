import api from '@/axiosInstance';
import queryClient from '@/queryClient';

export const getUser = async () => {
  const user = await api.get('/api/auth/me');
  return user.data;
};

export const signOutUser = async () => {
  const res = await api.post('/api/auth/signout');
  return res.data;
};

export const updateUser = async (data) => {
  const res = await api.put('/api/auth/me', data);
  return res.data;
};

export const setUserData = (user) => {
  queryClient.setQueryData(['user'], user);
};
