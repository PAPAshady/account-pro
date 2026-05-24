import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { addTicket, getTickets } from '@/services/tickets';
import queryClient from '@/queryClient';

export const addTicketMutationOptions = () =>
  mutationOptions({
    mutationKey: ['tickets'],
    mutationFn: addTicket,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['tickets'] });
      toast.success('تیکت با موفقیت ثبت شد.');
    },
    onError: (err) => {
      console.log('Error adding new ticket => ', err.response);
      toast.error(err.response.data.message);
    },
  });

export const getTickesQueryOptions = (status = 'all') =>
  queryOptions({
    queryKey: ['tickets', status],
    queryFn: () => getTickets(status),
  });
