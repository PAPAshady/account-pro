'use client';
import { useSearchParams } from 'next/navigation';

import { FaVectorSquare } from 'react-icons/fa';

import FilterAccordion from '@modules/FilterAccordion/FilterAccordion';
import CheckBox from '@modules/CheckBox/CheckBox';
import useCheckBoxFilterHandler from '@/hooks/useCheckBoxFilterHandler';

export default function CategoriesFilterAccordion({ categories }) {
  const searchParams = useSearchParams();
  const categoryParams = searchParams.getAll('cat');
  const onChecked = useCheckBoxFilterHandler();

  return (
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
  );
}
