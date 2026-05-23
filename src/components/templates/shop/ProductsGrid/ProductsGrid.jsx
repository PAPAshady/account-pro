'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { FaSearchMinus } from 'react-icons/fa';
import ProductCard from '@modules/Cards/ProductCard/ProductCard';
import ProductCardSkeleton from '@modules/Cards/ProductCard/ProductCardSkeleton';
import { getFilteredProductsQueryOptions } from '@/queries/products';

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

  if (!products?.length) {
    return (
      <div className="border-primary/30 mt-10 flex flex-col items-center justify-center gap-6 rounded-lg border px-4 py-5 text-center lg:py-10">
        <FaSearchMinus className="text-2xl" />
        <div className="space-y-2">
          <p>نتیجه ای برای جستجوی شما یافت نشد.</p>
          <p className="text-paragraph text-sm">فیلتر های جستجوی خود را تغییر دهید.</p>
        </div>
      </div>
    );
  }

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
