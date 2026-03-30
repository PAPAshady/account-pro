import Banner from '@templates/index/Banner/Banner';
import Categories from '@templates/index/Categories/Categories';
import Services from '@templates/index/Services/Services';
import AppleId from '@templates/index/AppleId/AppleId';
import OrderingWays from '@templates/index/OrderingWays/OrderingWays';
import Plans from '@templates/index/Plans/Plans';
import Reviews from '@templates/index/Reviews/Reviews';
import Blog from '@templates/index/Blog/Blog';

export default function Home() {
  return (
    <div className="space-y-27 lg:space-y-32">
      <Banner />
      <Categories />
      <Services />
      <AppleId />
      <OrderingWays />
      <Plans />
      <Reviews />
      <Blog />
    </div>
  );
}
