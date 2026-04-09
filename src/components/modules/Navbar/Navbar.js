'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaChevronDown } from 'react-icons/fa';
import clsx from 'clsx';

const navLinks = [
  { id: 1, title: 'صفحه اصلی', href: '/' },
  { id: 2, title: 'سرویس ها', href: '/shop', hasMenu: true },
  { id: 4, title: 'پلن ها', href: '/plans' },
  { id: 5, title: 'وبلاگ', href: '/blog' },
  { id: 3, title: 'درباره ما', href: '/about-us' },
  { id: 6, title: 'تماس با ما', href: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-foreground rounded-box-rtl grow-2">
      <ul className="flex items-center">
        {navLinks.map((navLink) => (
          <li className="grow" key={navLink.id}>
            <Link
              className={clsx(
                'flex items-center justify-center gap-2 px-2.5 pt-2.5 pb-3 text-white transition-colors duration-300 hover:text-[#ccc]',
                pathname.includes(navLink.href) ? 'h font-semibold' : 'font-light'
              )}
              href={navLink.href}
            >
              {navLink.title}
              {navLink.hasMenu && (
                <span className="text-primary mt-1 text-xs">
                  <FaChevronDown />
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
