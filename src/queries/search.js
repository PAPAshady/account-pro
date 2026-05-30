import { queryOptions } from '@tanstack/react-query';

import { searchItems } from '@/services/search';

export const searchItemsQueryOptions = (query) =>
  queryOptions({
    queryKey: ['search', query],
    queryFn: () => searchItems(query),
    enabled: !!query?.trim().length,
  });
