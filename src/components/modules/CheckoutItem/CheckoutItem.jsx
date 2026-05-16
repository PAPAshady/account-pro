import Image from 'next/image';
import Link from 'next/link';

import { FaRegClock, FaUser, FaChartLine, FaHashtag } from 'react-icons/fa';

export default function CheckoutItem({
  title,
  price,
  image,
  duration,
  planTitle,
  accountType,
  slug,
  quantity,
}) {
  return (
    <div className="flex items-start gap-3">
      <Link href={`/product/${slug}`} className="shrink-0">
        <Image
          alt={title}
          width={300}
          height={300}
          src={image}
          className="size-16 object-cover min-[480px]:size-20"
        />
      </Link>
      <div className="space-y-2 min-[480px]:space-y-4">
        <Link href={`/product/${slug}`} className="block">
          <h3 className="font-morabba font-semibold">{title}</h3>
        </Link>
        <div className="space-y-1">
          <div className="text-paragraph flex items-center gap-1 text-sm">
            <FaChartLine />
            <span>{planTitle}</span>
          </div>
          <div className="text-paragraph flex items-center gap-1 text-sm">
            <FaRegClock />
            <span>مدت زمان {duration / 30} ماهه</span>
          </div>
          <div className="text-paragraph flex items-center gap-1 text-sm">
            <FaUser />
            <span>حساب کاربری {accountType === 'new' ? 'جدید' : 'موجود'}</span>
          </div>
          <div className="text-paragraph flex items-center gap-1 text-sm">
            <FaHashtag />
            <span>تعداد {quantity} عدد</span>
          </div>
        </div>
        <p>
          <span className="text-primary me-1.5 text-lg">{(price * quantity).toLocaleString()}</span>
          تومان
        </p>
      </div>
    </div>
  );
}
