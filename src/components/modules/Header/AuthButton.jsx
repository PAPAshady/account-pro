'use client';
import { useQuery } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { getUserQueryOptions } from '@/queries/user';
import UserProfileDropDown from '@modules/UserProfileDropDown/UserProfileDropDown';
import Skeleton from '@modules/Skeleton/Skeleton';

export default function AuthButton() {
  const { data: user, isPending } = useQuery(getUserQueryOptions());

  return isPending ? (
    <Skeleton className="rounded-box-rtl h-9 w-33.5" />
  ) : user ? (
    <UserProfileDropDown />
  ) : (
    <PrimaryButton isLink href="/sign-in">
      ورود/ثبت نام
      <FaUser />
    </PrimaryButton>
  );
}
