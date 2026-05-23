import { mutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { toggleProductFavoriteStatus } from '@/services/favorites';

export const toggleProductFavoriteStatusMutaitonOptions = () =>
  mutationOptions({
    mutationKey: ['favorites', 'products'],
    mutationFn: toggleProductFavoriteStatus,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
