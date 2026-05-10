import { queryOptions, mutationOptions } from '@tanstack/react-query';

import { getCart, addToCart, removeFromCart, updateCartAmount } from '@/services/cart';
import queryClient from '@/queryClient';

const refreshCart = (data) => {
  queryClient.setQueryData(['cart'], data);
};

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

export const updateCartAmountMutationOptions = () =>
  mutationOptions({
    mutationKey: ['cart'],
    mutationFn: updateCartAmount,
    onSuccess: refreshCart,
  });
