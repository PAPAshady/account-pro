import { ticketsStatus } from '@/data';

export default function TicketsStatus() {
  return (
    <div className="relative">
      <div
        className="absolute top-3 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent lg:top-5"
        style={{
          background:
            'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
        }}
      ></div>
      <div className="px-4">
        <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">وضعیت تیکت ها</h3>
      </div>
      <div className="space-y-4 px-3 pt-3 md:px-4 lg:pt-6">
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-4">
          {ticketsStatus.map((status) => (
            <TicketCard key={status.id} {...status} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TicketCard({ icon, title, subTitle, value }) {
  return (
    <div className="rounded-3xl rounded-tr-lg bg-[#111] p-3.75">
      <div className="mb-2 flex">
        <div className="bg-primary me-2.5 grid size-7 place-content-center rounded-lg rounded-tr-sm text-[#191919]">
          {icon}
        </div>
        <div>
          <p className="mb-1">{title}</p>
          <span className="text-paragraph">{subTitle}</span>
        </div>
      </div>
      <p className="font-morabba! text-primary text-end text-3xl font-bold">{value}</p>
    </div>
  );
}
