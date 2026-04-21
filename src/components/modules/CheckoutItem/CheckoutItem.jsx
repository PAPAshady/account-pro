import Image from 'next/image';
import Link from 'next/link';

import { FaRegClock, FaPhotoVideo, FaChartLine } from 'react-icons/fa';

export default function CheckoutItem() {
  return (
    <div className="flex items-start gap-3">
      <Link href="/" className="shrink-0">
        <Image
          alt="product"
          width={300}
          height={300}
          src="/images/services/spotify.png"
          className="size-16 object-cover min-[480px]:size-20"
        />
      </Link>
      <div className="space-y-2 min-[480px]:space-y-4">
        <Link href="/" className="block">
          <h3 className="font-morabba font-semibold">اسپاتیفای پرمیوم یکماهه</h3>
        </Link>
        <div className="space-y-1">
          <div className="text-paragraph flex items-center gap-1 text-sm">
            <FaRegClock />
            <span>مدت زمان یکماهه</span>
          </div>
          <div className="text-paragraph flex items-center gap-1 text-sm">
            <FaPhotoVideo />
            <span>ریجن انگلیس</span>
          </div>
          <div className="text-paragraph flex items-center gap-1 text-sm">
            <FaChartLine />
            <span>پلن فردی</span>
          </div>
        </div>
        <p>
          <span className="text-primary me-1.5 text-lg">۶,۷۹۰,۰۰۰</span>
          تومان
        </p>
      </div>
    </div>
  );
}
