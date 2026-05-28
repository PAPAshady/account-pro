import Image from 'next/image';

import { FaPen, FaRegCalendar, FaEye, FaStopwatch } from 'react-icons/fa';

import { getLandingPageBlogs } from '@/lib/blogs';
import BlogCard from '@modules/Cards/BlogCard/BlogCard';

const blogInfos = [
  { id: 1, title: 'اکانت پرو', icon: <FaPen /> },
  { id: 2, title: '1404/26/03', icon: <FaRegCalendar /> },
  { id: 3, title: '۳۳۴ بازدید', icon: <FaEye /> },
  { id: 4, title: 'زمان مطالعه : ۷ دقیقه', icon: <FaStopwatch /> },
];

export default async function page() {
  const { data: relatedBlogs } = await getLandingPageBlogs();
  return (
    <div className="container">
      <div className="flex flex-col gap-6 lg:flex-row">
        <main className="bg-foreground rounded-2xl rounded-tr-lg p-5 lg:w-[70%] xl:w-[75%]">
          <h1 className="font-morabba text-xl font-bold lg:text-2xl">
            ویژگی های اکانت پرمیوم یوتیوب
          </h1>
          <div className="bg-foreground my-8 flex flex-wrap justify-between gap-4 rounded-2xl rounded-tr-lg p-3.75">
            {blogInfos.map((info) => (
              <div key={info.id} className="flex w-full items-center gap-2.5 min-[500px]:w-auto">
                <i className="bg-primary grid size-8 place-content-center rounded-lg rounded-tr-sm text-lg text-[#191919]">
                  {info.icon}
                </i>
                <p className="text-sm lg:text-base">{info.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="bg-foreground space-y-8 rounded-xl rounded-tr-lg p-5">
              <h4 className="font-morabba text-xl font-bold lg:text-2xl">تیتر تستی</h4>
              <p className="text-justify text-sm leading-8 lg:text-base">
                یوتیوب یکی از بزرگ‌ترین پلتفرم‌های اشتراک‌گذاری ویدیو در جهان است که در سال 2005
                راه‌اندازی شد و از آن زمان به یکی از محبوب‌ترین شبکه‌های اجتماعی تبدیل شده است. این
                پلتفرم به کاربران امکان می‌دهد ویدیوهای خود را آپلود، مشاهده، و با دیگران به اشتراک
                بگذارند. یوتیوب بستری برای محتوای متنوع از آموزش و سرگرمی تا اخبار و پادکست‌ها است.
                با بیش از 2.5 میلیارد کاربر فعال ماهانه، یوتیوب نه‌تنها منبع سرگرمی بلکه ابزاری
                قدرتمند برای آموزش و تبلیغات نیز محسوب می‌شود. از طریق سیستم پیشنهاد محتوا و
                الگوریتم‌های پیشرفته، یوتیوب تجربه‌ای شخصی‌سازی‌شده به کاربران ارائه می‌کند.
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:px-4">
              <Image
                alt="title"
                width={300}
                height={300}
                src="/images/products/YouTube Premium-main-1778009063469.png"
                className="mx-auto aspect-square w-full max-w-50 lg:w-auto"
              />
              <p className="text-center text-3xl font-bold">YOUTUBE PREMIUM</p>
            </div>
          </div>
        </main>
        <aside className="space-y-8 lg:w-[30%] xl:w-[25%]">
          <h4 className="font-morabba text-xl font-bold lg:text-2xl">مقاله های مرتبط</h4>
          <div className="grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 lg:grid-cols-1">
            {relatedBlogs.map((blog) => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
