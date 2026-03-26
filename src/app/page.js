import Banner from '@templates/index/Banner/Banner';
import Categories from '@templates/index/Categories/Categories';
import Services from '@templates/index/Services/Services';
import AppleId from '@templates/index/AppleId/AppleId';

export default function Home() {
  return (
    <div className="space-y-27 overflow-x-hidden">
      <Banner />
      <Categories />
      <Services />
      <AppleId />
      <div className="h-100"></div>
    </div>
  );
}
