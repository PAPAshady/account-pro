'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import Link from 'next/link';

import { FaVectorSquare } from 'react-icons/fa';

import FilterAccordion from '@modules/FilterAccordion/FilterAccordion';
import CheckBox from '@modules/CheckBox/CheckBox';

export default function FiltersSection({ categories }) {
  const params = useSearchParams();
  const [categoriesList, setCategoriesList] = useState(() => params.getAll('cat'));

  const onCategoriesListChange = (value) => {
    if (categoriesList.includes(value)) {
      const newCategoriesList = [...categoriesList].filter((category) => category !== value);
      setCategoriesList(newCategoriesList);
    } else {
      setCategoriesList((prev) => [...prev, value]);
    }
  };

  return (
    <div className="space-y-1 pt-10">
      <FilterAccordion title="دسته بندی ها" subtitle="Categories" icon={<FaVectorSquare />}>
        <ul className="space-y-2">
          {categories.map((categoryItem) => (
            <li key={categoryItem._id}>
              <Link href={`/shop?cat=${categoryItem.slug}`}>
                <label className="bg-foreground hover:border-primary flex items-center gap-2.5 rounded-2xl rounded-tr-lg border border-[#fff0] px-3 py-2.5 transition-all duration-300">
                  <CheckBox
                    checked={categoriesList.includes(categoryItem.slug)}
                    onChange={() => onCategoriesListChange(categoryItem.slug)}
                  />
                  <p>{categoryItem.title}</p>
                </label>
              </Link>
            </li>
          ))}
        </ul>
      </FilterAccordion>
    </div>
  );
}
