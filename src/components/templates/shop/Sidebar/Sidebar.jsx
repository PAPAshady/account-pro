import { Suspense } from 'react';

import { FaWallet } from 'react-icons/fa';
import 'react-range-slider-input/dist/style.css';

import FilterAccordion from '@modules/FilterAccordion/FilterAccordion';
import PriceRangeSlider from '@modules/PriceRangeSlider/PriceRangeSlider';
import CategoriesFilterAccordion from '@modules/CategoriesFilterAccordion/CategoriesFilterAccordion';

export default function Sidebar({ categories, priceRange }) {
  return (
    <aside className="rounded-box-ltr border-primary/50 relative mt-6 hidden min-h-full overflow-visible border p-4 mix-blend-lighten min-[880px]:block min-[880px]:w-[30%] xl:w-[25%]">
      <div className="bg-blackColor absolute -top-9 left-1/2 w-3/4 -translate-x-1/2 text-center">
        <p className="font-morabba text-[26px] font-semibold lg:mb-1 lg:text-3xl">فیلتر ها</p>
        <p className="font-stretchPro text-paragraph text-sm font-semibold">Filters</p>
      </div>
      <div className="space-y-1 pt-10">
        <Suspense fallback="Loading categories filter...">
          <CategoriesFilterAccordion categories={categories} />
        </Suspense>
        <FilterAccordion
          title="محدوده قیمت پلن ها"
          subtitle="Plans price range"
          icon={<FaWallet />}
        >
          <Suspense fallback='Loading sidebar price range slider...'>
            <PriceRangeSlider priceRange={priceRange} />
          </Suspense>
        </FilterAccordion>
      </div>
    </aside>
  );
}
