'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

import CategoriesDrawer from '@modules/Drawers/CategoriesDrawer/CategoriesDrawer';
import FiltersDrawer from '@modules/Drawers/FiltersDrawer/FiltersDrawer';
import PriceRangeSlider from '@modules/PriceRangeSlider/PriceRangeSlider';

export default function FiltersSlider({ categories, priceRange }) {
  return (
    <div className="flex items-center gap-4 min-[880px]:hidden">
      <span className="text-nowrap">فیلتر ها :‌</span>
      <Swiper modules={[FreeMode]} slidesPerView="auto" className="mx-0!" freeMode>
        <SwiperSlide className="w-auto!">
          <CategoriesDrawer categories={categories} />
        </SwiperSlide>

        <SwiperSlide className="w-auto!">
          <FiltersDrawer title="محدوده قیمت پلن ها" filterParamName="minPrice">
            <PriceRangeSlider priceRange={priceRange} />
          </FiltersDrawer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
