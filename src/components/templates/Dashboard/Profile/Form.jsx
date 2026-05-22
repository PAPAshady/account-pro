'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Input from '@modules/Input/Input';
import { userProfileSchema } from '@/schemas/auth.schema';
import api from '@/axiosInstance';
import useAuth from '@/store/useAuth';

export default function Form({ name = '', phone = '' }) {
  const setUser = useAuth((state) => state.setUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userProfileSchema), defaultValues: { name, phone } });

  const submitHandler = async (data) => {
    try {
      const res = await api.put('/api/auth/me', data);
      if (res.status === 200) {
        setUser(res.data);
        toast.success('اطلاعات شما با موفقیت ویرایش شد.');
      }
    } catch (err) {
      console.log('Error updating user data => ', err);
      toast.error('خطا در ویرایش اطلاعات.');
    }
  };

  return (
    <form className="space-y-6 px-3 py-4 md:px-4 lg:pt-6" onSubmit={handleSubmit(submitHandler)}>
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
        <div>
          <Input
            label="رمز عبور فعلی"
            type="password"
            aria-invalid={!!errors.prevPassword}
            message={errors.prevPassword?.message}
            {...register('prevPassword')}
          />
        </div>
        <div>
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
  );
}
