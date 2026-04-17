import SearchBox from '@modules/SearchBox/SearchBox';
import ServiceCard from '@modules/Cards/ServiceCard/ServiceCard';
import FiltersSlider from '@templates/shop/FiltersSlider/FiltersSlider';
import FilterAccordion from '@modules/FilterAccordion/FilterAccordion';
import CheckboxFilterItem from '@modules/CheckboxFilterItem/CheckboxFilterItem';
import { services, filters } from '@/data';

export default function Shop() {
  return (
    <div className="container">
      <div className="items-start gap-4 min-[880px]:flex lg:gap-8">
        <aside className="rounded-box-ltr border-primary/50 relative mt-6 hidden min-h-full overflow-visible border p-4 mix-blend-lighten min-[880px]:block min-[880px]:w-[30%] xl:w-[25%]">
          <div className="bg-blackColor absolute -top-9 left-1/2 w-3/4 -translate-x-1/2 text-center">
            <p className="font-morabba text-[26px] font-semibold lg:mb-1 lg:text-3xl">فیلتر ها</p>
            <p className="font-stretchPro text-paragraph text-sm font-semibold">Filters</p>
          </div>
          <div className="space-y-1 pt-10">
            {filters.map((filter) => (
              <FilterAccordion
                key={filter.id}
                title={filter.title}
                subtitle={filter.subtitle}
                icon={filter.icon}
              >
                {filter.type === 'checkbox' && <CheckboxFilterItem options={filter.options} />}
                {filter.type === 'slider' && null}
              </FilterAccordion>
            ))}
          </div>
        </aside>

        <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
          <SearchBox />
          <FiltersSlider />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'فروشگاه - اکانت پرو',
};
