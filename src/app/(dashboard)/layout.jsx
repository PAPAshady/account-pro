import Image from 'next/image';
import Link from 'next/link';

import { FaBars, FaShoppingCart, FaChevronLeft, FaSignOutAlt } from 'react-icons/fa';

import { dashboardLinks } from '@/data';
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
        <div className="flex itemsstart gap-6 pb-10">
          <aside className="hidden h-full w-1/4 lg:block xl:w-62.5">
            <div className="space-y-5">
              <div className="bg-primary bg-hatching rounded-2xl rounded-tr-3xl p-6.25 pb-2.5 text-[#191919]">
                <div>
                  <Image
                    alt="نیما زمانی"
                    width={60}
                    height={60}
                    className="border-primary -mt-10 size-14 rounded-3xl rounded-tr-lg border-4 object-cover"
                    src="/images/profile/profile2.png"
                  />
                </div>
                <p className="my-2 text-xl font-bold">نیما زمانی</p>
                <p className="font-normal">مشتری</p>
              </div>
              <nav className="bg-foreground rounded-3xl rounded-tr-lg p-5">
                <ul>
                  {dashboardLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        className="group mb-2.5 flex items-center justify-between gap-2 pb-2.5"
                      >
                        <span className="mt-1 flex items-center gap-2">
                          <i className="group-hover:bg-primary grid size-8 place-content-center rounded-lg rounded-tr-sm bg-[#ffffff1a] transition-colors duration-300 group-hover:text-[#336]">
                            {link.icon}
                          </i>
                          <span>{link.title}</span>
                        </span>
                        <FaChevronLeft className="text-primary text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button className="group mb-2.5 flex items-center justify-between gap-2 pb-2.5">
                      <span className="mt-1 flex items-center gap-2">
                        <i className="group-hover:bg-primary grid size-8 place-content-center rounded-lg rounded-tr-sm bg-[#ffffff1a] transition-colors duration-300 group-hover:text-[#336]">
                          <FaSignOutAlt />
                        </i>
                        <span>خروج از حساب کاربری</span>
                      </span>
                      <FaChevronLeft className="text-primary text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
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
