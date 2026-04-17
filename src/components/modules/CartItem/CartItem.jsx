import Image from 'next/image';
import Link from 'next/link';

import { FaRegClock, FaPhotoVideo, FaChartLine, FaTrash } from 'react-icons/fa';

export default function CartItem() {
  return (
    <div className="border-foreground flex items-center gap-2 border-t p-4 min-[380px]:gap-6">
      <div className="flex shrink-0 flex-col items-center gap-6 md:flex-row md:items-center">
        <Link href="">
          <Image
            alt="Some title"
            width={300}
            height={300}
            src="/images/services/spotify.png"
            className="size-20 object-cover"
          />
        </Link>
        <div className="mx-auto flex items-center gap-2 text-[#191919] md:hidden">
          <button className="bg-primary grid h-8.75 w-5 cursor-pointer place-content-center rounded-lg rounded-tl-sm text-2xl min-[480px]:w-7">
            +
          </button>
          <input
            defaultValue={1}
            type="number"
            min={1}
            className="bg-foreground w-10 rounded-[3px] px-[.3rem] py-[.2rem] text-center text-white outline-none min-[360px]:text-xl min-[480px]:w-14 min-[480px]:py-[.3rem]"
          />
          <button className="bg-primary grid h-8.75 w-5 cursor-pointer place-content-center rounded-lg rounded-tr-sm text-sm min-[480px]:w-7">
            <FaTrash />
          </button>
        </div>
        <Link href="" className="hidden md:block">
          <h3 className="sm:text-lg">لایسنس ویندوز ۱۱</h3>
        </Link>
      </div>
      <div className="flex flex-col gap-2 md:w-full md:flex-row md:items-center md:justify-between md:gap-4">
        <Link href="" className="md:order-1 md:hidden">
          <h3 className="sm:text-lg">لایسنس ویندوز ۱۱</h3>
        </Link>

        <div className="hidden items-center gap-2 text-[#191919] md:order-3 md:flex md:w-full md:justify-center">
          <button className="bg-primary grid h-8.75 w-5 cursor-pointer place-content-center rounded-lg rounded-tl-sm text-2xl min-[480px]:w-7">
            +
          </button>
          <input
            defaultValue={1}
            type="number"
            min={1}
            className="bg-foreground w-10 rounded-[3px] px-[.3rem] py-[.2rem] text-center text-white outline-none min-[360px]:text-xl min-[480px]:w-14 min-[480px]:py-[.3rem]"
          />
          <button className="bg-primary grid h-8.75 w-5 cursor-pointer place-content-center rounded-lg rounded-tr-sm text-sm min-[480px]:w-7">
            <FaTrash />
          </button>
        </div>

        <div className="my-2.5 flex flex-wrap gap-x-4 gap-y-2 min-[1200px]:flex! md:order-2 md:hidden md:w-full lg:hidden">
          <div className="text-paragraph flex items-center gap-1 text-[13px]">
            <FaRegClock />
            <p>مدت زمان یک ماهه</p>
          </div>

          <div className="text-paragraph flex items-center gap-1 text-[13px]">
            <FaPhotoVideo />
            <p>ریجن انگلیس</p>
          </div>
          <div className="text-paragraph flex items-center gap-1 text-[13px]">
            <FaChartLine />
            <p>پلن فردی</p>
          </div>
        </div>

        <div className="md:order-4 md:w-full md:text-end">
          <p className="text-paragraph text-sm sm:mb-1">جمع کل</p>
          <p>
            <span className="text-primary me-1 text-lg font-semibold sm:me-2 sm:text-2xl">
              ۹۰,۰۰۰
            </span>
            تومان
          </p>
        </div>
      </div>
    </div>
  );
}
