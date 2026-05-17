'use client';
import { useQuery } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import CartItem from '@modules/CartItem/CartItem';
import { getCartQueryOptions } from '@/queries/cart';
import useAuth from '@/store/useAuth';
import { FaShoppingBag, FaCircleNotch } from 'react-icons/fa';

export default function Page() {
  const { data: cart, isPending } = useQuery(getCartQueryOptions());
  const user = useAuth((state) => state.user);
  const hasItems = !!cart?.totalItems;

  return (
    <div className="container space-y-8">
      <div>
        <h2 className="font-morabba text-2xl font-semibold">سبد خرید</h2>
        <p className="font-stretchPro text-paragraph">Shopping Cart</p>
      </div>

      {user && !isPending && hasItems ? (
        <>
          <div className="flex items-start gap-4">
            <main className="bg-foreground flex w-full flex-col gap-3.75 overflow-hidden rounded-3xl rounded-tr-lg lg:w-2/3 xl:w-full">
              {cart?.items.map((item) => (
                <CartItem
                  key={item._id}
                  quantity={item.quantity}
                  title={item.title}
                  price={item.price}
                  image={item.imageUrl}
                  slug={item.slug}
                  planId={item.planId}
                  planTitle={item.planTitle}
                  accountType={item.accountType}
                  duration={item.duration}
                />
              ))}
            </main>
            <aside className="bg-foreground hidden w-1/3 rounded-3xl rounded-tl-lg p-5 lg:block xl:w-95 xl:shrink-0">
              <div>
                <p className="mb-1.25 border-b border-[#FFFFFF1A] pb-2.5">جمع کل سبد خرید</p>
                <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.25">
                  <p>قیمت کالا ها ({cart?.items.length})</p>
                  <p className="text-primary grow text-end">
                    <span className="me-1 text-start text-xl text-white">
                      {cart?.totalPrice.toLocaleString()}
                    </span>
                    تومان
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.25">
                  <p>جمع سبد خرید</p>
                  <p className="text-primary grow text-end">
                    <span className="me-1 text-start text-xl text-white">
                      {cart?.totalPrice.toLocaleString()}
                    </span>
                    تومان
                  </p>
                </div>
                <div className="text-primary flex flex-wrap items-center justify-between gap-2 px-3 py-2.25">
                  <p>سود شما از خرید</p>
                  <p className="grow text-end">
                    <span className="me-1 text-start text-xl">
                      (۵٪) {((cart?.totalPrice * 95) / 100).toLocaleString()}
                    </span>
                    تومان
                  </p>
                </div>
                <div className="pt-4 pb-2">
                  <PrimaryButton
                    isLink
                    href="/checkout"
                    className="bg-primary text-blackColor w-full hover:bg-none"
                  >
                    تایید و تکمیل سفارش
                  </PrimaryButton>
                </div>
              </div>
            </aside>
          </div>
          <div className="bg-box fixed inset-0 top-[unset] bottom-0 z-10 border-t border-[#333] px-4 py-3 lg:hidden">
            <div className="flex w-full items-center justify-between gap-2">
              <PrimaryButton
                isLink
                href="/checkout"
                className="bg-primary text-blackColor max-h-15 py-1.5! text-center hover:bg-none min-[360px]:py-2.5! sm:w-1/2"
              >
                تایید و تکمیل سفارش
              </PrimaryButton>
              <div className="flex grow flex-col items-end gap-1">
                <span className="text-paragraph text-xs min-[360px]:text-base">
                  جمع کل سبد خرید
                </span>
                <p className="text-sm min-[360px]:text-lg">
                  <span className="text-primary me-1">{cart?.totalPrice.toLocaleString()}</span>
                  تومان
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="border-[#3a3939 border-primary/50 mt-10 flex flex-col items-center justify-center gap-6 rounded-lg border px-4 py-5 text-center sm:py-10">
          {isPending && user ? (
            <FaCircleNotch className="animate-spin text-3xl" />
          ) : (
            <FaShoppingBag className="text-2xl" />
          )}

          <div className="space-y-2">
            <p className="">
              {!user
                ? 'لطفا ابتدا وارد شوید.'
                : isPending
                  ? 'در حال بارگذاری...'
                  : 'سبد خرید شما خالی است.'}
            </p>
            <p className="text-paragraph text-sm">
              {!user
                ? 'پس از ورود یا ثبت نام میتوانید محصولات خود را اضافه کنید.'
                : isPending
                  ? 'یه لحظه صبر کن. همه چی تا چند ثانیه دیگه آماده میشه.'
                  : 'لطفا محصولات موردنظر خود را انتخاب و به سبد اضافه کنید.'}
            </p>
            {!isPending && (
              <PrimaryButton
                isLink
                href={!user ? '/sign-in' : '/shop'}
                className="bg-primary bg-hatching mt-5 text-[#191919]"
              >
                {!user ? 'ورود و ثبت نام' : 'دیدن محصولات'}
              </PrimaryButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
