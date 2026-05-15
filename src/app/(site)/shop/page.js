import { getCategories } from '@/lib/categories';
import { getProductPriceRange } from '@/lib/products';
import Container from '@templates/shop/Container/Container';

export default async function Shop() {
  const categories = await getCategories();
  const priceRange = await getProductPriceRange();
  return (
    <div className="container">
      <Container categories={categories} priceRange={priceRange} />
    </div>
  );
}

export const metadata = {
  title: 'فروشگاه - اکانت پرو',
};
