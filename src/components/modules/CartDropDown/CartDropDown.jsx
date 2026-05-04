import { useState } from 'react';

import { Root, Trigger, Portal, Content } from '@radix-ui/react-dropdown-menu';
import { FaShoppingCart } from 'react-icons/fa';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import CartDropDownItem from '@modules/CartDropDownItem/CartDropDownItem';

export default function CartDropDown() {
  const [open, setOpen] = useState(false);
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
          className="data-[state=closed]:animate-slide-out data-[state=open]:animate-slide-in flex max-w-97.5 flex-col rounded-3xl rounded-tr-lg bg-[#252525] p-2"
        >
          <div className="flex grow flex-col gap-2">
            <CartDropDownItem />
            <CartDropDownItem />
          </div>
          <div className="pt-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium text-[#ccc]">مبلغ قابل پرداخت :‌</p>
              <p className="grow text-end text-[32px]">
                ۲۸۰,۰۰۰
                <span className="text-primary ms-2 text-xl">تومان</span>
              </p>
            </div>
            <PrimaryButton
              isLink
              href="/cart"
              className="bg-primary bg-hatching w-full font-semibold text-[#2f2f2f]"
              onClick={() => setOpen(false)}
            >
              ثبت سفارش و پرداخت
            </PrimaryButton>
          </div>
        </Content>
      </Portal>
    </Root>
  );
}
