import Image from 'next/image';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';

export default function AboutUs() {
  return (
    <div className="relative">
      <Particle className="top-30 -right-15 z-2 size-40 opacity-60 blur-[75px] sm:size-45 sm:blur-[80px] md:top-20 lg:top-0 lg:-right-30 lg:size-60 lg:opacity-70 lg:blur-[100px]" />

      <div className="container">
        <div className="relative lg:container">
          <div className="absolute top-4 -z-1 size-full lg:hidden">
            <Image
              alt=""
              src="/images/about-us/section-container-1.png"
              width={350}
              height={350}
              className="size-full"
            />
          </div>
          <div className="absolute top-4 -z-1 hidden size-full lg:block">
            <Image
              alt=""
              src="/images/about-us/section-container-2.png"
              width={982}
              height={242}
              className="size-full"
            />
          </div>

          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8 md:flex-row lg:items-end lg:justify-center lg:px-10">
            <div className="space-y-4 sm:space-y-6 md:w-1/2">
              <div className="lg:-mt-0.5 lg:ps-4">
                <p className="font-morabba text-xl font-semibold lg:mb-1 lg:text-[26px]">
                  درباره اکانت پرو
                </p>
                <p className="font-stretchPro text-paragraph text-sm">About Us</p>
              </div>
              <p className="text-paragraph text-justify text-sm sm:text-base lg:text-start lg:text-lg">
                در اکانت پرو، ما به دنبال فراهم کردن دسترسی آسان و قانونی به سرویس‌های پرطرفدار دنیا
                هستیم. هدف ما این است که با ارائه حساب‌های معتبر و رسمی از پلتفرم‌هایی مثل
                اسپاتیفای، یوتیوب و سایر سرویس‌های جهانی، تجربه‌ای بی‌دردسر و امن را برای کاربران
                فراهم کنیم.
              </p>

              <PrimaryButton className="w-40" dir="ltr">
                صفحه تماس با ما
              </PrimaryButton>
            </div>
            <div className="flex md:w-1/2 lg:justify-end">
              <Image alt="About Us" width={461} height={250} src="/images/about-us/about-us.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
