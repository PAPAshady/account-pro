'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Input from '@modules/Input/Input';
import { userProfileSchema } from '@/schemas/auth.schema';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userProfileSchema) });

  const submitHandler = async (data) => {
    console.log(data);
  };

  return (
    <div className="pb-6">
      <div className="relative">
        <div
          className="absolute top-3 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent lg:top-4"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="px-4">
          <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">
            اطلاعات حساب کاربری
          </h3>
        </div>
        <form
          className="space-y-6 px-3 py-4 md:px-4 lg:pt-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
            <div className="min-[480px]:col-span-2 sm:col-span-1">
              <Input
                label="نام و نام خانوادگی"
                aria-invalid={!!errors.name}
                message={errors.name?.message}
                {...register('name')}
              />
            </div>
            <div className="min-[480px]:col-span-2 sm:col-span-1">
              <Input
                label="تلفن همراه"
                aria-invalid={!!errors.phone}
                message={errors.phone?.message}
                {...register('phone')}
              />
            </div>
            <div className="">
              <Input
                label="رمز عبور فعلی"
                type="password"
                aria-invalid={!!errors.prevPassword}
                message={errors.prevPassword?.message}
                {...register('prevPassword')}
              />
            </div>
            <div className="">
              <Input
                label="رمز عبور جدید"
                type="password"
                aria-invalid={!!errors.newPassword}
                message={errors.newPassword?.message}
                {...register('newPassword')}
              />
            </div>
            <div className="">
              <Input
                label="تکرار رمز عبور جدید"
                type="password"
                aria-invalid={!!errors.repeatedNewPassword}
                message={errors.repeatedNewPassword?.message}
                {...register('repeatedNewPassword')}
              />
            </div>
          </div>
          <div className="max-w-37.5">
            <PrimaryButton className="w-full" type="submit" isHighLight>
              ذخیره تغییرات
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
