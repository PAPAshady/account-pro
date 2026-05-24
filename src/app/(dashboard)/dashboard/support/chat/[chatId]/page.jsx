'use client';
import { useRouter } from 'next/navigation';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import TicketMessage from '@modules/TicketMessage/TicketMessage';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="bg-foreground rounded-lg rounded-tr-sm p-2">وضعیت‌ :‌ منتظر پاسخ</p>
        <PrimaryButton onClick={router.back} dir="rtl">
          بازگشت به صفحه قبل
        </PrimaryButton>
      </div>
      <div className="space-y-6 pt-10">
        <div className="flex flex-col gap-4">
          <TicketMessage />
        </div>
        <div className="bg-foreground flex flex-col gap-3.75 rounded-3xl rounded-tl-sm p-5 lg:gap-5">
          <textarea
            required
            className="bg-foreground h-40 rounded-2xl rounded-tr-lg px-3.75 py-2.25 outline-none lg:h-30"
            placeholder="پاسخ شما"
          />
          <div>
            <PrimaryButton isHighLight className="ms-auto w-30">
              ارسال پیام
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
