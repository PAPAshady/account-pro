import { queryOptions } from '@tanstack/react-query';

import { getBlogs } from '@/services/blogs';

export const getBlogsQueryOptions = (searchParams) => {
  const filters = {
    cat: searchParams.getAll('cat'),
    search: searchParams.get('search'),
  };

  return queryOptions({
    queryKey: ['blogs', filters],
    queryFn: () => getBlogs(searchParams),
  });
};
