import Image from 'next/image';
import Link from 'next/link';

import CartDropDown from '@modules/CartDropDown/CartDropDown';
import GlobalSearchBox from '@modules/GlobalSearchBox/GlobalSearchBox';
import Navbar from '@modules/Navbar/Navbar';
import AuthButton from './AuthButton';
import { getNavbarDropdownLinks } from '@/lib/categories';

export default async function DesktopHeader() {
  const { data: dropdownLinks } = await getNavbarDropdownLinks();

  return (
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
      <div className="hidden items-center justify-between gap-3 py-2.5 min-[1080]:gap-4 lg:flex">
        <Navbar dropdownLinks={dropdownLinks} />
        <GlobalSearchBox />
        <AuthButton />
        <CartDropDown />
      </div>
    </div>
  );
}
