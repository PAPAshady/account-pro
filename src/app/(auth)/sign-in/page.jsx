'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { signInSchema } from '@/schemas/auth.schema';
import api from '@/axiosInstance';
import { updateUser } from '@/services/user';

export default function SignIn() {
  const [isPending, setIsPending] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signInSchema) });

  const submitHandler = async (data) => {
    try {
      setIsPending(true);
      const res = await api.post('/api/auth/signin', data);
      if (res.status === 200) {
        updateUser(res.data.user);
        const callbackUrl = params.get('callbackUrl') || null;
        const href = callbackUrl ? decodeURIComponent(callbackUrl) : '/';
        toast.success('خوش آمدید.');
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
      if (status === 401) {
        toast.error(data.message);
        return;
      }
      toast.error('خطا در ورود به حساب کاربری. لطفا مجددا تلاش کنید.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="space-y-1 font-bold">
        <p className="text-primary text-xl">ورود به حساب کاربری</p>
        <p className="text-sm">Sign-in</p>
      </div>
      <p className="text-paragraph">
        از انتخاب شما مطمئن هستیم، <br /> چون رضایت شما همیشه اولویت ما بوده است.
      </p>
      <form className="space-y-5" onSubmit={handleSubmit(submitHandler)}>
        <div className="space-y-2">
          <Input
            label="آدرس ایمیل : "
            type="email"
            placeholder="someone@gmail.com"
            autoComplete="new-password"
            aria-invalid={!!errors.email}
            message={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="رمز عبور :‌"
            type="password"
            aria-invalid={!!errors.password}
            autoComplete="new-password"
            message={errors.password?.message}
            {...register('password')}
          />
        </div>
        <div className="pt-2">
          <PrimaryButton disabled={isPending} isHighLight className="w-full">
            {isPending ? 'لطفا صبر کنید...' : 'ورود به حساب کاربری'}
          </PrimaryButton>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 min-[515px]:justify-between">
          <p className="text-paragraph">هنوز عضوی از خانواده‌ی اکانتینو نیستید؟</p>
          <Link
            href={`/sign-up?${params.toString()}`}
            className="text-primary hover:text-[#0ac596]"
          >
            ایجاد حساب کاربری
          </Link>
        </div>
      </form>
    </>
  );
}
