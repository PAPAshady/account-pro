import React from 'react';

export default function DashboardLicenceCard({ title, createdAt, expiresAt, price }) {
  const buyDate = new Date(createdAt);
  const expireDate = new Date(expiresAt);
  const remainingDays = Math.max(
    0,
    Math.ceil((expireDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-3xl rounded-tr-lg bg-[#111] px-3 py-4 md:p-4">
        <div className="mb-3 space-y-2">
          <p className="font-morabba text-lg font-semibold">{title}</p>
          <p className="text-primary text-lg font-semibold">{remainingDays} روز باقی مانده</p>
        </div>
        <ul className="flex flex-wrap justify-between gap-4">
          <li className="flex items-center gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2.5">
              <span className="bg-primary block size-2 rounded-lg rounded-tr-sm"></span>
              <span>تاریخ خرید : </span>
            </div>
            <span>{buyDate.toLocaleDateString('fa')}</span>
          </li>
          <li className="flex items-center gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2.5">
              <span className="bg-primary block size-2 rounded-lg rounded-tr-sm"></span>
              <span>تاریخ پایان : </span>
            </div>
            <span>{expireDate.toLocaleDateString('fa')}</span>
          </li>
          <li className="flex items-center gap-2 text-sm md:text-base">
            <div className="flex items-center gap-2.5">
              <span className="bg-primary block size-2 rounded-lg rounded-tr-sm"></span>
              <span>هزینه : </span>
            </div>
            <span>{price.toLocaleString()} تومان</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
