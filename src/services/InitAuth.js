'use client';
import { useEffect } from 'react';

import useAuth from '@/store/useAuth';
import api from '@/axiosInstance';

export default function InitAuth() {
  const setUser = useAuth((state) => state.setUser);
  const setIsLoading = useAuth((state) => state.setIsLoading);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const user = await api.get('/api/auth/me');
        setUser(user.data);
      } catch (err) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, [setIsLoading, setUser]);

  return null;
}
