import Image from 'next/image';
import Link from 'next/link';

import { FaRegCalendar } from 'react-icons/fa';
import { announcements } from '@/data';

export default function News() {
  return (
    <div className="relative">
      <div
        className="absolute top-3 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent lg:top-5"
        style={{
          background:
            'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
        }}
      ></div>
      <div className="px-4">
        <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">اخبار و اطلاعیه ها</h3>
      </div>
      <div className="space-y-4 px-3 pt-3 md:px-4 lg:pt-6">
        <div className="space-y-8">
          {announcements.map((announcement) => (
            <Announcement key={announcement.id} {...announcement} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Announcement({ title, date, body }) {
  return (
    <div className="flex gap-2 md:gap-4">
      <div className="bg-foreground flex w-28 shrink-0 flex-col justify-center gap-3.75 rounded-lg rounded-br-3xl p-4 min-[480px]:w-38 sm:w-45 sm:gap-5 sm:p-5">
        <Link href="/">
          <Image
            alt="اکانت پرو - مرجع خرید حساب های قانونی"
            width={330}
            height={115}
            src="/images/logo/logo-lg.png"
            className="max-h-10 w-auto"
          />
        </Link>
        <p className="text-sm font-semibold sm:text-base">{title}</p>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <FaRegCalendar className="text-primary shrink-0" />
          <span className="text-paragraph">{date}</span>
        </div>
      </div>
      <div className="bg-foreground flex grow items-center rounded-lg rounded-bl-3xl p-3.75">
        <p className="text-justify text-sm md:text-base">{body}</p>
      </div>
    </div>
  );
}
