import { mutationOptions } from '@tanstack/react-query';

import { addComment } from '@/services/comments';
import queryClient from '@/queryClient';

export const addCommentMutationOptions = (productId) =>
  mutationOptions({
    mutationKey: ['comments', { productId }],
    mutationFn: (comment) => addComment({ productId, ...comment }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['comments', { productId }] }),
  });
