import Main from '@templates/shop/Main/Main';
import Sidebar from '@templates/shop/Sidebar/Sidebar';
import { BASE_URL } from '@/constants';

export default async function Shop({ searchParams }) {
  const res = await fetch(`${BASE_URL}/api/categories`);
  const categories = await res.json();
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
