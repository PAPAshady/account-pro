import Banner from '@templates/Banner/Banner';
import AboutUs from '@templates/AboutUs/AboutUs';
import OrderingWays from '@templates/OrderingWays';
import Reviews from '@templates/Reviews/Reviews';

export default function page() {
  return (
    <div className="space-y-27">
      <Banner />
      <AboutUs />
      <OrderingWays />
      <Reviews />
    </div>
  );
}
