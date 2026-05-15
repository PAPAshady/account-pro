import { getCategories } from '@/lib/categories';
import Container from '@templates/shop/Container/Container';

export default async function Shop() {
  const categories = await getCategories();
  return (
    <div className="container">
      <Container categories={categories} />
    </div>
  );
}

export const metadata = {
  title: 'فروشگاه - اکانت پرو',
};
