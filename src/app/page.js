import Banner from '@templates/index/Banner/Banner';
import Categories from '@templates/index/Categories/Categories';
import Services from '@templates/index/Services/Services';
import AppleId from '@templates/index/AppleId/AppleId';
import OrderingWays from '@templates/index/OrderingWays/OrderingWays';
import Plans from '@templates/index/Plans/Plans';

export default function Home() {
  return (
    <div className="space-y-27 lg:space-y-32 overflow-x-hidden">
      <Banner />
      <Categories />
      <Services />
      <AppleId />
      <OrderingWays />
      <Plans />
      <div className="h-100"></div>
    </div>
  );
}
