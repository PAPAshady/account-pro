'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

import useDashboardHamburgerMenu from '@/store/useDashboardHamburgerMenu';
import { getUserQueryOptions } from '@/queries/user';
import { dashboardLinks } from '@/data';

export default function DashboardHamburgerMenu() {
  const pathname = usePathname();
  const { data: user } = useQuery(getUserQueryOptions());
  const open = useDashboardHamburgerMenu((state) => state.open);
  const setOpen = useDashboardHamburgerMenu((state) => state.setOpen);
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
          <div className="flex w-full items-center justify-between gap-2">
            <div>
              <p>{user?.name}</p>
              <p className="text-paragraph text-sm">{user?.phone}</p>
            </div>
            <Link href="/" className="p-2" onClick={() => setOpen(false)}>
              <FaArrowRightFromBracket className="rotate-180 text-xl" />
            </Link>
          </div>
        </div>
        <div className="mt-8 flex grow flex-col px-5 pb-5">
          <div className="grow">
            <nav className="flex flex-col gap-1">
              {dashboardLinks.map((link) => (
                <div key={link.id}>
                  <div className="flex items-center justify-between transition-colors duration-200">
                    <Link
                      href={link.href}
                      className={clsx(
                        'flex grow items-center gap-4 py-2',
                        pathname === link.href && 'text-primary'
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  </div>
                </div>
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
