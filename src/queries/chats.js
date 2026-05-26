import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { createChat, getChats, getTotalChatsCount } from '@/services/chats';
import queryClient from '@/queryClient';

export const createChatMutationOptions = () =>
  mutationOptions({
    mutationKey: ['chats'],
    mutationFn: createChat,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['chats'] });
      toast.success('تیکت با موفقیت ثبت شد.');
    },
    onError: (err) => {
      console.log('Error adding new chat => ', err.response);
      toast.error(err.response.data.message);
    },
  });

export const getChatsQueryOptions = (status = 'all') =>
  queryOptions({
    queryKey: ['chats', status],
    queryFn: () => getChats(status),
  });

export const getTotalChatsCountQueryOptions = () =>
  queryOptions({
    queryKey: ['chats', 'totals'],
    queryFn: getTotalChatsCount,
  });
