import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  toggleProductFavoriteStatus,
  isProductInFavorites,
  getFavoriteProducts,
  toggleBlogFavoriteStatus,
  isBlogInFavorites,
  getFavoriteBlogs,
} from '@/services/favorites';
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

export const getFavoriteProductsQueryOptions = () =>
  queryOptions({
    queryKey: ['favorites', 'products'],
    queryFn: getFavoriteProducts,
  });

export const toggleBlogFavoriteStatusMutaitonOptions = () =>
  mutationOptions({
    mutationKey: ['favorites', 'blogs'],
    mutationFn: toggleBlogFavoriteStatus,
    onSuccess: async (data, blogId) => {
      await queryClient.refetchQueries({ queryKey: ['favorites', 'blogs'], exact: true });
      await queryClient.setQueryData(['favorites', 'blogs', { blogId }], data.item);
      toast.success(data.message);
    },
    onError: (error) => toast.error(error.response.data.message),
  });

export const isBlogInFavoritesQueryOptions = (blogId) =>
  queryOptions({
    queryKey: ['favorites', 'blogs', { blogId }],
    queryFn: () => isBlogInFavorites(blogId),
  });

export const getFavoriteBlogsQueryOptions = () =>
  queryOptions({
    queryKey: ['favorites', 'blogs'],
    queryFn: getFavoriteBlogs,
  });
