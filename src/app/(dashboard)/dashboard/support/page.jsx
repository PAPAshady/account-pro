import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';
import TableCategories from '@templates/Dashboard/Support/TableCategories';
import { getTickets } from '@/lib/tikcets';
import { TICKET_STATUS } from '@/constants';

export default async function page() {
  const { data: tickets } = await getTickets();

  return (
    <div>
      <div className="mb-4">
        <TableCategories />
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
            {tickets.map((ticket) => (
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
                  <PrimaryButton className="w-full" isHighLight>
                    مشاهده
                  </PrimaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!tickets?.length && (
        <div className="bg-foreground w-full py-10 text-center">در حال حاضر تیکتی ندارید.</div>
      )}
    </div>
  );
}

export const dynamic = 'force-dynamic';
