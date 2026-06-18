'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import clsx from 'clsx';

import { navLinks } from '@/data';
import DynamicIcon from '../DynamicIcon/DynamicIcon';

export default function Navbar({ dropdownLinks }) {
  const pathname = usePathname();

  return (
    <nav className="bg-foreground rounded-box-rtl grow-2 overflow-visible">
      <ul className="flex items-center">
        {navLinks.map((navLink) => (
          <li className="group relative z-2 grow" key={navLink.id}>
            <Link
              className={clsx(
                'flex items-center justify-center gap-2 px-2.5 pt-2.5 pb-3 text-white transition-colors duration-300 hover:text-[#ccc]',
                navLink.href === pathname ? 'font-semibold' : 'font-light'
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
            {navLink.hasMenu && (
              <div className="invisible absolute right-[-65%] -z-1 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:z-1 group-hover:translate-0 group-hover:opacity-100">
                <div className="rounded-3xl rounded-tr-lg bg-[#252525] p-2.5">
                  <div className="flex gap-1">
                    {dropdownLinks.map((link) => (
                      <div
                        key={link._id}
                        className="flex w-42.5 flex-col space-y-4 p-2.5 min-[1100px]:w-48"
                      >
                        <div className="flex gap-2">
                          <i className="text-primary mt-0.5 shrink-0 text-lg">
                            <DynamicIcon iconName={link.iconName} />
                          </i>
                          <p className="text-nowrap">{link.title}</p>
                        </div>
                        <div className="flex grow flex-col rounded-t-lg rounded-b-2xl bg-[#191919BA] py-5 ps-3.75 pe-2">
                          <ul className="flex h-52 grow flex-col overflow-y-auto text-sm">
                            {link.products.map((product) => (
                              <li
                                key={product._id}
                                className="hover:text-paragraph transition-colors duration-200"
                              >
                                <Link className="block py-1.5" href={`/product/${product.slug}`}>
                                  {product.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/shop?cat=${link.slug}`}
                            className="flex items-center gap-2 pt-6"
                          >
                            <span>مشاهده همه</span>
                            <FaChevronLeft className="text-primary text-sm" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
