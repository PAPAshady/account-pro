'use client';
import { useSearchParams, useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import Sidebar from '../Sidebar/Sidebar';
import { getFilteredProductsQueryOptions } from '@/queries/products';
import ProductsPageSearchBox from '@templates/shop/ProductsPageSearchBox/ProductsPageSearchBox';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import ProductsGrid from '@templates/shop/ProductsGrid/ProductsGrid';

export default function Container({ categories, priceRange }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: products, isPending } = useQuery(getFilteredProductsQueryOptions({ searchParams }));

  const onChecked = (key, value) => {
    const params = new URLSearchParams(searchParams);
    const paramExists = searchParams.getAll(key).includes(value);
    paramExists ? params.delete(key, value) : params.append(key, value);
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="items-start gap-4 min-[880px]:flex lg:gap-8">
      <Sidebar categories={categories} onChecked={onChecked} priceRange={priceRange} />
      <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
        <ProductsPageSearchBox />
        <FiltersSlider categories={categories} onChecked={onChecked} />
        <ProductsGrid products={products} isPending={isPending} />
      </main>
    </div>
  );
}
