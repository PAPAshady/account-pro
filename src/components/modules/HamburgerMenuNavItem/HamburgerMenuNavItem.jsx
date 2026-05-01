'use client';
import Link from 'next/link';
import { useState } from 'react';

import { FaArrowLeft, FaChevronLeft } from 'react-icons/fa';
import clsx from 'clsx';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import useHamburgerMenu from '@/store/useHamburgerMenu';

export default function NavItem({ title, href, hasMenu, menus }) {
  const [isActive, setIsActive] = useState(false);
  const [elemHeight, setElemHeight] = useState(0);
  const setOpen = useHamburgerMenu((state) => state.setOpen);

  const closeAll = () => {
    setOpen(false);
    setIsActive(false);
  };

  return (
    <div className="overflow-hidden">
      <div>
        <div
          className={clsx(
            'flex items-center justify-between transition-colors duration-200',
            isActive && 'text-primary'
          )}
        >
          <Link href={href} onClick={() => setOpen(false)} className="grow py-2">
            {title}
          </Link>
          {hasMenu && (
            <button
              onClick={() => setIsActive((prev) => !prev)}
              className={clsx('p-2 transition-transform duration-200', isActive && '-rotate-90')}
            >
              <FaChevronLeft />
            </button>
          )}
        </div>
      </div>
      {hasMenu && (
        <div
          className={clsx(
            'bg-foreground overflow-hidden rounded-3xl rounded-tr-lg px-3.5 transition-all duration-200',
            isActive && `mb-2.5 py-5`
          )}
        >
          <div
            ref={(el) => setElemHeight(el?.scrollHeight)}
            className="transition-all duration-300"
            style={{ height: isActive ? elemHeight : 0 }}
          >
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={menu.href}
                onClick={closeAll}
                className="flex items-center gap-4 py-2.5"
              >
                <i className="text-primary text-lg">{menu.icon}</i>
                <span>{menu.title}</span>
              </Link>
            ))}
            <PrimaryButton isLink href={href} onClick={closeAll}>
              <span>مشاهده همه</span>
              <FaArrowLeft />
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
