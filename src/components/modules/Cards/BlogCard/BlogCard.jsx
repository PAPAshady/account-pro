import Image from 'next/image';

import { FaRegCalendar } from 'react-icons/fa';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

export default function BlogCard() {
  return (
    <div className="group">
      <div className="relative">
        <div className="group-hover:bg-hatching bg-box group-hover:bg-primary absolute bottom-5.5 h-18.75 w-full overflow-hidden rounded-t-2xl rounded-b-lg transition-all duration-300"></div>
        <div className="rounded-box-ltr relative z-1 mx-auto w-[90%] overflow-hidden">
          <Image
            alt="title"
            width={300}
            height={228}
            src="/images/blogs/blog-1.png"
            className="h-32.5 w-full object-cover"
          />
        </div>
      </div>
      <div className="bg-box -mt-4 rounded-t-lg rounded-b-2xl p-3.75 pt-7.5">
        <h4 className="line-clamp-2 text-[16px] font-bold">
          تفاوت لایسنس ویندوز ۱۱ و نسخه کرک شده معمولی
        </h4>
        <p className="text-paragraph my-3.25 line-clamp-2">
          یوتیوب چیست ؟ یوتیوب یکی از بزرگترین پلتفرم های پخش ویدیو در جهان است.
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaRegCalendar className="text-primary" />
            <span className="text-paragraph">۲۶ خرداد ۱۴۰۴</span>
          </div>
          <PrimaryButton dir="ltr" className="w-full max-w-24">
            مشاهده
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
