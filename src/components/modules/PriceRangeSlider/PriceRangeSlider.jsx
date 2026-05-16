'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import ReactRangeSliderInput from 'react-range-slider-input';
import './PriceRangeSlider.css';

export default function PriceRangeSlider({ priceRange }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [values, setValues] = useState([priceRange.minPrice, priceRange.maxPrice]);
  const [limit] = useState(values);

  // sync state with url
  useEffect(() => {
    let minPrice = +searchParams.get('minPrice') || limit[0];
    let maxPrice = +searchParams.get('maxPrice') || limit[1];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues([minPrice, maxPrice]);
  }, [searchParams, limit]);

  const onDragEnd = () => {
    const params = new URLSearchParams(searchParams);

    if (values[0] === limit[0] && values[1] === limit[1]) {
      params.delete('minPrice');
      params.delete('maxPrice');
    } else {
      params.set('minPrice', values[0]);
      params.set('maxPrice', values[1]);
    }

    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="space-y-3.75">
      <div className="text-primary flex items-center justify-between gap-2">
        <span className="min-[880px]:text-sm">از</span>
        <input
          type="text"
          className="focus:border-primary w-full rounded-2xl rounded-tr-lg border border-transparent bg-[#191919] px-4 py-2.25 text-center text-white transition-colors duration-200 outline-none min-[880px]:text-sm lg:text-base"
          value={values?.[0]?.toLocaleString() || limit[0]}
          readOnly
        />
        <span className="min-[880px]:text-sm">تومان</span>
      </div>
      <div className="text-primary flex items-center justify-between gap-2">
        <span className="min-[880px]:text-sm">تا</span>
        <input
          type="text"
          className="focus:border-primary w-full rounded-2xl rounded-tr-lg border border-transparent bg-[#191919] px-4 py-2.25 text-center text-white transition-colors duration-200 outline-none min-[880px]:text-sm lg:text-base"
          value={values?.[1]?.toLocaleString() || limit[1]}
          readOnly
        />
        <span className="min-[880px]:text-sm">تومان</span>
      </div>
      <ReactRangeSliderInput
        id="price-slider"
        step={10}
        min={limit[0]}
        max={limit[1]}
        value={values}
        onInput={setValues}
        onThumbDragEnd={onDragEnd}
        onRangeDragEnd={onDragEnd}
      />
      <div className="text[#0F8669] text-primary flex items-center justify-between gap-2">
        <span
          suppressHydrationWarning
          className="bg-primary/10 rounded-lg rounded-tr-sm px-2 pt-1.5 pb-1"
        >
          {values?.[1]?.toLocaleString() || limit[1]}
        </span>
        <span
          suppressHydrationWarning
          className="bg-primary/10 rounded-lg rounded-tr-sm px-2 pt-1.5 pb-1"
        >
          {values?.[0]?.toLocaleString() || limit[0]}
        </span>
      </div>
    </div>
  );
}
