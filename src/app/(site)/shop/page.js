import { getCategories } from '@/lib/categories';
import { getProductPriceRange } from '@/lib/products';
import ProductsPageSearchBox from '@templates/shop/ProductsPageSearchBox/ProductsPageSearchBox';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import ProductsGrid from '@templates/shop/ProductsGrid/ProductsGrid';
import Sidebar from '@templates/shop/Sidebar/Sidebar';

export default async function Shop() {
  const categories = await getCategories();
  const priceRange = await getProductPriceRange();
  return (
    <div className="container">
      <div className="items-start gap-4 min-[880px]:flex lg:gap-8">
        <Sidebar categories={categories} priceRange={priceRange} />
        <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
          <ProductsPageSearchBox />
          <FiltersSlider categories={categories} />
          <ProductsGrid />
        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'فروشگاه - اکانت پرو',
};
