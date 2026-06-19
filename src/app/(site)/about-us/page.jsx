import Banner from '@templates/Banner/Banner';
import AboutUs from '@templates/AboutUs/AboutUs';
import OrderingWays from '@templates/OrderingWays';
import Reviews from '@templates/Reviews/Reviews';
import { BASE_URL } from '@/constants';

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

export const metadata = {
  title: 'درباره ما | اکانت پرو',
  description:
    'اطلاعات درباره تیم اکانت پرو، هدف ما در ارائه خدمات مدیریت اکانت‌های پریمیوم، و ساخت تجربه‌ای امن و ساده برای کاربران.',

  alternates: {
    canonical: `${BASE_URL}/about-us`,
  },
};
