import Main from '@templates/shop/Main/Main';
import Sidebar from '@templates/shop/Sidebar/Sidebar';
import { getCategories } from '@/services/categories';

export default async function Shop({ searchParams }) {
  const categories = await getCategories();
  const params = await searchParams;
  return (
    <div className="container">
      <div className="items-start gap-4 min-[880px]:flex lg:gap-8">
        <Sidebar categories={categories} />
        <Main params={params} />
      </div>
    </div>
  );
}

export const metadata = {
  title: 'فروشگاه - اکانت پرو',
};
