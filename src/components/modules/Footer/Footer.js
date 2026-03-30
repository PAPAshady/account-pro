import Image from 'next/image';
import Link from 'next/link';

import {
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-16">
      <Particle className="top-50 -right-15 z-2 hidden size-45 opacity-60 blur-[80px] md:block lg:blur-[70px]" />

      <div className="absolute -right-40 bottom-10 hidden lg:block">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>
      <div className="absolute bottom-10 -left-40 -z-10 hidden lg:block">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>

      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="bg-box rounded-box-ltr relative flex flex-col items-center p-7.5 lg:w-1/4 lg:justify-center">
            <div className="absolute inset-0 size-full bg-[url('/images/footer-bg.png')] bg-cover bg-center mix-blend-color-dodge">
              <div className="bg-primary absolute size-full mix-blend-hue"></div>
            </div>
            <div className="w-42.5">
              <Image
                alt="اکانت پرو. مرجع خرید حساب های قانونی"
                width={330}
                height={115}
                src="/images/logo/logo-lg.png"
                className="w-ful mb-6 h-15"
              />
              <div className="text-secondary bg-primary bg-hatching flex justify-between rounded-2xl rounded-tr-sm px-3.75 py-2.5 lg:mt-10">
                <Link href="#">
                  <FaFacebook className="size-5" />
                </Link>
                <Link href="#">
                  <FaInstagram className="size-5" />
                </Link>
                <Link href="#">
                  <FaTelegram className="size-5" />
                </Link>
                <Link href="#">
                  <FaWhatsapp className="size-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-box rounded-box-ltr flex flex-col gap-10 py-6.25 md:flex-row md:gap-4 lg:w-3/4">
            <div className="space-y-6.25 px-5 md:w-1/3 lg:w-[40%]">
              <div className="text-center md:text-start">
                <p className="text-[18px] font-bold">درباره اکانت پرو</p>
                <p className="text-primary text-[18px] font-bold">About us</p>
              </div>
              <p className="text-paragraph text-justify text-sm lg:text-base">
                در اکانت پرو، ما به دنبال فراهم کردن دسترسی آسان و قانونی به سرویس‌های پرطرفدار دنیا
                هستیم. ارائه حساب‌های معتبر و رسمی از پلتفرم‌هایی مثل اسپاتیفای، یوتیوب و سایر
                سرویس‌های جهانی.
              </p>
              <PrimaryButton className="mx-auto md:m-0">صفحه درباره ما</PrimaryButton>
            </div>
            <div className="md:w-1/3 lg:w-[20%]">
              <div className="text-center md:text-start">
                <p className="text-[18px] font-bold">دسترسی سریع</p>
                <p className="text-primary text-[18px] font-bold">Quick access</p>
              </div>
              <div className="mt-1 flex justify-between">
                <Image
                  alt=""
                  src="/images/hatching.png"
                  width={326}
                  height={248}
                  className="h-20 w-10 shrink-0 object-cover pt-2 md:hidden"
                />
                <ul className="box grow p-4 pb-0 font-bold md:px-0">
                  <li className="py-1.5">
                    <Link className="hover:text-primary transition-colors duration-300" href="/">
                      صفحه اصلی
                    </Link>
                  </li>
                  <li className="py-1.5">
                    <Link
                      className="hover:text-primary transition-colors duration-300"
                      href="/services"
                    >
                      سرویس های اکانت پرو
                    </Link>
                  </li>
                  <li className="py-1.5">
                    <Link
                      className="hover:text-primary transition-colors duration-300"
                      href="/plans"
                    >
                      پلن ها
                    </Link>
                  </li>
                  <li className="py-1.5">
                    <Link
                      className="hover:text-primary transition-colors duration-300"
                      href="/blog"
                    >
                      وبلاگ
                    </Link>
                  </li>
                  <li className="py-1.5">
                    <Link
                      className="hover:text-primary transition-colors duration-300"
                      href="/about-us"
                    >
                      درباره ما
                    </Link>
                  </li>
                  <li className="py-1.5">
                    <Link
                      className="hover:text-primary transition-colors duration-300"
                      href="/contact-us"
                    >
                      تماس با ما
                    </Link>
                  </li>
                </ul>
                <Image
                  alt="kkk"
                  src="/images/hatching.png"
                  width={326}
                  height={248}
                  className="h-20 w-10 shrink-0 object-cover pt-2 md:hidden"
                />
              </div>
            </div>
            <div className="px-3.5 md:w-1/3 lg:w-[40%]">
              <div className="text-center md:text-start">
                <p className="text-[18px] font-bold">راه های ارتباطی</p>
                <p className="text-primary mb-4 text-[18px] font-bold">Contact ways</p>
                <div className="space-y-6">
                  <div className="flex justify-between gap-7">
                    <div className="flex gap-2">
                      <div className="bg-foreground grid size-7 place-content-center rounded-md">
                        <FaLocationArrow />
                      </div>
                      <span>آدرس</span>
                    </div>
                    <p className="text-paragraph text-start text-sm">
                      تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک ۲۵، طبقه دوم، واحد ۵
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-7">
                    <div className="flex gap-2">
                      <div className="bg-foreground grid size-7 place-content-center rounded-md">
                        <FaPhone />
                      </div>
                      <span>تلفن</span>
                    </div>
                    <p className="text-paragraph text-start text-sm">09331844549</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-2">
                      <div className="bg-foreground grid size-7 place-content-center rounded-md">
                        <FaEnvelope />
                      </div>
                      <span>ایمیل</span>
                    </div>
                    <p className="text-paragraph wrap-break text-start text-sm">
                      zamani.nima18@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
