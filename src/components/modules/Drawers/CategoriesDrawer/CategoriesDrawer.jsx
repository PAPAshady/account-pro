import { useSearchParams } from 'next/navigation';

import CheckBox from '@modules/CheckBox/CheckBox';
import FiltersDrawer from '@modules/Drawers/FiltersDrawer/FiltersDrawer';

export default function CategoriesDrawer({ categories, onChecked }) {
  const searchParams = useSearchParams();
  const categoryParams = searchParams.getAll('cat');

  return (
    <FiltersDrawer title="دسته بندی ها" filterParamName="cat">
      {categories.map((category) => (
        <label className="flex items-center justify-start gap-4" key={category._id}>
          <CheckBox
            checked={categoryParams.includes(category.slug)}
            onChange={() => onChecked('cat', category.slug)}
          />
          <div className="border-foreground grow border-b py-3.5">
            <p>{category.title}</p>
          </div>
        </label>
      ))}
    </FiltersDrawer>
  );
}
