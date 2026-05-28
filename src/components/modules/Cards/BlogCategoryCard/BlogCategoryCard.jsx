'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { FaChevronLeft } from 'react-icons/fa';
import clsx from 'clsx';

import DynamicIcon from '@modules/DynamicIcon/DynamicIcon';

export default function BlogCategoryCard({ id, title, latinTitle, iconName }) {
  const params = useSearchParams();
  const categoryParam = params.get('cat');
  const searchParam = params.get('search');
  const isActive = id === categoryParam;

  return (
    <Link
      href={`/blogs?cat=${id}${searchParam ? `&search=${searchParam}` : ''}`}
      className={clsx(
        'group rounded-box-ltr flex cursor-pointer items-center justify-between gap-4 p-5 transition-colors duration-300',
        isActive ? 'bg-primary bg-hatching' : 'bg-box hover:bg-hatching hover:bg-primary'
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={clsx(
            'transition-colors duration-300 lg:text-lg',
            isActive ? 'text-[#191919]' : 'text-white group-hover:text-[#191919]'
          )}
        >
          <DynamicIcon iconName={iconName} />
        </div>
        <div className="text-sm">
          <p
            className={clsx(
              'transition-colors duration-300 lg:text-lg',
              isActive ? 'text-[#191919]' : 'text-white group-hover:text-[#191919]'
            )}
          >
            {title}
          </p>
          <p
            className={clsx(
              'transition-colors duration-300',
              isActive ? 'text-[#191919]' : 'text-primary group-hover:text-[#191919]'
            )}
          >
            {latinTitle}
          </p>
        </div>
      </div>
      <FaChevronLeft
        className={clsx('text-[#191919] transition-opacity duration-300', !isActive && 'opacity-0')}
      />
    </Link>
  );
}
