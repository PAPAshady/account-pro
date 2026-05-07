import { BASE_URL } from '@/constants';
import FiltersSection from './FiltersSection';

export default async function Sidebar() {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    cache: 'force-cache',
  });
  const categories = await res.json();

  return (
    <aside className="rounded-box-ltr border-primary/50 relative mt-6 hidden min-h-full overflow-visible border p-4 mix-blend-lighten min-[880px]:block min-[880px]:w-[30%] xl:w-[25%]">
      <div className="bg-blackColor absolute -top-9 left-1/2 w-3/4 -translate-x-1/2 text-center">
        <p className="font-morabba text-[26px] font-semibold lg:mb-1 lg:text-3xl">فیلتر ها</p>
        <p className="font-stretchPro text-paragraph text-sm font-semibold">Filters</p>
      </div>
      <FiltersSection categories={categories} />
    </aside>
  );
}
