import { mutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { addTicket } from '@/services/tickets';
import queryClient from '@/queryClient';

export const addTicketMMutaitonOptions = () =>
  mutationOptions({
    mutationKey: ['tickets'],
    mutationFn: addTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tickets'] });
      toast.success('تیکت با موفقیت ثبت شد.');
    },
    onError: (err) => {
      console.log('Error adding new ticket => ', err.response);
      toast.error(err.response.data.message);
    },
  });
