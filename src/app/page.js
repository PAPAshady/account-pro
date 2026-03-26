import Banner from '@templates/index/Banner/Banner';
import Categories from '@templates/index/Categories/Categories';
import Services from '@templates/index/Services/Services';
import AppleId from '@templates/index/AppleId/AppleId';
import OrderingWays from '@templates/index/OrderingWays/OrderingWays';

export default function Home() {
  return (
    <div className="space-y-27 overflow-x-hidden">
      <Banner />
      <Categories />
      <Services />
      <AppleId />
      <OrderingWays />
      <div className="h-100"></div>
    </div>
  );
}
