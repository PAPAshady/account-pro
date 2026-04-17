'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

const categoryButtons = [
  { title: 'همه', value: '۹' },
  { title: 'منتظر پاسخ', value: '۱' },
  { title: 'در حال بررسی', value: '۸' },
  { title: 'پایان یافته', value: '۰' },
];

export default function TableCategories() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Swiper modules={[FreeMode]} slidesPerView="auto" freeMode>
          {categoryButtons.map((button) => (
            <SwiperSlide key={button.title} className="w-auto!">
              <button className="group bg-foreground mx-1.5 flex cursor-pointer items-center gap-3.75 rounded-xl rounded-tl-lg p-1 ps-3.75 text-sm text-[#878787] transition-colors duration-300 hover:text-white">
                {button.title}
                <span className="font-morabba group-hover:bg-primary grid size-7 place-content-center rounded-lg rounded-tl-sm bg-[#ffffff1a] text-[#191919] transition-colors duration-300">
                  {button.value}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:shrink-0">
        <PrimaryButton className="bg-primary text-blackColor w-full hover:bg-none">
          ارتباط با پشتیبانی
        </PrimaryButton>
      </div>
    </div>
  );
}
