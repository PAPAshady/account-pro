import { queryOptions, mutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { getCart, addToCart, removeFromCart, updateCartAmount } from '@/services/cart';
import queryClient from '@/queryClient';

const refreshCart = (data) => {
  queryClient.setQueryData(['cart'], data);
};

export const getCartQueryOptions = () =>
  queryOptions({
    queryKey: ['cart'],
    queryFn: getCart,
    retry: (failureCount, error) => {
      const { status } = error.response;
      if (status === 401) return false;
      return failureCount < 2;
    },
  });

export const addToCartMutationOptions = () =>
  mutationOptions({
    mutationKey: ['cart'],
    mutationFn: addToCart,
    onSuccess: (data) => {
      refreshCart(data);
      toast.success('محصول به سبد خرید شما اضافه شد.');
    },
    onError: (err) =>
      toast.error(
        err.response.data?.message || 'محصول به سبد خرید اضافه نشد. لطفا مجددا تلاش کنید.'
      ),
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
