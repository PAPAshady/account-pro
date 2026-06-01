'use client';
import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useMutation } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Input from '@modules/Input/Input';
import { userProfileSchema } from '@/schemas/auth.schema';
import { getUserQueryOptions, updateUserMutationOptions } from '@/queries/user';

export default function Form() {
  const { data: user } = useQuery(getUserQueryOptions());
  const { mutate, isPending } = useMutation(updateUserMutationOptions());
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userProfileSchema) });

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('phone', user.phone);
    }
  }, [user, setValue]);

  const submitHandler = async (data) => {
    mutate(data, {
      onError: (err) => {
        const { data, status } = err.response;
        switch (status) {
          case 400:
            if (data.errors) {
              for (let key in data.errors) {
                setError(key, { message: data.errors[key] });
              }
            } else setError(data.field, { message: data.message });
            break;
          case 409:
            setError(data.field, { message: data.message });
        }
      },
    });
  };

  return (
    <form className="space-y-6 px-3 py-4 md:px-4 lg:pt-6" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
        <div className="min-[480px]:col-span-2 sm:col-span-1">
          <Input
            label="نام و نام خانوادگی *"
            aria-invalid={!!errors.name}
            message={errors.name?.message}
            {...register('name')}
          />
        </div>
        <div className="min-[480px]:col-span-2 sm:col-span-1">
          <Input
            label="تلفن همراه *"
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
            autoComplete="new-password"
            {...register('prevPassword')}
          />
        </div>
        <div>
          <Input
            label="رمز عبور جدید"
            type="password"
            aria-invalid={!!errors.newPassword}
            message={errors.newPassword?.message}
            autoComplete="new-password"
            {...register('newPassword')}
          />
        </div>
        <div>
          <Input
            label="تکرار رمز عبور جدید"
            type="password"
            aria-invalid={!!errors.repeatedNewPassword}
            message={errors.repeatedNewPassword?.message}
            autoComplete="new-password"
            {...register('repeatedNewPassword')}
          />
        </div>
      </div>
      <div className="max-w-37.5">
        <PrimaryButton disabled={isPending} className="w-full" type="submit" isHighLight>
          {isPending ? 'لطفا صبر کنید...' : 'ذخیره تغییرات'}
        </PrimaryButton>
      </div>
    </form>
  );
}
