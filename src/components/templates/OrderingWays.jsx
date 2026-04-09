import Image from 'next/image';

import Particle from '@modules/Particle/Particle';
import { orederingWays } from '@/data';

export default function OrderingWays() {
  return (
    <div className="relative">
      <Particle className="top-60 -right-15 z-2 size-40 opacity-60 blur-[75px] sm:size-45 sm:blur-[80px]" />
      <div className="absolute top-20 -right-30 lg:top-10">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>
      <div className="absolute top-20 -left-30 lg:top-15">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>
      <div className="container">
        <div className="relative w-full bg-[url('/images/index/section-container-lg.png')] bg-position-[center_16] bg-no-repeat min-[1100px]:bg-[url('/images/index/ordering-ways-rectangle.png')]! sm:bg-[url('/images/index/section-container-sm.png')]">
          <div className="space-y-6 min-[1100px]:space-y-4! sm:space-y-8">
            <div>
              <h3 className="font-morabba text-center text-xl font-semibold md:text-[26px]">
                مراحل سفارش محصول
              </h3>
              <h3 className="text-paragraph font-stretchPro mb-4 text-center text-sm font-semibold lg:mb-5">
                Ordering Ways
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 px-2.5 min-[400px]:gap-5.5 sm:grid-cols-2 md:grid-cols-4 md:gap-4 md:px-0 lg:gap-6">
              {orederingWays.map((item) => (
                <OrderingWaysItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderingWaysItem({ title, subtitle, image, icon, id }) {
  return (
    <div className="relative">
      {id < 4 && (
        <div className="absolute top-10 -left-3 hidden lg:block">
          <Image
            src="/images/index/ordering-ways-left-arrow.png"
            width={30}
            height={25}
            className="w-7.5"
            alt=""
          />
        </div>
      )}
      <div className="rounded-box-ltr group hover:bg-primary hover:bg-hatching bg-box flex h-full justify-between gap-2 overflow-hidden ps-4.5 pe-10 pt-3.75 transition-all duration-300 md:flex-col md:items-center md:p-3 md:pb-0 lg:items-start lg:p-5 lg:pb-0">
        <div className="flex h-full grow! items-start gap-3">
          <div className="rounded-box-ltr mt-2 grid size-7 shrink-0 place-content-center group-hover:bg-[rgba(25,25,25,.2)]">
            {icon}
          </div>
          <div className="flex flex-col text-sm md:text-base">
            <p className="group-hover:text-blackColor mb-2 grow transition-colors duration-300 lg:text-xl">
              {title}
            </p>
            <p className="text-primary group-hover:text-blackColor mb-4 text-xs transition-colors duration-300 md:m-0 md:text-sm lg:text-base">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="shrink-0 translate-y-2 self-end transition-transform duration-300 group-hover:translate-y-0 md:w-full">
          <Image
            alt="Sign-up"
            src={`/images/index/${image}`}
            width={60}
            height={60}
            className="size-15 grayscale-100 md:mx-auto md:size-21.5"
          />
        </div>
      </div>
    </div>
  );
}
