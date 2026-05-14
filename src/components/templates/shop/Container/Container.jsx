'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import Sidebar from '../Sidebar/Sidebar';
import { getFilteredProductsQueryOptions } from '@/queries/products';
import ProductsPageSearchBox from '@templates/shop/ProductsPageSearchBox/ProductsPageSearchBox';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import ProductsGrid from '@templates/shop/ProductsGrid/ProductsGrid';

export default function Container({ categories }) {
  const searchParams = useSearchParams();
  const [categoryParams, setCategoryParams] = useState(searchParams.getAll('cat'));
  const { data: products, isPending } = useQuery(getFilteredProductsQueryOptions({ searchParams }));

  // Sync state with URL when URL changes
  useEffect(() => {
    setCategoryParams(searchParams.getAll('cat'));
  }, [searchParams]);

  return (
    <div className="items-start gap-4 min-[880px]:flex lg:gap-8">
      <Sidebar
        categories={categories}
        categoryParams={categoryParams}
        setCategoryParams={setCategoryParams}
      />
      <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
        <ProductsPageSearchBox />
        <FiltersSlider categories={categories} />
        <ProductsGrid products={products} isPending={isPending} />
      </main>
    </div>
  );
}
