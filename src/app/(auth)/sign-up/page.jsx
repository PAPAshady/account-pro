'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { signUpSchema } from '@/schemas/auth.schema';
import { updateUser } from '@/services/user';
import api from '@/axiosInstance';

export default function SignUp() {
  const [isPending, setIsPending] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const submitHandler = async (data) => {
    try {
      setIsPending(true);
      const res = await api.post('/api/auth/signup', data);
      if (res.status === 201) {
        updateUser(res.data.user);
        const callbackUrl = params.get('callbackUrl') || null;
        const href = callbackUrl ? decodeURIComponent(callbackUrl) : '/';
        toast.success('خوش آمدید');
        router.push(href);
      }
    } catch (err) {
      const { status, data } = err.response;
      if (status === 400) {
        for (let key in data.errors) {
          setError(key, { message: data.errors[key] });
        }
        return;
      }
      if (status === 409) {
        setError(data.field, { message: data.message });
        return;
      }
      toast.error('خطا در ایجاد حساب کاربری. لطفا مجددا تلاش کنید.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="space-y-1 font-bold">
        <p className="text-primary text-xl">ایجاد حساب کاربری</p>
        <p className="text-sm">Sign-up</p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Input
              label="نام و نام خانوادگی : "
              placeholder="نام و نام خانوادگی شما"
              aria-invalid={!!errors.name}
              message={errors.name?.message}
              {...register('name')}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              label="شماره همراه :‌"
              inputMode="tel"
              placeholder="۰۹۰۰۰۰۰۰۰۰۰"
              aria-invalid={!!errors.phone}
              message={errors.phone?.message}
              {...register('phone')}
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              label="آدرس ایمیل :‌"
              type="email"
              autoComplete="new-password"
              placeholder="someone@gmail.com"
              aria-invalid={!!errors.email}
              message={errors.email?.message}
              {...register('email')}
            />
          </div>
          <div>
            <Input
              label="رمز عبور :‌"
              type="password"
              autoComplete="new-password"
              aria-invalid={!!errors.password}
              message={errors.password?.message}
              {...register('password')}
            />
          </div>
          <div>
            <Input
              label="تکرار رمز عبور :‌"
              type="password"
              aria-invalid={!!errors.repeatedPassword}
              message={errors.repeatedPassword?.message}
              {...register('repeatedPassword')}
            />
          </div>
        </div>
        <div className="pt-2">
          <PrimaryButton disabled={isPending} isHighLight className="w-full">
            {isPending ? 'لطفا صبر کنید...' : 'ایجاد حساب کاربری'}
          </PrimaryButton>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 min-[515px]:justify-between">
          <p className="text-paragraph">عضوی از خانواده‌ی اکانتینو هستید؟</p>
          <Link
            href={`/sign-in?${params.toString()}`}
            className="text-primary hover:text-[#0ac596]"
          >
            ورود به حساب کاربری
          </Link>
        </div>
      </form>
    </>
  );
}
