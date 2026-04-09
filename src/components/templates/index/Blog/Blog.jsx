import Image from 'next/image';

import BlogCard from '@modules/Cards/BlogCard/BlogCard';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';

export default function Blog() {
  return (
    <div className="relative">
      <Particle className="top-20 -left-35 z-2 size-50 opacity-60 blur-[75px] min-[560px]:top-50 sm:blur-[80px] lg:top-40" />

      <div className="relative container">
        <Image
          alt=""
          width={248}
          height={248}
          src="/images/index/section-container-xl.png"
          className="absolute top-4 left-1/2 -z-1 h-[95.5%] -translate-x-1/2 lg:h-[92%]"
        />
        <div>
          <div className="mb-2">
            <h3 className="font-morabba md:mb-1 text-center text-xl font-semibold md:text-[26px]">
              وبلاگ اکانت پرو
            </h3>
            <h3 className="text-paragraph font-stretchPro mb-2 text-center text-sm font-semibold lg:mb-5">
              ‌Blog
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-2 min-[560px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <BlogCard />
            <BlogCard />
            <div className="hidden min-[560px]:block">
              <BlogCard />
            </div>
            <div className="hidden min-[560px]:block lg:hidden xl:block">
              <BlogCard />
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
