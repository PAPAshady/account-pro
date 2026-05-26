import { queryOptions } from '@tanstack/react-query';

import { getUser } from '@/services/user';

export const getUserQueryOptions = () =>
  queryOptions({
    queryKey: ['user'],
    queryFn: getUser,
    retry: (failureCount, error) => {
      const { status } = error.response;
      if (status === 401) return false;
      return failureCount < 2;
    },
  });
