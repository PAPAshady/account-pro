import Image from 'next/image';

import Input from '@modules/Input/Input';

export default function page() {
  return (
    <div>
      <div className="mb-6 px-4">
        <h3 className="font-morabba text-xl font-semibold lg:text-[26px]">اشتراک ها و لایسنس ها</h3>
      </div>
      <div className="space-y-6">
        <License />
        <License />
      </div>
    </div>
  );
}

function License() {
  return (
    <div className="bg-foreground flex flex-col gap-6 p-5 sm:flex-row-reverse">
      <div className="sm:w-[75%]">
        <div className="mb-4 justify-between font-semibold sm:flex">
          <p className="mb-5 text-lg">اکانت پرمیوم یوتیوب یک ماهه</p>
          <p className="text-primary ms-2 sm:text-lg">۲۴ روز باقی مانده</p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 min-[380px]:gap-2 min-[480px]:gap-4">
          <Input label="نام کاربر" value="Nima Zamani" readOnly className="w-full" />
          <Input
            label="ایمیل حساب کاربری"
            value="zamani.nima18@gmail.com"
            type="email"
            readOnly
            className="w-full"
          />
          <Input label="مدت زمان" value="۱ ماهه" readOnly className="w-full" />
          <Input label="نوع حساب کاربری" value="اکانت جدید" readOnly className="w-full" />
          <Input label="نوع پلن" value="Youtube Music Premium" readOnly className="w-full" />
          <Input label="منطقه/کشور" value="انگلیس" readOnly className="w-full" />
          <Input label="تاریخ خرید" value="۱۴۰۵.۰۱.۲۲" readOnly className="w-full" />
          <Input label="تاریخ انقضا" value="۱۴۰۵.۰۲.۲۱" readOnly className="w-full" />
        </div>
      </div>
      <div className="sm:w-[25%]">
        <div className="relative">
          <div className="flex h-13.75 items-center gap-1.5 overflow-hidden">
            <div className="bg-primary h-full shrink-0 grow overflow-hidden rounded-lg rounded-tl-3xl transition-all duration-300"></div>
            <div className="bg-primary h-full shrink-0 grow overflow-hidden rounded-lg rounded-tr-3xl transition-all duration-300"></div>
          </div>
          <div className="relative z-1 -mt-9 flex justify-center">
            <Image
              alt="Spotify"
              src="/images/services/spotify.png"
              width={300}
              height={300}
              className="size-18 transition-all duration-300"
            />
          </div>
          <div className="-mt-7 h-16 rounded-lg bg-[#D9D9D908]"></div>
        </div>
      </div>
    </div>
  );
}
