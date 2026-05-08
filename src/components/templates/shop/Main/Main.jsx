import SearchBox from '@modules/SearchBox/SearchBox';
import ProductCard from '@modules/Cards/ProductCard/ProductCard';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import { BASE_URL } from '@/constants';

export default async function Main({ params }) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, v));
    } else if (value !== undefined && value !== null) {
      searchParams.append(key, value);
    }
  });

  const res = await fetch(`${BASE_URL}/api/products?${searchParams.toString()}`, {
    cache: 'force-cache',
  });
  const products = await res.json();
  return (
    <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
      <SearchBox />
      <FiltersSlider />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
        {products?.map((product) => (
          <ProductCard key={product._id} image={product.images[0].url} {...product} />
        ))}
      </div>
    </main>
  );
}
