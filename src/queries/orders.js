import { mutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { addOrder } from '@/services/orders';
import queryClient from '@/queryClient';

export const addOrderMutationOptions = () =>
  mutationOptions({
    mutationKey: ['orders'],
    mutationFn: addOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('پرداخت موفقیت آمیز بود.');
    },
    onError: (err) => {
      const { data } = err.response;
      toast.error(data?.message || 'خطا در ثبت سفارش. لطفا مجددا تلاش کنید.');
    },
  });
