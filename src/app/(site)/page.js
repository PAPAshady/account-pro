import Banner from '@templates/Banner/Banner';
import Categories from '@templates/index/Categories/Categories';
import Services from '@templates/index/Services/Services';
import ApplePlans from '@templates/index/ApplePlans/ApplePlans';
import OrderingWays from '@templates/OrderingWays';
import Plans from '@templates/index/Plans/Plans';
import Reviews from '@templates/Reviews/Reviews';
import Blog from '@templates/index/Blog/Blog';

export default function Home() {
  return (
    <div className="space-y-27 sm:space-y-44">
      <Banner />
      <Categories />
      <Services />
      <ApplePlans />
      <OrderingWays />
      <Plans />
      <Reviews />
      <Blog />
    </div>
  );
}
