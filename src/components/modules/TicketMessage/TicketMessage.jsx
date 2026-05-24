import React from 'react';

export default function TicketMessage({ person, description, createdAt }) {
  return (
    <div className="bg-foreground flex w-full flex-col gap-3.75 rounded-3xl rounded-tr-lg p-4 sm:w-[80%]">
      <div className="rounded-lg rounded-bl-3xl bg-[#191919] px-4 pt-3 pb-5">
        <span className="font-morabba text-primary sm:text-lg sm:font-semibold">شما :</span>
        <p className="pt-2 text-justify text-sm whitespace-break-spaces text-white sm:text-base">
          سلام. پلیر سایت خرابه لطفا پیگیری کنید.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">13:24 - 1405.03.03</span>
        <span className="bg-primary size-2 rounded-full"></span>
      </div>
    </div>
  );
}
