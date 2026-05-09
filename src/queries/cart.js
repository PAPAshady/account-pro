import { queryOptions, mutationOptions } from '@tanstack/react-query';

import { getCart, addToCart } from '@/services/cart';
import queryClient from '@/queryClient';

export const getCartQueryOptions = () =>
  queryOptions({
    queryKey: ['cart'],
    queryFn: getCart,
  });

export const addToCartMutationOptions = () =>
  mutationOptions({
    mutationKey: ['cart'],
    mutationFn: addToCart,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });
