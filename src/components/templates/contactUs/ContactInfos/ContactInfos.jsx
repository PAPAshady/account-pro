import Image from 'next/image';

import { FaLocationArrow, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

export default function ContactInfos() {
  return (
    <div className="relative mt-10">
      <div className="absolute top-20 -right-30 -z-1 hidden md:block lg:-right-50 xl:top-0">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>
      <div className="absolute top-20 -left-40 -z-1 hidden md:block lg:-left-50 xl:top-5">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>
      <div className="absolute top-20 left-1/2 -z-1 hidden -translate-x-1/2 mix-blend-lighten lg:block">
        <Image
          alt=""
          src="/images/contact-us/center-shape.png"
          width={400}
          height={400}
          className="size-100"
        />
        <div className="bg-primary absolute inset-0 size-full mix-blend-hue"></div>
      </div>
      <div className="lg:container">
        <div className="container bg-[url('/images/contact-us/section-container-1.png')] bg-position-[center_30] bg-no-repeat pb-8 lg:bg-none">
          <div className="mb-4 text-center font-bold lg:hidden">
            <p className="font-morabba mb-1 text-xl">اطلاعات تماس</p>
            <p className="font-stretchPro text-paragraph text-sm">Contact Us</p>
          </div>

          <div className="items-center justify-center gap-6 md:flex">
            <div className="bg-box mb-8 flex flex-col gap-4 rounded-3xl rounded-tr-lg p-3 pt-5 md:mb-0 md:w-1/2 lg:w-1/3 xl:gap-8 xl:px-5 xl:py-6">
              <div className="flex justify-between gap-4">
                <div className="flex gap-2">
                  <div className="bg-foreground grid size-7 place-content-center rounded-md">
                    <FaLocationArrow />
                  </div>
                  <span>آدرس</span>
                </div>
                <p className="text-paragraph text-start text-sm xl:text-base">
                  تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک ۲۵، طبقه دوم، واحد ۵
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <div className="bg-foreground grid size-7 place-content-center rounded-md">
                    <FaPhone />
                  </div>
                  <span>تلفن</span>
                </div>
                <p className="text-paragraph text-start text-sm xl:text-base">09331844549</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <div className="bg-foreground grid size-7 place-content-center rounded-md">
                    <FaEnvelope />
                  </div>
                  <span>ایمیل</span>
                </div>
                <p className="text-paragraph wrap-break text-start text-sm xl:text-base">
                  zamani.nima18@gmail.com
                </p>
              </div>
            </div>

            <div className="relative hidden w-62.5 flex-col justify-between gap-4 lg:flex">
              <div className="absolute inset-0 size-full">
                <Image
                  alt=""
                  src="/images/contact-us/section-container-1.png"
                  width={248}
                  height={302}
                  className="size-full"
                />
              </div>
              <div className="bg-hatching bg-primary absolute bottom-0 -z-1 h-[45%] w-full rounded-t-lg rounded-b-[40px]"></div>

              <div className="-mt-4 mb-4 text-center font-bold">
                <p className="font-morabba text-[26px]">اطلاعات تماس</p>
                <p className="font-stretchPro text-paragraph text-sm">Contact Us</p>
              </div>
              <Image
                width={500}
                height={434}
                alt="person"
                src="/images/contact-us/person.png"
                className="rounded-b-[40px]"
              />
            </div>

            <div className="mx-auto max-h-40.75 max-w-84.5 md:max-h-none md:w-1/2 md:max-w-none lg:mx-0 lg:w-1/3">
              <div className="relative">
                <div className="bg-hatching bg-primary absolute bottom-5.5 h-18.75 w-full overflow-hidden rounded-t-2xl rounded-b-lg transition-all duration-300"></div>
                <div className="relative z-1 mx-auto w-[90%]">
                  <Image
                    alt="title"
                    width={300}
                    height={228}
                    src="/images/contact-us/map.png"
                    className="h32.5 mx-auto aspect-video w-full rounded-[48px] rounded-tr-xl object-cover"
                  />
                </div>
              </div>
              <div className="bg-box -mt-4 rounded-t-lg rounded-b-2xl px-3.75 pt-10 pb-5">
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <FaMapMarker />
                  </div>
                  <p>برای مشاهده در گوگل مپ کلیک کنید</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
