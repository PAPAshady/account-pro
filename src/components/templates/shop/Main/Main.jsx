import { Suspense } from 'react';

import ProductsPageSearchBox from '@templates/shop/ProductsPageSearchBox/ProductsPageSearchBox';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

export default async function Main({ params }) {
  return (
    <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
      <ProductsPageSearchBox />
      <FiltersSlider />
      <Suspense fallback="Loading products...">
        <ProductsGrid params={params} />
      </Suspense>
    </main>
  );
}
