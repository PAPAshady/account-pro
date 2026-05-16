'use client';
import { FaShoppingBag } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

import Input from '@modules/Input/Input';
import CheckoutItem from '@modules/CheckoutItem/CheckoutItem';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { getCartQueryOptions } from '@/queries/cart';
import useAuth from '@/store/useAuth';

export default function Page() {
  const user = useAuth((state) => state.user);
  const { data: cart } = useQuery(getCartQueryOptions());

  return (
    <div className="container space-y-8">
      <div>
        <h2 className="font-morabba text-2xl font-semibold">تسویه حساب</h2>
        <p className="font-stretchPro text-paragraph">Checkout</p>
      </div>
      {user && !!cart?.totalItems ? (
        <form className="flex flex-col gap-4 lg:flex-row">
          <main className="bg-foreground rounded-3xl rounded-tr-lg p-5 lg:w-2/3 xl:w-full">
            <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <Input required label="نام *" />
              </div>
              <div>
                <Input required label="نام خانوادگی *" />
              </div>
              <div>
                <Input type="tel" label="شماره تماس *" required />
              </div>
              <div>
                <Input required type="email" label="آدرس ایمیل *" />
              </div>
              <div>
                <Input label="تلگرام" />
              </div>
              <div>
                <Input label="واتس اپ" />
              </div>
            </div>
            <div>
              <label className="mb-1 block font-normal"> توضیحات تکمیلی سفارش (اختیاری)</label>
              <div className="bg-foreground rounded-box-ltr flex grow items-center gap-2 px-3.5">
                <textarea rows={8} className="grow font-normal outline-none" />
              </div>
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
            <div className="mb-4 flex flex-wrap justify-between gap-2">
              <p>جمع قیمت : </p>
              <p className="grow text-end">
                <span className="text-primary me-1.5 text-xl sm:text-2xl">
                  {cart?.totalPrice.toLocaleString()}
                </span>
                تومان
              </p>
            </div>
            <PrimaryButton className="bg-primary text-blackColor w-full hover:bg-none">
              پرداخت
            </PrimaryButton>
          </aside>
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
