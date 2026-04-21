import Input from '@modules/Input/Input';
import CheckoutItem from '@modules/CheckoutItem/CheckoutItem';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

export default function page() {
  return (
    <div className="container space-y-8">
      <div>
        <h2 className="font-morabba text-2xl font-semibold">تسویه حساب</h2>
        <p className="font-stretchPro text-paragraph">Checkout</p>
      </div>
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
            <CheckoutItem />
            <CheckoutItem />
          </div>
          <div className="mb-4 flex flex-wrap justify-between gap-2">
            <p>جمع قیمت : </p>
            <p className="grow text-end">
              <span className="text-primary me-1.5 text-xl sm:text-2xl">۶,۷۹۰,۰۰۰</span>
              تومان
            </p>
          </div>
          <PrimaryButton className="bg-primary text-blackColor w-full hover:bg-none">
            پرداخت
          </PrimaryButton>
        </aside>
      </form>
    </div>
  );
}
