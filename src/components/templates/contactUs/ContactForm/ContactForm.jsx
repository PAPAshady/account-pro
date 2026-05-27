'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { toast } from 'sonner';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';
import contactUsSchema from '@/schemas/contactUs.schema';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactUsSchema) });

  const submitHandler = () => {
    toast.success('اطلاعات شما با موفقیت ثبت شد. کارشناسان ما با شما تماس خواهند گرفت.', {
      duration: 5000,
    });
    reset();
  };

  return (
    <div className="relative">
      <Particle className="top-30 -right-30 z-2 size-44 opacity-60 blur-[70px] sm:-bottom-46 sm:size-68 sm:opacity-40 sm:blur-[80px] lg:opacity-30" />

      <div className="container">
        <div className="pt-10">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="bg-box relative mx-auto rounded-3xl rounded-tr-lg p-5 lg:max-w-[75%]"
          >
            <div className="-mt-9 font-bold">
              <p className="text-xl">تماس با ما</p>
              <p className="text-paragraph text-xl">Contact Us</p>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
              <Input
                label="نام :"
                placeholder="نام"
                aria-invalid={!!errors.firstName}
                message={errors.firstName?.message}
                {...register('firstName')}
              />
              <Input
                label="نام خانوادگی :"
                placeholder="نام خانوادگی"
                aria-invalid={!!errors.lastName}
                message={errors.lastName?.message}
                {...register('lastName')}
              />
              <Input
                label="شماره همراه :‌"
                placeholder="۰۹۰۰۰۰۰۰۰۰۰"
                aria-invalid={!!errors.phone}
                message={errors.phone?.message}
                {...register('phone')}
              />
              <Input
                label="ایمیل : "
                placeholder="someone@example.com"
                type="email"
                aria-invalid={!!errors.email}
                message={errors.email?.message}
                {...register('email')}
              />
              <div className="md:col-start-1 md:col-end-3">
                <label className="mb-1 block">پیام شما :</label>
                <div
                  className={clsx(
                    'bg-foreground rounded-box-ltr flex grow items-center gap-2 border px-3.5 transition-colors duration-300',
                    !!errors.message ? 'border-red-400' : 'border-foreground'
                  )}
                >
                  <textarea
                    placeholder="پیام شما به اکانت پرو"
                    className="h-40 grow pt-2.5 outline-none"
                    {...register('message')}
                  />
                </div>
                {!!errors.message && (
                  <span className="mt-2 block text-sm text-red-400 sm:ps-2">
                    {errors.message?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <PrimaryButton dir="ltr" className="bg-primary w-35 text-[#2f2f2f] hover:bg-none">
                ارسال پیام
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
