import { useState } from 'react';

import { Root, Trigger, Portal, Content } from '@radix-ui/react-dropdown-menu';
import { FaShoppingCart } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import CartDropDownItem from '@modules/CartDropDownItem/CartDropDownItem';
import CartDropDownItemSkeleton from '@modules/CartDropDownItem/CartDropDownItemSkeleton';
import { getCartQueryOptions } from '@/queries/cart';
import useAuth from '@/store/useAuth';

export default function CartDropDown() {
  const [open, setOpen] = useState(true);
  const user = useAuth((state) => state.user);
  const { data, isPending } = useQuery(getCartQueryOptions());
  const hasItems = !!data?.items.length;
  const isScrollable = data?.items.length > 2 || isPending;

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        <PrimaryButton className="px-3! outline-none">
          <FaShoppingCart />
        </PrimaryButton>
      </Trigger>
      <Portal>
        <Content
          align="end"
          dir="rtl"
          sideOffset={10}
          className={clsx(
            'data-[state=closed]:animate-slide-out data-[state=open]:animate-slide-in flex flex-col rounded-3xl rounded-tr-lg bg-[#252525] px-2 py-3',
            isScrollable ? 'w-100' : 'w-95'
          )}
        >
          {!user ? (
            <p className="p-1">لطفا ابتدا وارد شوید.</p>
          ) : isPending || hasItems ? (
            <div className={clsx('max-h-65', isScrollable && 'overflow-y-auto')}>
              <div className={clsx('mb-4 flex grow flex-col gap-2', isScrollable && 'ps-4 pe-2')}>
                {isPending
                  ? Array(4)
                      .fill()
                      .map((_, index) => <CartDropDownItemSkeleton key={index} />)
                  : data.items.map((item) => (
                      <CartDropDownItem
                        key={item._id}
                        planId={item.planId}
                        title={item.title}
                        price={item.price}
                        image={item.imageUrl}
                        quantity={item.quantity}
                        slug={item.slug}
                      />
                    ))}
              </div>
            </div>
          ) : (
            <p className="p-1">سبد خرید شما خالی است.</p>
          )}

          <div>
            <div className="my-1.5 flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium text-[#ccc]">مبلغ قابل پرداخت :‌</p>
              <p className="grow text-end text-[32px]">
                {(!user ? 0 : data?.totalPrice.toLocaleString()) || 0}
                <span className="text-primary ms-2 text-xl">تومان</span>
              </p>
            </div>
            {user && (hasItems || isPending) && (
              <PrimaryButton
                isLink
                isHighLight
                href="/cart"
                className="w-full"
                disabled={isPending}
                onClick={() => setOpen(false)}
              >
                ثبت سفارش و پرداخت
              </PrimaryButton>
            )}
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
