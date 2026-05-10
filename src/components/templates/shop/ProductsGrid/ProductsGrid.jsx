import ProductCard from '@modules/Cards/ProductCard/ProductCard';
import { getFilteredProducts } from '@/lib/products';

export default async function ProductsGrid({ params }) {
  const searchParams = new URLSearchParams();

  // normalize search params
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, v));
    } else if (value !== undefined && value !== null) {
      searchParams.append(key, value);
    }
  });

  const products = await getFilteredProducts(searchParams);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
      {products?.map((product) => (
        <ProductCard key={product._id} image={product.images[0].url} {...product} />
      ))}
    </div>
  );
}
