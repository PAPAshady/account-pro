import Image from 'next/image';
import Link from 'next/link';

import { FaShoppingCart } from 'react-icons/fa';

import Sidebar from '@templates/Dashboard/Sidebar/Sidebar';

import Footer from '@modules/Footer/Footer';
import CartDropDown from '@modules/CartDropDown/CartDropDown';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import DashboardHamburgerMenu from '@modules/DashboardHamburgerMenu/DashboardHamburgerMenu';
import DashboardMenuButton from '@templates/Dashboard/DashboardMenuButton/DashboardMenuButton';
import DesktopHeader from '@modules/Header/DesktopHeader';
import Particle from '@modules/Particle/Particle';

export default function layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <DashboardHamburgerMenu />
      <header className="mb-10 border-b border-[#333] lg:container lg:m-0 lg:border-0">
        <div className="mx-auto flex w-[95%] max-w-360 items-center justify-between py-5 lg:hidden">
          <DashboardMenuButton />
          <Link href="/" className="lg:hidden">
            <Image
              alt="اکانت پرو"
              width={58}
              height={58}
              src="/images/logo/logo.png"
              className="size-7.5 md:size-10"
            />
          </Link>
          <div className="min-[420px]:hidden">
            <PrimaryButton isLink href="/cart" className="cur px-3! outline-none">
              <FaShoppingCart />
            </PrimaryButton>
          </div>
          <div className="hidden min-[420px]:block">
            <CartDropDown />
          </div>
        </div>
        <div className="relative hidden py-10 lg:block lg:pt-12.5">
          <Particle className="-top-35 -left-10 size-64 opacity-35 blur-[70px]" />
          <Particle className="top-0 -right-30 hidden size-50 opacity-50 blur-[80px] lg:block" />
          <DesktopHeader />
        </div>
      </header>
      <div className="mx-auto w-[95%] max-w-360 xl:w-[85%]">
        <div className="itemsstart flex gap-6 pb-10">
          <Sidebar />
          <main className="bg-foreground w-full rounded-3xl rounded-tr-lg p-5 lg:w-3/4 xl:grow">
            {children}
          </main>
        </div>
      </div>
      <div className="-mt-10">
        <Footer />
      </div>
    </div>
  );
}
