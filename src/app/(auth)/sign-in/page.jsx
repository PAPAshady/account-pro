'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { signInSchema } from '@/schemas/auth.schema';
import api from '@/axiosInstance';

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signInSchema) });

  const submitHandler = async (data) => {
    try {
      const res = await api.post('/api/auth/signin', data);

      if (res.status === 400) {
        for (let key in res.data.errors) {
          setError(key, { message: res.data.errors[key] });
        }
        return;
      }

      if (res.status === 401) {
        setError('root', { message: res.data.message });
        return;
      }

      if (res.status === 200) router.push('/');
    } catch (err) {}
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
          <PrimaryButton className="bg-primary mx-auto w-[80%] max-w-62.5 font-bold text-[#2f2f2f] hover:bg-[#0ac596]! hover:bg-none">
            ورود به حساب کاربری
          </PrimaryButton>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 min-[515px]:justify-between">
          <p className="text-paragraph">هنوز عضوی از خانواده‌ی اکانتینو نیستید؟</p>
          <Link href="/sign-up" className="text-primary hover:text-[#0ac596]">
            ایجاد حساب کاربری
          </Link>
        </div>
      </form>
    </>
  );
}
