import { queryOptions, mutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { getUser, signOutUser } from '@/services/user';
import queryClient from '@/queryClient';

export const getUserQueryOptions = () =>
  queryOptions({
    queryKey: ['user'],
    queryFn: getUser,
    retry: (failureCount, error) => {
      const { status } = error.response;
      if (status === 401) return false;
      return failureCount < 2;
    },
  });

export const signOutUserMutationOptions = () =>
  mutationOptions({
    mutationKey: ['user'],
    mutationFn: signOutUser,
    onSuccess: (data) => {
      console.log(data)
      queryClient.setQueryData(['user'], null);
      toast.success(data.message);
    },
    onError: (err) => toast.error(err.response.data?.message || 'خطا هنگام خروج از حساب کاربری.'),
  });
