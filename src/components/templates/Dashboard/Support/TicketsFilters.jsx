'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import clsx from 'clsx';
import 'swiper/css';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { TICKET_STATUS } from '@/constants';

const categoryButtons = [
  { title: 'همه', status: 'all' },
  { title: 'منتظر پاسخ', status: TICKET_STATUS.PENDING },
  { title: 'در حال بررسی', status: TICKET_STATUS.CHECKING },
  { title: 'پایان یافته', status: TICKET_STATUS.DONE },
];

export default function TicketsFilters({ status, setStatus, itemsCount }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Swiper modules={[FreeMode]} slidesPerView="auto" freeMode>
          {categoryButtons.map((button) => (
            <SwiperSlide key={button.title} className="w-auto!">
              <button
                onClick={() => setStatus(button.status)}
                className={clsx(
                  'group bg-foreground mx-1.5 flex cursor-pointer items-center gap-3.75 rounded-xl rounded-tl-lg p-1 ps-3.75 text-sm transition-colors duration-300',
                  status === button.status ? 'text-white' : 'text-[#878787] hover:text-white'
                )}
              >
                {button.title}
                <span
                  className={clsx(
                    'font-yekanBakh grid size-7 place-content-center rounded-lg rounded-tl-sm text-lg font-semibold text-[#191919] transition-colors duration-300',
                    status === button.status
                      ? 'bg-primary'
                      : 'group-hover:bg-primary bg-[#ffffff1a]'
                  )}
                >
                  {status === button.status ? itemsCount : null}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:shrink-0">
        <PrimaryButton className="w-full" isHighLight isLink href="/dashboard/support/new-ticket">
          ثبت تیکت جدید
        </PrimaryButton>
      </div>
    </div>
  );
}
