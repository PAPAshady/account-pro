import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import CartItem from '@modules/CartItem/CartItem';

export default function page() {
  return (
    <div className="    container space-y-8">
      <div>
        <h2 className="font-morabba text-2xl font-semibold">سبد خرید</h2>
        <p className="font-stretchPro text-paragraph">Shopping Cart</p>
      </div>
      <div className="flex items-start gap-4">
        <main className="bg-foreground flex w-full flex-col gap-3.75 overflow-hidden rounded-3xl rounded-tr-lg lg:w-2/3 xl:w-full">
          <CartItem />
          <CartItem />
          <CartItem />
        </main>
        <aside className="bg-foreground s hidden w-1/3 rounded-3xl rounded-tl-lg p-5 lg:block xl:w-95 xl:shrink-0">
          <div>
            <p className="mb-1.25 border-b border-[#FFFFFF1A] pb-2.5">جمع کل سبد خرید</p>
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.25">
              <p>قیمت کالا ها (۳)</p>
              <p className="text-primary grow text-end">
                <span className="me-1 text-start text-xl text-white">۳۶۰,۰۰۰</span>
                تومان
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.25">
              <p>جمع سبد خرید</p>
              <p className="text-primary grow text-end">
                <span className="me-1 text-start text-xl text-white">۳۶۰,۰۰۰</span>
                تومان
              </p>
            </div>
            <div className="text-primary flex flex-wrap items-center justify-between gap-2 px-3 py-2.25">
              <p>سود شما از خرید</p>
              <p className="grow text-end">
                <span className="me-1 text-start text-xl">(۵٪) ۳۶۰,۰۰۰</span>
                تومان
              </p>
            </div>
            <div className="pt-4 pb-2">
              <PrimaryButton className="bg-primary text-blackColor w-full hover:bg-none">
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
            href="/"
            className="bg-primary text-blackColor max-h-15 py-1.5! text-center hover:bg-none min-[360px]:py-2.5! sm:w-1/2"
          >
            تایید و تکمیل سفارش
          </PrimaryButton>
          <div className="flex grow flex-col items-end gap-1">
            <span className="text-paragraph text-xs min-[360px]:text-base">جمع کل سبد خرید</span>
            <p className="text-sm min-[360px]:text-lg">
              <span className="text-primary me-1">۹,۳۲۱,۴۵۶</span>
              تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
