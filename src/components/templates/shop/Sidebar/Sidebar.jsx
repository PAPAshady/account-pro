'use client';
import { useSearchParams } from 'next/navigation';

import { FaVectorSquare } from 'react-icons/fa';
import 'react-range-slider-input/dist/style.css';

import FilterAccordion from '@modules/FilterAccordion/FilterAccordion';
import CheckBox from '@modules/CheckBox/CheckBox';
import PriceRangeSlider from '@modules/PriceRangeSlider/PriceRangeSlider';

export default function Sidebar({ categories, priceRange, onChecked }) {
  const searchParams = useSearchParams();
  const categoryParams = searchParams.getAll('cat');

  return (
    <aside className="rounded-box-ltr border-primary/50 relative mt-6 hidden min-h-full overflow-visible border p-4 mix-blend-lighten min-[880px]:block min-[880px]:w-[30%] xl:w-[25%]">
      <div className="bg-blackColor absolute -top-9 left-1/2 w-3/4 -translate-x-1/2 text-center">
        <p className="font-morabba text-[26px] font-semibold lg:mb-1 lg:text-3xl">فیلتر ها</p>
        <p className="font-stretchPro text-paragraph text-sm font-semibold">Filters</p>
      </div>
      <div className="space-y-1 pt-10">
        <FilterAccordion
          title="دسته بندی ها"
          subtitle="Categories"
          icon={<FaVectorSquare />}
          numberOfActiveFilters={categoryParams.length}
        >
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category._id}>
                <label className="bg-foreground hover:border-primary flex items-center gap-2.5 rounded-2xl rounded-tr-lg border border-[#fff0] px-3 py-2.5 transition-all duration-300">
                  <CheckBox
                    checked={categoryParams.includes(category.slug)}
                    onChange={() => onChecked('cat', category.slug)}
                  />
                  <p>{category.title}</p>
                </label>
              </li>
            ))}
          </ul>
        </FilterAccordion>

        <PriceRangeSlider priceRange={priceRange} />
      </div>
    </aside>
  );
}
