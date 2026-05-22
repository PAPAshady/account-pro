import Image from 'next/image';

import Input from '@modules/Input/Input';
import { getUserProducts } from '@/lib/userProducts';

export default async function page() {
  const products = await getUserProducts();
  return (
    <div>
      <div className="mb-6 px-4">
        <h3 className="font-morabba text-xl font-semibold lg:text-[26px]">اشتراک ها و لایسنس ها</h3>
      </div>
      <div className="space-y-6">
        {products.map((product) => (
          <License key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

function License({
  title,
  userName,
  email,
  duration,
  accountType,
  createdAt,
  expiresAt,
  imageUrl,
}) {
  const buyDate = new Date(createdAt);
  const expireDate = new Date(expiresAt);
  const remainingDays = Math.max(
    0,
    Math.ceil((expireDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  );
  return (
    <div className="bg-foreground flex flex-col gap-6 p-5 sm:flex-row-reverse">
      <div className="sm:w-[75%]">
        <div className="mb-4 justify-between font-semibold sm:flex">
          <p className="mb-5 text-lg">{title}</p>
          <p className="text-primary ms-2 sm:text-lg">{remainingDays} روز باقی مانده</p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 min-[380px]:gap-2 min-[480px]:gap-4">
          <Input label="نام کاربر" value={userName} readOnly className="w-full" />
          <Input label="ایمیل حساب کاربری" value={email} type="email" readOnly className="w-full" />
          <Input label="مدت زمان" value={`${duration / 30} ماهه`} readOnly className="w-full" />
          <Input
            label="نوع حساب کاربری"
            value={accountType === 'new' ? 'جدید' : 'موجود'}
            readOnly
            className="w-full"
          />
          <Input label="نوع پلن" value={title.split('-')[1]} readOnly className="w-full" />
          <Input
            label="تاریخ خرید"
            value={buyDate.toLocaleDateString('fa')}
            readOnly
            className="w-full"
          />
          <Input
            label="تاریخ انقضا"
            value={expireDate.toLocaleDateString('fa')}
            readOnly
            className="w-full"
          />
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
              src={imageUrl}
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
