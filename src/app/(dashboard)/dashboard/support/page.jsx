'use client';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { FaCircleNotch } from 'react-icons/fa';

import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';
import TicketsFilters from '@templates/Dashboard/Support/TicketsFilters';
import { getTickesQueryOptions } from '@/queries/tickets';
import { TICKET_STATUS } from '@/constants';

export default function Page() {
  const [status, setStatus] = useState('all');
  const { data: tickets, isPending } = useQuery(getTickesQueryOptions(status));
  return (
    <div>
      <div className="mb-4">
        <TicketsFilters status={status} setStatus={setStatus} itemsCount={tickets?.length} />
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
            {tickets?.map((ticket) => (
              <tr key={ticket._id} className="bg-foreground border-t border-[rgba(0,0,0,.1)]">
                <td className="px-2 py-2.5 align-middle font-normal sm:px-3">{ticket.title}</td>
                <td className="px-2 py-2.5 align-middle font-normal sm:px-3">
                  {ticket.status === TICKET_STATUS.PENDING
                    ? 'در انتظار پاسخ'
                    : ticket.status === TICKET_STATUS.CHECKING
                      ? 'در حال بررسی'
                      : 'بسته شده'}
                </td>
                <td className="px-2 py-2.5 align-middle font-normal sm:px-3">
                  {new Date(ticket.updatedAt).toLocaleDateString('fa')}
                </td>
                <td className="px-2 py-2.5 align-middle font-normal sm:px-3">
                  <PrimaryButton
                    isLink
                    href={`/dashboard/support/chat/${ticket.chatId}`}
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
      {(!tickets?.length || isPending) && (
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
