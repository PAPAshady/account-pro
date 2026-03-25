import Banner from '@/components/templates/index/Banner/Banner';
import Categories from '@/components/templates/index/Categories/Categories';
import Services from '@/components/templates/index/Services/Services';

export default function Home() {
  return (
    <div className="space-y-27">
      <Banner />
      <Categories />
      <Services />
    </div>
  );
}
