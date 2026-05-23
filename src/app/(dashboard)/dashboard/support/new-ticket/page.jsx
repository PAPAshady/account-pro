'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { ticketSchema } from '@/schemas/tickets.schema';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ticketSchema) });

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <Input
            label="موضوع :"
            placeholder="موضوع تیکت خود را بنویسید."
            aria-invalid={!!errors.title}
            message={errors.title?.message}
            {...register('title')}
          />
        </div>

        <div>
          <label htmlFor="description-textarea" className="mb-1 block font-normal">
            توضیحات :‌
          </label>
          <div
            className={clsx(
              'bg-foreground border-foreground rounded-box-ltr flex grow items-center gap-2 border px-3.5 transition-colors duration-300 invalid:scale-200',
              !!errors.description ? 'border-red-400' : 'border-foreground'
            )}
          >
            <textarea
              name="description-textarea"
              className="h-60 grow py-2 font-normal outline-none"
              placeholder="توضیحات خود را به صورت کامل بنویسید."
              {...register('description')}
            />
          </div>
          {!!errors.description && (
            <span className="mt-2 block text-sm text-red-400 sm:ps-2">
              {errors.description?.message}
            </span>
          )}
        </div>
      </div>
      <PrimaryButton isHighLight className="ms-auto w-42.5">
        ثبت تیکت
      </PrimaryButton>
    </form>
  );
}
