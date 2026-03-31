'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

const filters = [
  { title: 'دسته بندی ها' },
  { title: 'مدت زمان اشتراک' },
  { title: 'محدوده قیمت' },
  { title: 'نحوه فعال سازی' },
  { title: 'زبان ها' },
];

export default function FiltersSlider() {
  return (
    <div className="flex items-center gap-4 min-[880px]:hidden">
      <span className="text-nowrap">فیلتر ها :‌</span>
      <Swiper modules={[FreeMode]} slidesPerView="auto" freeMode>
        {filters.map((filter) => (
          <SwiperSlide key={filter.title} className="w-auto!">
            <button className="bg-foreground hover:bg-primary hover:text-box mx-1.5 rounded-2xl rounded-tr-lg px-3 py-1.5 text-[#b7b7b7] transition-colors duration-300">
              {filter.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
