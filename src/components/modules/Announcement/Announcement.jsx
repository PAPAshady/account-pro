import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendar } from 'react-icons/fa';

export default function Announcement({ title, date, body }) {
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
