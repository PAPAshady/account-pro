import Sidebar from '@/components/templates/shop/Sidebar/Sidebar';
import SearchBox from '@modules/SearchBox/SearchBox';
import ProductCard from '@modules/Cards/ProductCard/ProductCard';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import { BASE_URL } from '@/constants';

export default async function Shop() {
  const res = await fetch(`${BASE_URL}/api/products`, {
    cache: 'force-cache',
  });
  const products = await res.json();
  return (
    <div className="container">
      <div className="items-start gap-4 min-[880px]:flex lg:gap-8">
        <Sidebar />
        <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
          <SearchBox />
          <FiltersSlider />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'فروشگاه - اکانت پرو',
};
