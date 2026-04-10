import { FaStar, FaRegStar, FaReply } from 'react-icons/fa';

export default function Comment({ isReply }) {
  return (
    <div className="md:flex md:gap-4">
      <div className="bg-primary bg-hatching mb-4 flex items-center justify-between gap-2 rounded-2xl rounded-tr-3xl p-3.75 text-[#191919] md:mb-0 md:w-1/4">
        <div className="grow">
          {isReply && <FaReply />}
          <p className="my-2 text-xl">حمید حمیدی</p>
          <p className="font-normal">مدیر فروشگاه</p>
        </div>
        <time
          className="text-sm font-normal"
          style={{ writingMode: 'sideways-lr' }}
          dateTime="1404.04.24"
        >
          1404.04.24
        </time>
      </div>
      <div className="bg-foreground rounded-lg rounded-tr-sm p-3.75 md:w-3/4">
        <div className="mb-3 rounded-lg rounded-tr-sm bg-[#191919] p-3.75 text-justify font-light">
          <p>
            ممنون از سایت شما! تجربه عالی‌ای داشتم، خیلی راحت و سریع اشتراک پرمیوم رو دریافت کردم و
            همونطور که وعده داده بودید، همه ویژگی‌ها فعال شدند. دیگه از تبلیغات خسته‌کننده راحت شدم
            و کیفیت هم عالیه!
          </p>
        </div>
        {!isReply && (
          <div className="text-primary flex justify-end gap-0.5 text-[15px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        )}
      </div>
    </div>
  );
}
