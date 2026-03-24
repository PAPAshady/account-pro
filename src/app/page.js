import Banner from '@/components/templates/index/Banner/Banner';
import Categories from '@/components/templates/index/Categories/Categories';

export default function Home() {
  return (
    <div className='space-y-25'>
      <Banner />
      <Categories />
    </div>
  );
}
