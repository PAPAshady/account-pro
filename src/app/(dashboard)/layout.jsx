import Image from 'next/image';
import Link from 'next/link';

import { FaShoppingCart } from 'react-icons/fa';

import Sidebar from '@templates/Dashboard/Sidebar/Sidebar';

import SearchBox from '@modules/SearchBox/SearchBox';
import Footer from '@modules/Footer/Footer';
import CartDropDown from '@modules/CartDropDown/CartDropDown';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import DashboardHamburgerMenu from '@modules/DashboardHamburgerMenu/DashboardHamburgerMenu';
import DashboardMenuButton from '@templates/Dashboard/DashboardMenuButton/DashboardMenuButton';

export default function layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <DashboardHamburgerMenu />
      <header className="mb-10 border-b border-[#333]">
        <div className="mx-auto flex w-[95%] max-w-360 items-center justify-between py-5 xl:w-[85%]">
          <DashboardMenuButton />
          <div className="hidden w-75 lg:block">
            <SearchBox />
          </div>
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
