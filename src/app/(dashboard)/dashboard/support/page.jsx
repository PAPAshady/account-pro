'use client';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { FaCircleNotch } from 'react-icons/fa';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import ChatsFilters from '@templates/Dashboard/Support/ChatsFilters';
import { getChatsQueryOptions } from '@/queries/chats';
import { CHAT_STATUS } from '@/constants';

export default function Page() {
  const [status, setStatus] = useState('all');
  const { data: chats, isPending } = useQuery(getChatsQueryOptions(status));
  return (
    <div>
      <div className="mb-4">
        <ChatsFilters status={status} setStatus={setStatus} itemsCount={chats?.length} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-157.5 text-right">
          <thead>
            <tr className="bg-primary font-light! text-[#191919]">
              <th className="px-2 py-2.5 font-normal sm:px-3">موضوع</th>
              <th className="px-2 py-2.5 font-normal sm:px-3">وضعیت</th>
              <th className="px-2 py-2.5 font-normal sm:px-3">آخرین تغییر</th>
              <th className="px-2 py-2.5 font-normal sm:px-3">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {chats?.map((chat) => (
              <tr key={chat._id} className="bg-foreground border-t border-[rgba(0,0,0,.1)]">
                <td className="max-w-40 px-2 py-2.5 align-middle font-normal sm:px-3">
                  {chat.title}
                </td>
                <td className="px-2 py-2.5 align-middle font-normal sm:px-3">
                  {chat.status === CHAT_STATUS.PENDING
                    ? 'در انتظار پاسخ'
                    : chat.status === CHAT_STATUS.CHECKING
                      ? 'در حال بررسی'
                      : 'بسته شده'}
                </td>
                <td className="px-2 py-2.5 align-middle font-normal sm:px-3">
                  {new Date(chat.updatedAt).toLocaleDateString('fa')}
                </td>
                <td className="px-2 py-2.5 align-middle font-normal sm:px-3">
                  <PrimaryButton
                    isLink
                    href={`/dashboard/support/chat/${chat.chatId}`}
                    className="w-full"
                    isHighLight
                  >
                    مشاهده
                  </PrimaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(!chats?.length || isPending) && (
        <div className="bg-foreground grid w-full place-content-center py-10 text-center">
          {isPending ? (
            <FaCircleNotch className="text-primary animate-spin text-3xl sm:my-4" />
          ) : (
            'تیکتی پیدا نشد.'
          )}
        </div>
      )}
    </div>
  );
}

export const dynamic = 'force-dynamic';
