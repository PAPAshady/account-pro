import { queryOptions } from '@tanstack/react-query';

import { getCartItems } from '@/services/cart';

export const getCartItemsQueryOptions = () =>
  queryOptions({
    queryKey: ['cart'],
    queryFn: getCartItems,
  });
