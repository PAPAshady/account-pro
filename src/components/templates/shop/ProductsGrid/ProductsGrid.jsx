'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import ProductCard from '@modules/Cards/ProductCard/ProductCard';
import ProductCardSkeleton from '@modules/Cards/ProductCard/ProductCardSkeleton';
import { getFilteredProductsQueryOptions } from '@/queries/products';
import Empty from '@modules/Empty/Empty';

export default function ProductsGrid() {
  const searchParams = useSearchParams();
  const { data: products, isPending } = useQuery(getFilteredProductsQueryOptions({ searchParams }));

  if (isPending) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
        {Array(6)
          .fill()
          .map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
      </div>
    );
  }

  if (!products?.length) return <Empty />;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          title={product.title}
          minPlanPrice={product.minPlanPrice}
          region={product.region}
          image={product.images[0].url}
          slug={product.slug}
        />
      ))}
    </div>
  );
}
