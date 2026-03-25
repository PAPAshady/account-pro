import Image from 'next/image';

import { FaShippingFast } from 'react-icons/fa';

import RadioInput from '@modules/RadioInput/RadioInput';
import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';

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
      <div className="z-1 container">
        <div className="gap-3 space-y-4 md:flex md:space-y-0">
          <div className="bg-foreground rounded-box-ltr relative flex flex-col items-center p-2.5 md:w-[30%] lg:w-auto">
            <Image
              className="w-25 mix-blend-lighten md:w-44 lg:w-50 xl:w-60"
              alt="Apple Id"
              src="/images/apple.png"
              width={174}
              height={201}
            />
            <div className="lg:-mt-10 lg:text-center xl:-mt-16">
              <h4 className="text-xl font-bold md:text-2xl">سفارش اپل آیدی</h4>
              <h4 className="text-xl font-bold md:text-2xl">Apple ID</h4>
            </div>
          </div>
          <div className="gap-3 space-y-4 md:w-[70%] md:space-y-0 lg:flex lg:w-full">
            <div className="grid grow grid-cols-1 gap-3 md:mb-4 lg:m-0 lg:grid-cols-2">
              {appleIds.map((appleId) => (
                <AppleIdItem key={appleId.id} {...appleId} />
              ))}
            </div>
            <div className="bg-foreground rounded-box-ltr grow space-y-4 p-2.5">
              <div className="flex gap-4">
                <FaShippingFast className="ms-2 mt-2" />
                <div>
                  <p>تایید و ثبت سفارش</p>
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
