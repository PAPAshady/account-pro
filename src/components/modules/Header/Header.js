import Image from 'next/image';
import Link from 'next/link';

import { FaBars, FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';

import Navbar from '@/components/modules/Navbar/Navbar';
import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';
import Particle from '@/components/modules/Particle/Particle';

export default function Header() {
  return (
    <div className="relative py-10 lg:pt-12.5">
      <Particle className="-top-35 left-0 size-64 opacity-35 blur-[70px]" />
      <Particle className="top-5 right-0 hidden size-50 opacity-50 blur-[80px] lg:block" />

      <header className="container">
        {/* Mobile Header */}
        <div className="flex items-center justify-between lg:hidden">
          <button className="bg-foreground rounded-box-ltr grid size-10.5 cursor-pointer place-content-center p-2.5">
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
          <button className="bg-foreground rounded-box-rtl grid size-10.5 cursor-pointer place-content-center p-2.5">
            <FaShoppingCart />
          </button>
        </div>
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between py-2.5">
            <Link href="/">
              <Image
                width={330}
                height={115}
                alt="اکانت پرو - مرجع خرید حساب های قانونی"
                src="/images/logo/logo-lg.png"
                className="h-17.5 w-47.5"
              />
            </Link>
            <div className="bg-foreground rounded-box-rtl flex items-center gap-3 py-2.5 ps-3.75 pe-2">
              <div className="text-end">
                <p className="text-sm font-bold">۰۹۳۳۱۸۴۴۵۴۹</p>
                <p className="text-paragraph">پشتیبانی ۲۴ ساعته</p>
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
          <div className="hidden items-center justify-between gap-3 py-2.5 min-[1080]:gap-4 lg:flex">
            <Navbar />
            <div className="bg-foreground rounded-box-rtl flex grow items-center gap-2 px-3.5">
              <input
                type="text"
                placeholder="جستوجو کنید..."
                className="h-11.25 grow outline-none"
              />
              <FaSearch className="text-paragraph min-h-4 min-w-4 shrink-0" />
            </div>
            <PrimaryButton>
              ورود/ثبت نام
              <FaUser />
            </PrimaryButton>
            <PrimaryButton className="px-3!">
              <FaShoppingCart />
            </PrimaryButton>
          </div>
        </div>
      </header>
    </div>
  );
}
