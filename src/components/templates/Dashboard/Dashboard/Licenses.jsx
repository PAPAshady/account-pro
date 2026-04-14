import { licences } from '@/data';

export default function Licenses() {
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
        <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">
          وضعیت اشتراک و لایسنس ها
        </h3>
      </div>
      <div className="space-y-4 px-3 pt-3 md:px-4 lg:pt-6">
        {licences.map((license) => (
          <License key={license.id} {...license} />
        ))}
      </div>

      {/* Empty state ui */}
      {/* <div className="px-3 pt-3 text-center md:px-4 lg:pt-6">
        <p>در حال حاضر اشتراک فعالی ندارید.</p>
      </div> */}
    </div>
  );
}

function License({ title, remainingTime, buyTime, endTime, price }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-3xl rounded-tr-lg bg-[#111] px-3 py-4 md:p-4">
        <div className="mb-3 space-y-2">
          <p className="font-morabba text-lg font-semibold">{title}</p>
          <p className="text-primary text-lg font-semibold">{remainingTime} باقی مانده</p>
        </div>
        <ul className="flex flex-wrap justify-between gap-4">
          <li className="flex items-center gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2.5">
              <span className="bg-primary block size-2 rounded-lg rounded-tr-sm"></span>
              <span>تاریخ خرید : </span>
            </div>
            <span>{buyTime}</span>
          </li>
          <li className="flex items-center gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2.5">
              <span className="bg-primary block size-2 rounded-lg rounded-tr-sm"></span>
              <span>تاریخ پایان : </span>
            </div>
            <span>{endTime}</span>
          </li>
          <li className="flex items-center gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2.5">
              <span className="bg-primary block size-2 rounded-lg rounded-tr-sm"></span>
              <span>هزینه : </span>
            </div>
            <span>{price} تومان</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
