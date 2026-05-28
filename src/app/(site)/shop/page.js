import { Suspense } from 'react';

import { getCategories } from '@/lib/categories';
import { getProductPriceRange } from '@/lib/products';
import ProductsPageSearchBox from '@templates/shop/ProductsPageSearchBox/ProductsPageSearchBox';
import SearchBoxSkeleton from '@modules/SearchBox/SearchBoxSkeleton';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import FiltersSliderSkeleton from '@templates/shop/FiltersSlider/FiltersSliderSkeleton';
import ProductsGrid from '@templates/shop/ProductsGrid/ProductsGrid';
import Sidebar from '@templates/shop/Sidebar/Sidebar';
import SidebarSkeleton from '@templates/shop/Sidebar/SidebarSkeleton';
import ProductsGridSkeleton from '@templates/shop/ProductsGrid/ProductsGridSkeleton';

export default async function Shop() {
  const categories = await getCategories();
  const priceRange = await getProductPriceRange();
  return (
    <div className="container">
      <div className="items-start gap-4 min-[880px]:flex lg:gap-8">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar categories={categories} priceRange={priceRange} />
        </Suspense>
        <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
          <Suspense fallback={<SearchBoxSkeleton />}>
            <ProductsPageSearchBox />
          </Suspense>
          <Suspense fallback={<FiltersSliderSkeleton />}>
            <FiltersSlider categories={categories} priceRange={priceRange} />
          </Suspense>
          <Suspense fallback={<ProductsGridSkeleton />}>
            <ProductsGrid />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'فروشگاه - اکانت پرو',
};
