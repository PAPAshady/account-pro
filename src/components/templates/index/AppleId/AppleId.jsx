import Image from 'next/image';

import { FaShippingFast } from 'react-icons/fa';

import RadioInput from '@modules/RadioInput/RadioInput';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';

const appleIds = [
  { id: 1, title: 'اپل آیدی آمریکا', description: 'تحویل فوری', defaultChecked: true },
  { id: 2, title: 'اپل آیدی کشور دلخواه', description: 'تحویل فوری' },
  { id: 3, title: 'اپل آیدی با اطلاعات شخصی', description: 'تحویل ۲ تا ۴ ساعت' },
  { id: 4, title: 'پکیج اپل آیدی', description: 'ویژه فروشندگان' },
  { id: 5, title: 'اپل آیدی کانادا', description: 'دائمی و بدون محدودیت' },
  { id: 6, title: 'رفع خطای نات اکتیو', description: 'رفع خطای فعال نشدن اپل آیدی' },
];

export default function AppleId() {
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
          <div className="relative z-1 gap-3 space-y-4 md:w-[70%] md:space-y-0 lg:flex lg:w-full">
            <div className="relative grow">
              {/* rectangle image */}
              <div className="absolute top-1/2 -left-[11%] -z-1 hidden -translate-y-1/2 lg:block">
                <Image
                  alt=""
                  src="/images/index/apple-id-rectangle.png"
                  width={100}
                  height={308}
                  className="h-77 w-25"
                />
              </div>
              <div className="grid h-full grow grid-cols-1 gap-3 md:mb-4 lg:m-0 lg:grid-cols-2">
                {appleIds.map((appleId) => (
                  <AppleIdItem key={appleId.id} {...appleId} />
                ))}
              </div>
            </div>
            <div className="bg-box rounded-box-ltr z-1 grow space-y-4 p-2.5">
              <div className="flex gap-4">
                <FaShippingFast className="ms-2 mt-2" />
                <div>
                  <p className="text-xl">تایید و ثبت سفارش</p>
                  <p className="text-primary text-sm">Accept and Ordering</p>
                </div>
              </div>
              <div className="mx-auto flex max-w-90 justify-between">
                <span className="text-sm">تعداد</span>
                <span className="text-sm">مبلغ قابل پرداخت</span>
              </div>
              <div className="mx-auto flex max-w-90 items-center justify-between gap-2 pb-4">
                <div>
                  <div className="text-blackColor flex items-center gap-2">
                    <button className="bg-primary rounded-box-rtl flex cursor-pointer items-center justify-center p-2 text-lg">
                      +
                    </button>
                    <input
                      type="text"
                      className="bg-foreground w-10 rounded-lg px-3 py-1 text-center text-white outline-none"
                      defaultValue={1}
                      maxLength={2}
                    />
                    <button className="bg-primary rounded-box-ltr flex cursor-pointer items-center justify-center p-2 text-lg">
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <span className="min-[360px]:text-xl sm:text-2xl">3,212,000</span>
                    <span className="text-primary ms-1 min-[360px]:ms-2 sm:text-lg">تومان</span>
                  </div>
                </div>
              </div>
              <PrimaryButton dir="ltr" className="bg-primary bg-hatching text-blackColor w-full">
                افزودن به سبد خرید
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppleIdItem({ title, description, defaultChecked }) {
  return (
    <label className="bg-box group hover:bg-primary hover:bg-hatching rounded-box-ltr flex items-center gap-3.75 p-2.5 transition-all duration-300">
      <RadioInput
        name="appleId"
        value={title}
        defaultChecked={defaultChecked}
        className="group-hover:bg-[#19191955]!"
      />
      <div className="space-y-1">
        <p className="group-hover:text-blackColor line-clamp-1 transition-colors duration-300">
          {title}
        </p>
        <span className="text-primary group-hover:text-blackColor line-clamp-1 text-sm transition-colors duration-300">
          {description}
        </span>
      </div>
    </label>
  );
}
