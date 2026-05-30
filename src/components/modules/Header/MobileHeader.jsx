'use client';
import Image from 'next/image';
import Link from 'next/link';

import { FaBars, FaShoppingCart } from 'react-icons/fa';

import useHamburgerMenu from '@/store/useHamburgerMenu';

export default function MobileHeader() {
  const setOpen = useHamburgerMenu((state) => state.setOpen);
  return (
    <div className="flex items-center justify-between lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="bg-foreground rounded-box-ltr grid size-10.5 cursor-pointer place-content-center p-2.5"
      >
        <FaBars />
      </button>
      <Link href="/">
        <Image
          alt="اکانت پرو"
          width={58}
          height={58}
          src="/images/logo/logo.png"
          className="size-7.5 md:size-10"
        />
      </Link>
      <Link href="/cart">
        <button className="bg-foreground rounded-box-rtl grid size-10.5 cursor-pointer place-content-center p-2.5">
          <FaShoppingCart />
        </button>
      </Link>
    </div>
  );
}
