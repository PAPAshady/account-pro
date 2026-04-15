import Image from 'next/image';
import Link from 'next/link';

import { FaBars, FaShoppingCart } from 'react-icons/fa';

import Sidebar from '@templates/Dashboard/Sidebar/Sidebar';

import SearchBox from '@modules/SearchBox/SearchBox';
import Footer from '@modules/Footer/Footer';

export default function layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <header className="mb-10 border-b border-[#333]">
        <div className="mx-auto flex w-[95%] max-w-360 items-center justify-between py-5 xl:w-[85%]">
          <button className="bg-foreground rounded-box-ltr grid size-10.5 cursor-pointer place-content-center p-2.5 lg:hidden">
            <FaBars />
          </button>
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
          <button className="bg-foreground rounded-box-rtl grid size-10.5 cursor-pointer place-content-center p-2.5">
            <FaShoppingCart />
          </button>
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
