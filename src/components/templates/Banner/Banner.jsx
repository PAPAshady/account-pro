import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 hidden lg:inline-block">
        <Image
          src="/images/index/ring-particle-1.png"
          width={359}
          height={419}
          className="mix-blend-color-dodge"
          alt=""
        />
        <div className="bg-primary absolute inset-0 size-full mix-blend-hue"></div>
      </div>
      <div className="absolute -top-17 right-0 hidden lg:inline-block">
        <Image
          src="/images/index/ring-particle-2.png"
          width={296}
          height={517}
          className="mix-blend-color-dodge"
          alt=""
        />
        <div className="bg-primary absolute inset-0 size-full mix-blend-hue"></div>
      </div>

      <div className="lg:ppt-10 container flex-row-reverse items-center gap-10 space-y-4 lg:flex lg:px-15">
        <Image
          alt="Account Pro"
          src="/images/index/Banner.png"
          width={637}
          height={368}
          className="w-full mix-blend-exclusion lg:w-1/2"
        />
        <div className="space-y-5 sm:space-y-8 lg:w-1/2">
          <div className="-mt-12 space-y-5 text-center sm:space-y-8 lg:text-start">
            <h1 className="text-xl min-[360px]:text-2xl sm:text-[32px]">
              <span>خرید حساب های کاملا قانونی</span>
              <br />
              <div className="mt-2 flex items-center justify-center gap-1 sm:gap-2 lg:justify-start">
                انواع پلتفرم ها فقط با
                <Image
                  alt="اکانت پرو"
                  src="/images/logo/logo-md.png"
                  width={192}
                  height={48}
                  className="mt-1.5 w-24 sm:w-40"
                />
              </div>
            </h1>
            <p className="text-paragraph text-sm lg:w-[75%] lg:text-base">
              اکانت پرو، فروشگاه تخصصی خرید و فروش انواع اکانت‌های قانونی با قیمت مناسب و پشتیبانی
              حرفه‌ای، همراه شماست.
            </p>
          </div>
          <div className="mx-auto w-1/2 lg:m-0 lg:w-1/3">
            <PrimaryButton dir="ltr" className="w-full border-[#333] lg:border">
              دسته بندی ها
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
