'use client';
import { FaShoppingBag } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';

import Input from '@modules/Input/Input';
import CheckoutItem from '@modules/CheckoutItem/CheckoutItem';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { getCartQueryOptions } from '@/queries/cart';
import { getUserQueryOptions } from '@/queries/user';
import { checkoutSchema } from '@/schemas/checkout.schema';
import { addOrderMutationOptions } from '@/queries/orders';

export default function Page() {
  'use no memo';
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });
  const { data: user } = useQuery(getUserQueryOptions());
  const { data: cart } = useQuery(getCartQueryOptions());
  const { mutate, isPending } = useMutation(addOrderMutationOptions());

  const submitHandler = (data) => {
    mutate(data, {
      onSuccess: () => reset(),
      onError: (err) => {
        const { data, status } = err.response;
        if (status === 400 && data.errors) {
          for (let key in data.errors) {
            setError(key, { message: data.errors[key] });
          }
        }
      },
    });
  };

  return (
    <div className="container space-y-8">
      <div>
        <h2 className="font-morabba text-2xl font-semibold">تسویه حساب</h2>
        <p className="font-stretchPro text-paragraph">Checkout</p>
      </div>
      {user && !!cart?.totalItems ? (
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-4 lg:flex-row lg:items-start"
        >
          <main className="bg-foreground rounded-3xl rounded-tr-lg p-5 lg:w-2/3 xl:w-full">
            <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Input
                  label="نام *"
                  aria-invalid={!!errors.firstName}
                  message={errors.firstName?.message}
                  {...register('firstName')}
                />
              </div>
              <div>
                <Input
                  label="نام خانوادگی *"
                  aria-invalid={!!errors.lastName}
                  message={errors.lastName?.message}
                  {...register('lastName')}
                />
              </div>
              <div>
                <Input
                  type="tel"
                  label="شماره تماس *"
                  aria-invalid={!!errors.phone}
                  message={errors.phone?.message}
                  {...register('phone')}
                />
              </div>
              <div>
                <Input
                  type="email"
                  label="آدرس ایمیل *"
                  aria-invalid={!!errors.email}
                  message={errors.email?.message}
                  {...register('email')}
                />
              </div>
              <div>
                <Input
                  label="تلگرام"
                  aria-invalid={!!errors.telegram}
                  message={errors.telegram?.message}
                  {...register('telegram')}
                />
              </div>
              <div>
                <Input
                  label="واتس اپ"
                  aria-invalid={!!errors.whatsapp}
                  message={errors.whatsapp?.message}
                  {...register('whatsapp')}
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block font-normal"> توضیحات تکمیلی سفارش (اختیاری)</label>
              <div
                className={clsx(
                  'bg-foreground rounded-box-ltr flex grow items-center gap-2 border px-3.5 py-2 transition-colors duration-300',
                  !!errors.footNote ? 'border-red-400' : 'border-foreground'
                )}
              >
                <textarea
                  rows={8}
                  className="grow font-normal outline-none"
                  {...register('footNote')}
                />
              </div>
              {!!errors.footNote && (
                <span className="mt-2 block text-sm text-red-400 sm:ps-2">
                  {errors.footNote?.message}
                </span>
              )}
            </div>
          </main>
          <aside className="bg-foreground rounded-3xl rounded-tl-lg p-5 lg:w-1/3 xl:w-95 xl:shrink-0">
            <p className="mb-6 border-b border-[#FFFFFF1A] pb-2.5">خلاصه سفارش</p>
            <div className="mb-8 flex flex-col gap-6">
              {cart?.items.map((item) => (
                <CheckoutItem
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  image={item.imageUrl}
                  duration={item.duration}
                  planTitle={item.planTitle}
                  accountType={item.accountType}
                  slug={item.slug}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <div className="mb-4 hidden flex-wrap justify-between gap-2 lg:flex">
              <p>جمع قیمت : </p>
              <p className="grow text-end">
                <span className="text-primary me-1.5 text-xl sm:text-2xl">
                  (5%) {((cart?.totalPrice * 95) / 100).toLocaleString()}
                </span>
                تومان
              </p>
            </div>
            <PrimaryButton
              disabled={isPending}
              type="submit"
              isHighLight
              className="hidden w-full lg:flex"
            >
              {isPending ? 'لطفا صبر کنید...' : 'پرداخت'}
            </PrimaryButton>
          </aside>
          <div className="bg-box fixed inset-0 top-[unset] bottom-0 z-10 border-t border-[#333] px-4 py-3 lg:hidden">
            <div className="flex w-full items-center justify-between gap-2">
              <PrimaryButton
                disabled={isPending}
                type="submit"
                isHighLight
                className="max-h-15 py-1.5! text-center min-[360px]:w-[40%] min-[360px]:py-2.5!"
              >
                {isPending ? 'لطفا صبر کنید...' : 'پرداخت'}
              </PrimaryButton>
              <div className="flex grow flex-col items-end gap-1">
                <span className="text-paragraph text-xs min-[360px]:text-base">
                  جمع کل سبد خرید
                </span>
                <p className="text-lg">
                  <span className="text-primary me-1">
                    (5%) {((cart?.totalPrice * 95) / 100).toLocaleString()}
                  </span>
                  تومان
                </p>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="border-[#3a3939 border-primary/50 mt-10 flex flex-col items-center justify-center gap-6 rounded-lg border px-4 py-5 text-center sm:py-10">
          <FaShoppingBag className="text-2xl" />
          <div className="space-y-2">
            <p className="">{!user ? 'لطفا ابتدا وارد شوید.' : 'سبد خرید شما خالی است.'}</p>
            <p className="text-paragraph text-sm">
              {!user
                ? 'پس از ورود یا ثبت نام میتوانید محصولات خود را اضافه کنید.'
                : 'لطفا محصولات موردنظر خود را انتخاب و به سبد اضافه کنید.'}
            </p>
            <PrimaryButton
              isLink
              href={!user ? '/sign-in' : '/shop'}
              className="bg-primary bg-hatching mt-5 text-[#191919]"
            >
              {!user ? 'ورود و ثبت نام' : 'دیدن محصولات'}
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
