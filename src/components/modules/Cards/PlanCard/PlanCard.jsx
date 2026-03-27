import Image from 'next/image';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

export default function PlanCard({ title, price }) {
  return (
    <div className="bg-box group sm:rounded-box-ltr overflow-hidden rounded-t-lg rounded-b-3xl">
      <div className="group-hover:bg-primary group-hover:bg-hatching group-hover:text-blackColor flex items-end justify-between gap-2 pt-2 pb-4 transition-colors duration-300 sm:flex-col sm:gap-4">
        <div className="flex sm:w-full">
          <div className="ms-2 -mt-2 hidden shrink-0 min-[390px]:block">
            <Image
              alt="#1"
              width={47}
              height={70}
              src="/images/medal.png"
              className="md:h-24.75 md:w-16"
            />
          </div>
          <div className="ps-4 min-[390px]:ps-2">
            <span className="text-primary group-hover:text-blackColor text-sm transition-colors duration-300 sm:text-lg">
              اشتراک ویژه اکانت پرو
            </span>
            <p className="text-4xl font-bold sm:text-5xl">{title}</p>
          </div>
        </div>
        <div className="flex items-center pe-2 pb-1">
          <span className="text-lg font-bold sm:text-2xl lg:text-3xl">
            {price.toLocaleString()}
          </span>
          <span className="text-primary group-hover:text-blackColor ms-1 transition-colors duration-300 sm:text-lg lg:ms-2 lg:mt-2 lg:text-xl">
            تومان
          </span>
        </div>
      </div>
      <div className="p-2.5">
        <div className="mb-2.5 rounded-lg rounded-tr-sm bg-[#00000026] p-3.75">
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <span className="bg-primary mt-1 size-2 rounded-lg rounded-tr-xs"></span>
              <span className="text-paragraph">۲ اکانت پرمیوم دلخواه</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-primary mt-1 size-2 rounded-lg rounded-tr-xs"></span>
              <span className="text-paragraph">قابلیت استفاده تک کاربره</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-primary mt-1 size-2 rounded-lg rounded-tr-xs"></span>
              <span className="text-paragraph">تخفیف ۲۰ درصدی گیفت کارت ها</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-primary mt-1 size-2 rounded-lg rounded-tr-xs"></span>
              <span className="text-paragraph">پشتیبانی ۲۴ ساعته تا پایان دوره</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-primary mt-1 size-2 rounded-lg rounded-tr-xs"></span>
              <span className="text-paragraph">یک عدد گیفت کارت رایگان دلخواه</span>
            </li>
          </ul>
        </div>
        <PrimaryButton dir="ltr" className="w-full font-bold">
          مشاهده و خرید
        </PrimaryButton>
      </div>
    </div>
  );
}
