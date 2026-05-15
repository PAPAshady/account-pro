import { queryOptions } from '@tanstack/react-query';

import { getFilteredProducts } from '@/services/products';

export const getFilteredProductsQueryOptions = ({ searchParams }) => {
  const filters = {
    cat: searchParams.getAll('cat'),
    search: searchParams.get('search'),
    minPrice: searchParams.get('minPrice'),
    maxPrice: searchParams.get('maxPrice'),
  };

  return queryOptions({
    queryKey: ['products', { filters }],
    queryFn: () => getFilteredProducts(searchParams),
  });
};
