import ProductCard from '@/components/modules/Cards/ProductCard/ProductCard';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';
import { BASE_URL } from '@/constants';

export default async function Services() {
  const res = await fetch(`${BASE_URL}/api/products`, {
    cache: 'force-cache',
  });
  const products = await res.json();
  return (
    <div className="relative">
      <Particle className="-bottom-26 left-0 z-2 size-44 opacity-60 blur-[70px] sm:-bottom-46 sm:size-68 sm:opacity-40 sm:blur-[80px] lg:opacity-30" />
      <div className="container">
        <div className="relative w-full bg-[url('/images/index/section-container-lg.png')] bg-position-[center_55] bg-no-repeat lg:bg-[url('/images/index/section-container-sm.png')] lg:bg-position-[center_20]">
          <div className="space-y-2">
            <h3 className="font-morabba text-center text-[26px] font-semibold">
              سرویس های اکانت پرو
            </h3>
            <h3 className="text-paragraph font-stretchPro mb-4 text-center text-sm font-semibold lg:mb-5">
              Services
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 min-[1140px]:grid-cols-4! sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <PrimaryButton dir="ltr" className="w-2/3 max-w-43">
              مشاهده همه
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
