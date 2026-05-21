import { mutationOptions } from '@tanstack/react-query';

import { addOrder } from '@/services/orders';

export const addOrderMutationOptions = () =>
  mutationOptions({
    mutationKey: ['orders'],
    mutationFn: addOrder,
  });
