import Image from 'next/image';

import {
  FaCalendar,
  FaUser,
  FaPhotoVideo,
  FaChartLine,
  FaRegHeart,
  FaShareAlt,
} from 'react-icons/fa';

import SelectInput from '@modules/SelectInput/SelectInput';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';

const inputs = [
  {
    id: 1,
    label: 'مدت زمان',
    icon: <FaCalendar />,
    options: [
      { value: '1-year', title: 'یکساله' },
      { value: '3-months', title: 'سه ماهه' },
      { value: '1-month', title: 'یکماهه' },
    ],
  },
  {
    id: 2,
    label: 'نوع حساب کاربری',
    icon: <FaUser />,
    options: [
      { value: 'new', title: 'اکانت جدید' },
      { value: 'current', title: 'اکانت موجود' },
    ],
  },
  {
    id: 3,
    label: 'منطقه/کشور',
    icon: <FaPhotoVideo />,
    options: [
      { value: 'turkey', title: 'ترکیه' },
      { value: 'usa', title: 'آمریکا' },
      { value: 'ukraine', title: 'اوکراین' },
    ],
  },
  {
    id: 4,
    label: 'پلن ها',
    icon: <FaChartLine />,
    options: [
      { value: 'individual', title: 'پلن فردی' },
      { value: 'double', title: 'پلن دوگانه' },
      { value: 'family', title: 'پلن خانوادگی' },
    ],
  },
];

export default function ProductDetails() {
  return (
    <div className="flex flex-col items-center gap-3 min-[900px]:flex-row md:gap-6 lg:gap-10">
      <div className="w-full space-y-6 min-[900px]:w-1/2">
        <div className="space-y-2 font-bold">
          <h1 className="font-morabba text-xl min-[900px]:text-[26px]">لایسنس ویندوز ۱۱</h1>
          <p className="font-stretchPro text-paragraph mb-6 text-sm">Windows 11 License</p>
          <p className="text-sm font-thin min-[900px]:text-base">
            موسیقی بی وقفه، دانلود نامحدود و پلی لیس هایی که همیشه در کنار تو هستن.
          </p>
          <p className="pt-3 text-sm font-semibold min-[900px]:text-base">
            همین حالا اسپاتیفای پرمیوم رو امتحان کن!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 min-[380px]:gap-x-4">
          {inputs.map(({ id, ...input }) => (
            <SelectInput key={id} {...input} />
          ))}
        </div>
        <div className="bg-foreground flex flex-col gap-5 rounded-3xl rounded-tr-lg p-3.75">
          <div className="flex flex-col items-center gap-2.5 sm:flex-row">
            <div className="w-full space-y-4 rounded-xl rounded-tr-2xl bg-[#191919] p-2.5 text-center text-[#ddd]">
              <span>مبلغ قابل پرداخت :</span>
              <p className="text-[32px]">
                <bdi>
                  ۲۰۰,۰۰۰
                  <span className="text-primary ms-2 text-lg">تومان</span>
                </bdi>
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 rounded-2xl rounded-tr-lg bg-[#191919] p-2.5 text-[#ddd]">
              <span>تعداد :‌</span>
              <div className="text-blackColor flex items-center gap-2">
                <button className="bg-primary rounded-box-rtl flex cursor-pointer items-center justify-center px-2 py-1 text-lg">
                  +
                </button>
                <input
                  type="text"
                  className="bg-foreground w-10 rounded-lg px-3 py-2 text-center font-bold text-white outline-none"
                  defaultValue={1}
                  maxLength={2}
                />
                <button className="bg-primary rounded-box-ltr flex cursor-pointer items-center justify-center px-2 py-1 text-lg">
                  -
                </button>
              </div>
            </div>
            <div className="bg-foreground inline-flex max-w-max flex-col items-center justify-center gap-4 rounded-2xl rounded-tr-lg p-2.5 min-[900px]:hidden lg:inline-flex">
              <button className="bg-box hover:text-primary flex size-8.75 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-2xl transition-colors duration-300">
                <FaRegHeart />
              </button>
              <button className="bg-box hover:text-primary flex size-8.75 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-2xl transition-colors duration-300">
                <FaShareAlt />
              </button>
            </div>
          </div>
          <div>
            <PrimaryButton
              className="bg-primary w-full font-bold text-[#191919] hover:bg-[#0dbe92]! hover:bg-none"
              dir="ltr"
            >
              افزودن به سبد خرید
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="relative grid w-full grid-cols-2 gap-3 min-[900px]:w-1/2">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 rounded-4xl">
          <Particle className="top-1/2 left-1/2 size-64 -translate-1/2 opacity-35 blur-[70px]" />
          <Image
            alt="windows 11"
            width={170}
            height={170}
            src="/images/services/spotify.png"
            className="size-42.5 min-w-42.5 object-cover"
          />
        </div>
        <div className="bg-foreground flex min-h-50 flex-col rounded-4xl rounded-tr-2xl p-5">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span>100</span>
            <span className="font-morabba text-primary">%</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            مشتری رضایتمند!
          </p>
        </div>
        <div className="bg-foreground flex min-h-50 flex-col items-end rounded-4xl rounded-tl-2xl p-5 text-end">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span>100</span>
            <span className="font-morabba text-primary">%</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            خرید دوباره از اکانت پرو!
          </p>
        </div>
        <div className="bg-foreground flex min-h-50 flex-col justify-end rounded-4xl rounded-br-2xl p-5">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span className="font-morabba text-primary">+</span>
            <span>10000</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            فعالسازی در ماه گذشته!
          </p>
        </div>
        <div className="bg-foreground flex min-h-50 flex-col justify-end rounded-4xl rounded-bl-2xl p-5 text-end">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span className="font-morabba text-primary">+</span>
            <span>8</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            لایسنس و اشتراک مختلف!
          </p>
        </div>
      </div>
    </div>
  );
}
