import Image from 'next/image';

import Particle from '@modules/Particle/Particle';
import OrderForm from './OrderForm';
import { getPlans } from '@/lib/plans';

export default async function ApplePlans() {
  const { data: plans } = await getPlans('6a300d26874ca77adef3db2d'); // get apple plans

  return (
    <div className="relative">
      <Particle className="-right-15 -bottom-30 z-2 size-40 opacity-60 blur-[75px] sm:-bottom-35 sm:size-45 sm:blur-[80px]" />
      <div className="relative container">
        <div className="absolute top-10 -right-30 mix-blend-lighten">
          <Image
            alt=""
            src="/images/index/ring-particle-3.png"
            width={144}
            height={194}
            className="h-50.75 w-36"
          />
        </div>
        <div className="absolute bottom-32 -left-33 rotate-180 mix-blend-lighten lg:bottom-[unset]">
          <Image
            alt=""
            src="/images/index/ring-particle-3.png"
            width={144}
            height={194}
            className="h-50.75 w-36"
          />
        </div>

        <div className="gap-3 space-y-4 md:flex md:space-y-0">
          <div className="bg-box rounded-box-ltr relative flex items-center p-2.5 pb-0 md:w-[30%] md:flex-col md:text-center lg:w-auto lg:flex-col lg:p-2.5">
            <Image
              className="w-25 mix-blend-lighten md:w-44 lg:w-50 xl:w-60"
              alt="Apple Id"
              src="/images/apple.png"
              width={174}
              height={201}
            />
            <div className="lg:-mt-10 lg:text-center xl:-mt-16">
              <h4 className="font-morabba text-xl font-semibold md:text-[26px]">سفارش اپل آیدی</h4>
              <h4 className="font-stretchPro text-paragraph text-sm">Apple ID</h4>
            </div>
          </div>
          <OrderForm plans={plans} />
        </div>
      </div>
    </div>
  );
}
