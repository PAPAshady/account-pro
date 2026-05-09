import { queryOptions, mutationOptions } from '@tanstack/react-query';

import { getCart, addToCart, removeFromCart } from '@/services/cart';
import queryClient from '@/queryClient';

const refreshCart = () => queryClient.invalidateQueries({ queryKey: ['cart'] });

export const getCartQueryOptions = () =>
  queryOptions({
    queryKey: ['cart'],
    queryFn: getCart,
  });

export const addToCartMutationOptions = () =>
  mutationOptions({
    mutationKey: ['cart'],
    mutationFn: addToCart,
    onSuccess: refreshCart,
  });

export const removeFromCartMutationOptions = () =>
  mutationOptions({
    mutationKey: ['cart'],
    mutationFn: removeFromCart,
    onSuccess: refreshCart,
  });
