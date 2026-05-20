import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', { productId }] });
      toast.success('نظر شما با موفقیت ثبت شد.');
    },
    onError: (err) =>
      toast.error(err.response.data?.message || 'خطا در ایجاد کامنت. لطفا مجددا تلاش کنید.'),
  });
