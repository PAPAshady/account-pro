'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { FaChevronLeft, FaSignOutAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { toast } from 'sonner';

import { getUserQueryOptions } from '@/queries/user';
import { updateUser } from '@/services/user';
import { dashboardLinks } from '@/data';
import { USER_ROLES } from '@/constants';
import api from '@/axiosInstance';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: user } = useQuery(getUserQueryOptions());

  const signOutHandler = async () => {
    try {
      const res = await api.post('/api/auth/signout');
      if (res.status === 200) {
        updateUser(null);
        router.replace('/');
        toast.success('از حساب کاربری خود خارج شدید.');
      }
    } catch (error) {
      console.log('Error logging out user => ', error);
      toast.error('خطا در خروج از حساب کاربری.');
    }
  };

  return (
    <aside className="hidden h-full w-1/4 lg:block xl:w-62.5">
      <div className="space-y-5">
        <div className="bg-primary bg-hatching rounded-2xl rounded-tr-3xl p-6.25 pb-2.5 text-[#191919]">
          <div>
            <Image
              alt={user?.name || 'User name'}
              width={60}
              height={60}
              className="border-primary -mt-10 size-14 rounded-3xl rounded-tr-lg border-4 object-cover"
              src="/images/profile/profile2.png"
            />
          </div>
          <p className="my-2 text-xl font-bold">{user?.name}</p>
          <p className="font-normal">{user?.role === USER_ROLES.USER ? 'مشتری' : 'ادمین'}</p>
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
                    <i
                      className={clsx(
                        'group-hover:bg-primary grid size-8 place-content-center rounded-lg rounded-tr-sm transition-colors duration-300 group-hover:text-[#336]',
                        link.href === pathname ? 'bg-primary text-[#336]' : 'bg-[#ffffff1a]'
                      )}
                    >
                      {link.icon}
                    </i>
                    <span>{link.title}</span>
                  </span>
                  <FaChevronLeft
                    className={clsx(
                      'text-primary text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                      link.href === pathname ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={signOutHandler}
                className="group mb-2.5 flex w-full cursor-pointer items-center justify-between gap-2 pb-2.5"
              >
                <span className="mt-1 flex items-center gap-2">
                  <i className="grid size-8 place-content-center rounded-lg rounded-tr-sm bg-[#ffffff1a] transition-colors duration-300 group-hover:bg-red-400">
                    <FaSignOutAlt />
                  </i>
                  <span>خروج از حساب کاربری</span>
                </span>
                <FaChevronLeft className="text-sm text-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
