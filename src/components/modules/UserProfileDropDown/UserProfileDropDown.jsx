'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import { FaUser, FaSignOutAlt, FaChevronLeft } from 'react-icons/fa';
import clsx from 'clsx';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import api from '@/axiosInstance';
import useAuth from '@/store/useAuth';
import { dashboardLinks } from '@/data';

export default function UserProfileDropDown({ userName }) {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const setUser = useAuth((state) => state.setUser);

  const closeOnClickOutside = (e) => {
    if (!dropDownRef.current.contains(e.target)) setOpen(false);
  };

  const lockScrollbar = () => (document.body.className = 'overflow-y-hidden ps-[8px]');
  const unlockScrollbar = () => (document.body.className = '');

  const signOutHandler = async () => {
    try {
      const res = await api.post('/api/auth/signout');
      if (res.status === 200) setUser(null);
    } catch (error) {}
  };

  // lock scrollbar when dropdown is open
  useEffect(() => {
    if (open) lockScrollbar();
    else unlockScrollbar();
    return () => unlockScrollbar();
  }, [open]);

  return (
    <div>
      <PrimaryButton className="relative z-20" onClick={() => setOpen((prev) => !prev)}>
        {userName}
        <FaUser />
      </PrimaryButton>
      <div className="relative" onClick={closeOnClickOutside}>
        <div
          className={clsx(
            'fixed inset-0 size-full bg-black/50 transition-all duration-200',
            open ? 'z-10' : 'invisible -z-1 opacity-0'
          )}
        ></div>
        <div
          ref={dropDownRef}
          className={clsx(
            'absolute left-0 z-20 pt-2 transition-all duration-200',
            !open && 'translate-y-2 opacity-0'
          )}
        >
          <div className="w-62.5 space-y-5 rounded-3xl rounded-tr-lg bg-[#252525] p-3.75 pt-6">
            <div className="bg-primary bg-hatching space-y-2 rounded-md rounded-tl-[20px] p-6.25 pb-3.75">
              <div>
                <Image
                  alt="نیما زمانی"
                  width={60}
                  height={60}
                  className="border-primary -mt-10 size-14 rounded-3xl rounded-tr-lg border-4 object-cover"
                  src="/images/profile/profile2.png"
                />
              </div>
              <p className="text-xl font-bold text-[#191919]">نیما زمانی</p>
            </div>
            <div>
              <ul className="mb-2 flex flex-col gap-2 border-b border-[#ffffff1a] pb-2">
                {dashboardLinks.slice(0, 4).map((link) => (
                  <DropDownLink
                    key={link.id}
                    href={link.href}
                    icon={link.icon}
                    title={link.title}
                  />
                ))}
              </ul>
              <DropDownLink
                title="خروج از حساب کاربری"
                icon={<FaSignOutAlt />}
                onClick={signOutHandler}
                isSignOutButton
                href=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropDownLink({ title, href, icon, isSignOutButton, ...props }) {
  return (
    <li className="list-none" {...props}>
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
        {!isSignOut && (
          <FaChevronLeft className="text-primary text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        )}
      </Link>
    </li>
  );
}
