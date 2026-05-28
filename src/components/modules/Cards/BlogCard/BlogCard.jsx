import Image from 'next/image';
import Link from 'next/link';

import { FaRegCalendar } from 'react-icons/fa';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

export default function BlogCard({ title, imageUrl, description, createdAt, slug }) {
  const date = new Date(createdAt).toLocaleDateString('fa');
  return (
    <div className="group">
      <div className="relative">
        <div className="group-hover:bg-hatching bg-box group-hover:bg-primary absolute bottom-5.5 h-18.75 w-full overflow-hidden rounded-t-2xl rounded-b-lg transition-all duration-300"></div>
        <Link
          href={`/blog/${slug}`}
          className="rounded-box-ltr relative z-1 mx-auto w-[90%] overflow-hidden"
        >
          <Image
            alt={title}
            width={300}
            height={228}
            src={imageUrl}
            className="h-32.5 w-full object-cover"
          />
        </Link>
      </div>
      <div className="bg-box -mt-4 rounded-t-lg rounded-b-2xl p-3.75 pt-7.5">
        <Link href={`/blog/${slug}`}>
          <h4 className="line-clamp-2 text-[16px] font-bold">{title}</h4>
        </Link>
        <p className="text-paragraph my-3.25 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaRegCalendar className="text-primary" />
            <span className="text-paragraph">{date}</span>
          </div>
          <PrimaryButton isLink href={`/blog/${slug}`} dir="ltr" className="w-full max-w-24">
            مشاهده
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
