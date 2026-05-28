import { queryOptions } from '@tanstack/react-query';

import { getBlogs } from '@/services/blogs';

export const getBlogsQueryOptions = () =>
  queryOptions({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  });
