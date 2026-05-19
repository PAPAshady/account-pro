'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaUser, FaChevronLeft } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { commentsSchema } from '@/schemas/comment.schema';
import useAuth from '@/store/useAuth';
import styles from './CommentForm.module.css';
import { addCommentMutationOptions } from '@/queries/comments';

export default function CommentForm({ productId }) {
  const { mutate, isPending } = useMutation(addCommentMutationOptions(productId));
  const { slug } = useParams();
  const user = useAuth((state) => state.user);
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentsSchema),
  });

  const submitHandler = async (data) => {
    mutate(data, { onSuccess: () => reset() });
  };

  if (!user) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-yellow-500/20 px-5 py-3.5 font-normal text-yellow-100 select-none">
        <div className="flex items-center gap-2">
          <FaUser className="shrink-0 text-lg" />
          <p>برای ثبت نظر لطفا وارد حساب کاربری خود شوید.</p>
        </div>
        <Link
          href={`/sign-in?callbackUrl=${encodeURIComponent(`/product/${slug}#comments`)}`}
          className="flex grow items-center justify-end gap-2"
        >
          <span className="underline">ورود یا عضویت</span>
          <FaChevronLeft />
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-foreground rounded-3xl rounded-tr-lg p-5"
    >
      <div className="mb-4">
        <p className="mb-2.5 text-lg">دیدگاه شما</p>
        <p className="text-paragraph font-light">
          دیدگاه شما نه تنها به ما کمک می‌کنه خدمات بهتری ارائه بدیم، بلکه به دیگر کاربران هم در
          انتخابشون کمک می‌کنه.
        </p>
      </div>
      <div className="mb-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="w-full md:col-span-2">
            <label className="mb-1 block font-light">دیدگاه شما : *</label>
            {!!errors.body && (
              <span className="mt-1 mb-2 block text-sm text-red-400 sm:ps-2">
                {errors.body?.message}
              </span>
            )}
            <div
              className={clsx(
                'bg-foreground rounded-box-ltr flex w-full items-center gap-2 border px-3.5',
                !!errors.body ? 'border-red-400' : 'border-transparent'
              )}
            >
              <textarea
                className="h-50 w-full pt-2.5 font-normal outline-none"
                placeholder="دیدگاه خودتان را بنویسید"
                {...register('body')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 space-y-2 font-light">
        <p>امتیاز شما به اکانت پرو : *</p>
        <div className="flex max-w-50 flex-row-reverse justify-between">
          {Array(5)
            .fill()
            .reverse()
            .map((_, index) => (
              <RatingButton
                key={index}
                onClick={() => setValue('rating', 5 - index)}
                isActive={watch('rating') >= 5 - index}
              />
            ))}
        </div>
      </div>
      <PrimaryButton disabled={isPending} type="submit" className="w-full" isHighLight>
        {isPending ? 'لطفا صبر کنید...' : 'ارسال دیدگاه'}
      </PrimaryButton>
    </form>
  );
}

function RatingButton({ isActive = false, ...props }) {
  return (
    <button
      type="button"
      className={clsx(
        'star hover:bg-primary grid size-8 cursor-pointer place-content-center rounded-lg rounded-tr-sm transition-colors duration-300',
        styles.star,
        isActive ? 'bg-primary' : 'bg-[#3f3f3f]'
      )}
      {...props}
    >
      <Image alt="" width={20} height={20} src="/images/product/star.png" />
    </button>
  );
}
