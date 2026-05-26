'use client';
import { useRouter, useParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import TicketMessage from '@modules/TicketMessage/TicketMessage';
import { getMessagesQueryOptions } from '@/queries/messages';
import { USER_ROLES } from '@/constants';

export default function Page() {
  const router = useRouter();
  const { chatId } = useParams();
  const { data: messages } = useQuery(getMessagesQueryOptions(chatId));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <PrimaryButton onClick={router.back} className="ms-auto" dir="rtl">
          بازگشت به صفحه قبل
        </PrimaryButton>
      </div>
      <div className="space-y-6 pt-10">
        <div className="flex flex-col gap-4">
          {messages?.map((message) => (
            <TicketMessage
              key={message._id}
              text={message.text}
              createdAt={message.createdAt}
              isUser={message.user.role === USER_ROLES.USER}
            />
          ))}
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
