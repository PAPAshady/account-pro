'use client';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

const schema = z
  .object({
    name: z.string().min(2, { message: 'نام باید حداقل شامل دو کرکتر باشد' }),
    email: z.email({ message: 'ایمیل نامعتبر' }),
    phone: z.string().length(11, { message: 'تلفن باید شامل ۱۱ رقم باشد' }),
    password: z
      .string()
      .min(6, { message: 'رمز عبور باید حداقل شامل ۶ کرکتر باشد' })
      .max(20, { message: 'رمز عبور باید حداکثر ۲۰ کرکتر داشته باشد.' }),
    repeatedPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repeatedPassword) {
      return ctx.addIssue({
        code: 'custom',
        path: ['repeatedPassword'],
        message: 'رمز های عبور همخوانی ندارند.',
      });
    }

    return true;
  });

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  console.log(errors);

  const submitHandler = async () => {
    console.log('Hello world!');
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
          <PrimaryButton className="bg-primary mx-auto w-[80%] max-w-62.5 font-bold text-[#2f2f2f] hover:bg-[#0ac596]! hover:bg-none">
            ایجاد حساب کاربری
          </PrimaryButton>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 min-[515px]:justify-between">
          <p className="text-paragraph">عضوی از خانواده‌ی اکانتینو هستید؟</p>
          <Link href="/sign-in" className="text-primary hover:text-[#0ac596]">
            ورود به حساب کاربری
          </Link>
        </div>
      </form>
    </>
  );
}
