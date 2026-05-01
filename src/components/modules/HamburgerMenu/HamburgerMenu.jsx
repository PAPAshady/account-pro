'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

import clsx from 'clsx';
import { FaArrowLeft } from 'react-icons/fa';

import useHamburgerMenu from '@/store/useHamburgerMenu';
import NavItem from '@modules/HamburgerMenuNavItem/HamburgerMenuNavItem';
import { navLinks } from '@/data';

export default function HamburgerMenu() {
  const open = useHamburgerMenu((state) => state.open);
  const setOpen = useHamburgerMenu((state) => state.setOpen);
  const menuRef = useRef(null);

  // close on click outside
  const onClose = (e) => {
    if (!menuRef.current.contains(e.target)) setOpen(false);
  };

  return (
    <div
      onClick={onClose}
      className={clsx(
        'fixed inset-0 size-full transition-all duration-200 lg:hidden',
        open ? 'z-50 bg-black/50' : '-z-1'
      )}
    >
      <div
        ref={menuRef}
        className={clsx(
          'bg-box flex h-full w-70 flex-col overflow-y-auto transition-transform duration-200',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="bg-foreground flex h-20 items-center justify-center px-5">
          <Link
            href="/sign-in"
            className="flex items-center gap-2.5 px-5 py-3 text-lg font-semibold"
          >
            <span>ورود یا ثبت نام</span>
            <FaArrowLeft />
          </Link>
        </div>
        <div className="mt-8 flex grow flex-col px-5 pb-5">
          <div className="grow">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ id, ...link }) => (
                <NavItem key={id} {...link} />
              ))}
            </nav>
          </div>
          <div className="pt-4">
            <div className="bg-foreground rounded-box-rtl flex items-center justify-between gap-3 py-2.5 ps-3.75 pe-2">
              <div className="text-start">
                <p className="font-semibold">۰۹۳۳۱۸۴۴۵۴۹</p>
                <p className="font-light">پشتیبانی ۲۴ ساعته</p>
              </div>
              <Image
                src="/images/support.png"
                alt="پشتیبانی"
                width={48}
                height={48}
                className="size-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
