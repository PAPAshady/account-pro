'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import { FaUser, FaSignOutAlt, FaChevronLeft } from 'react-icons/fa';
import clsx from 'clsx';
import { Root, Trigger, Portal, Content, Item } from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';
import { useQuery } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import api from '@/axiosInstance';
import { getUserQueryOptions } from '@/queries/user';
import { updateUser } from '@/services/user';
import { dashboardLinks } from '@/data';

export default function UserProfileDropDown() {
  const [open, setOpen] = useState(false);
  const { data: user } = useQuery(getUserQueryOptions());

  const signOutHandler = async () => {
    try {
      const res = await api.post('/api/auth/signout');
      if (res.status === 200) {
        updateUser(null);
        toast.success('از حساب کاربری خود خارج شدید.');
      }
    } catch (error) {
      console.log('Error logging out user => ', error);
      toast.error('خطا در خروج از حساب کاربری.');
    }
  };

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger className="outline-none" asChild>
        <PrimaryButton>
          {user?.name}
          <FaUser />
        </PrimaryButton>
      </Trigger>
      <Portal>
        <Content
          align="end"
          dir="rtl"
          sideOffset={10}
          className="data-[state=closed]:animate-slide-out data-[state=open]:animate-slide-in z-5 w-62.5 space-y-5 rounded-3xl rounded-tr-lg bg-[#252525] p-3.75 pt-6"
        >
          <div className="bg-primary bg-hatching space-y-2 rounded-md rounded-tl-[20px] p-6.25 pb-3.75">
            <div>
              <Image
                alt={user?.name}
                width={60}
                height={60}
                className="border-primary -mt-10 size-14 rounded-3xl rounded-tr-lg border-4 object-cover"
                src="/images/profile/profile2.png"
              />
            </div>
            <p className="text-xl font-bold text-[#191919]">{user?.name}</p>
          </div>
          <div>
            <div className="mb-2 flex flex-col gap-2 border-b border-[#ffffff1a] pb-2">
              {dashboardLinks.slice(0, 4).map((link) => (
                <DropDownLink key={link.id} href={link.href} icon={link.icon} title={link.title} />
              ))}
            </div>
            <DropDownLink
              title="خروج از حساب کاربری"
              icon={<FaSignOutAlt />}
              onClick={signOutHandler}
              isSignOutButton
              href=""
            />
          </div>
        </Content>
      </Portal>
    </Root>
  );
}

function DropDownLink({ title, href, icon, isSignOutButton, ...props }) {
  return (
    <Item className="outline-none" {...props}>
      <Link href={href} className="group flex items-center justify-between py-1">
        <div className="flex items-center gap-3">
          <i
            className={clsx(
              'grid size-8 place-content-center rounded-lg rounded-tr-sm bg-[#ffffff1a] transition-colors duration-300',
              isSignOutButton
                ? 'group-hover:bg-red-400'
                : 'group-hover:bg-primary group-hover:text-[#336]'
            )}
          >
            {icon}
          </i>
          <span>{title}</span>
        </div>
        {!isSignOutButton && (
          <FaChevronLeft className="text-primary text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
      </Link>
    </Item>
  );
}
