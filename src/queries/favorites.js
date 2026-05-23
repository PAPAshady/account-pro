import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { toggleProductFavoriteStatus, isProductInFavorites } from '@/services/favorites';
import queryClient from '@/queryClient';

export const toggleProductFavoriteStatusMutaitonOptions = () =>
  mutationOptions({
    mutationKey: ['favorites', 'products'],
    mutationFn: toggleProductFavoriteStatus,
    onSuccess: async (data, productId) => {
      await queryClient.invalidateQueries({ queryKey: ['favorites', 'products'], exact: true });
      await queryClient.setQueryData(['favorites', 'products', { productId }], data.item);
      toast.success(data.message);
    },
    onError: (error) => toast.error(error.response.data.message),
  });

export const isProductInFavoritesQueryOptions = (productId) =>
  queryOptions({
    queryKey: ['favorites', 'products', { productId }],
    queryFn: () => isProductInFavorites(productId),
  });
