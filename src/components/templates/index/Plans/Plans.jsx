import Image from 'next/image';

import PlanCard from '@modules/Cards/PlanCard/PlanCard';
import Particle from '@modules/Particle/Particle';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

const plans = [
  { id: 1, title: 'یکماهه', price: 150_000 },
  { id: 2, title: 'سه ماهه', price: 250_000 },
  { id: 4, title: 'یکساله', price: 120_000 },
];

export default function Plans() {
  return (
    <div className="relative container">
      <Particle className="-bottom-30 -left-35 z-2 size-40 opacity-60 blur-[75px] sm:size-45 sm:blur-[80px]" />
      <div className="absolute -top-30 -right-70 min-[1100px]:-bottom-10! sm:top-[unset] sm:-right-60 sm:-bottom-30 lg:-right-60">
        <Image
          alt=""
          src="/images/index/ring-particle-4.png"
          width={257}
          height={182}
          className="h-70.5 w-89.25 -rotate-5 mix-blend-color-dodge lg:h-80.5 lg:w-99.25"
        />
        <div className="bg-primary absolute inset-0 size-full mix-blend-hue"></div>
      </div>
      <div className="absolute -bottom-50 -left-65 sm:-top-20 sm:-bottom-[unset] sm:-left-70 lg:-top-32 lg:-left-65">
        <Image
          alt=""
          src="/images/index/ring-particle-4.png"
          width={257}
          height={182}
          className="h-70.5 w-89.25 -rotate-44 rotate-x-180 mix-blend-color-dodge lg:h-80.5 lg:w-99.25"
        />
        <div className="bg-primary absolute inset-0 size-full mix-blend-hue"></div>
      </div>

      <div className="gap-4 min-[1100px]:flex">
        <div className="mb-4 text-center min-[1100px]:w-[25%] min-[1100px]:pt-16 min-[1100px]:text-start md:mb-10 lg:mb-12">
          <div className="relative mb-4">
            <h4 className="text-xl font-bold sm:mix-blend-color-dodge md:text-2xl lg:mb-2 lg:text-3xl">
              پلن های قیمتی
            </h4>
            <h4 className="text-xl font-bold sm:mix-blend-color-dodge md:text-2xl lg:text-3xl">
              Price&apos;s plans
            </h4>
            <div className="absolute hidden size-full bg-white mix-blend-hue sm:block"></div>
          </div>
          <p className="text-paragraph text-sm lg:text-base">
            با انتخاب پلن مناسب خود، علاوه بر صرفه‌جویی در هزینه، تجربه‌ای بدون دغدغه از استفاده از
            حساب‌های پریمیوم خواهید داشت.
          </p>
          <div className="mt-6 hidden min-[1100px]:block">
            <PrimaryButton className="w-full max-w-40">مشاهده همه</PrimaryButton>
          </div>
        </div>
        <div className="relative z-1 grid grow grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center min-[1100px]:hidden">
        <PrimaryButton className="w-full max-w-40">مشاهده همه</PrimaryButton>
      </div>
    </div>
  );
}
