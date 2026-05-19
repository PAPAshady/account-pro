import { mutationOptions, queryOptions } from '@tanstack/react-query';

import { addComment, getComments } from '@/services/comments';
import queryClient from '@/queryClient';

export const getCommentsQueryOptions = (productId) =>
  queryOptions({
    queryKey: ['comments', { productId }],
    queryFn: () => getComments(productId),
  });

export const addCommentMutationOptions = (productId) =>
  mutationOptions({
    mutationKey: ['comments', { productId }],
    mutationFn: (comment) => addComment({ productId, ...comment }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments', { productId }] }),
  });
