'use client';
import { FaBars } from 'react-icons/fa';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import useDashboardHamburgerMenu from '@/store/useDashboardHamburgerMenu';

export default function DashboardMenuButton() {
  const setOpen = useDashboardHamburgerMenu((state) => state.setOpen);
  return (
    <PrimaryButton onClick={() => setOpen(true)} dir="ltr" className="px-3! outline-none lg:hidden">
      <FaBars />
    </PrimaryButton>
  );
}
