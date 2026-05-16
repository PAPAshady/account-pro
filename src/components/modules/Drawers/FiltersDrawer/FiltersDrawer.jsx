import { useRouter, useSearchParams } from 'next/navigation';

import { FaXmark } from 'react-icons/fa6';
import { Drawer } from 'vaul';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { getFilteredProductsQueryOptions } from '@/queries/products';

export default function FiltersDrawer({ title, filterParamName, children }) {
  const searchParams = useSearchParams();
  const { data: products, isPending } = useQuery(getFilteredProductsQueryOptions({ searchParams }));
  const router = useRouter();
  const filterParams = searchParams.getAll(filterParamName);
  const hasFilters = !!filterParams.length;

  const removeCategoryFilters = () => {
    const params = new URLSearchParams(searchParams);
    // since price filters are set together, we have to remove them together.
    const isPriceFilter = filterParamName.includes('Price');
    if (isPriceFilter) {
      params.delete('minPrice');
      params.delete('maxPrice');
    } else params.delete(filterParamName);
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <Drawer.Root closeThreshold={0.35}>
      <Drawer.Trigger asChild>
        <button
          className={clsx(
            'relative mx-1.5 flex items-center gap-2 rounded-2xl rounded-tr-lg px-3 py-1.5 text-[#b7b7b7] transition-colors duration-300',
            hasFilters
              ? 'bg-primary/10 text-primary'
              : 'bg-foreground hover:text-box hover:bg-primary'
          )}
        >
          <span>{title}</span>
          {hasFilters && (
            <span className="bg-primary grid size-5 place-content-center rounded-full text-sm text-[#191919]">
              {filterParams.length}
            </span>
          )}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed right-0 bottom-0 left-0 z-10 rounded-t-2xl bg-[#252525] p-4">
          <Drawer.Handle />
          <div className="flex flex-col">
            <div className="border-foreground border-b p-4 pb-2">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <Drawer.Title className="text-paragraph">{title}</Drawer.Title>
                <Drawer.Close asChild>
                  <button className="cursor-pointer text-lg">
                    <FaXmark />
                  </button>
                </Drawer.Close>
              </div>
            </div>
            <div className="mt-4 flex h-[calc(100dvh/2)] grow flex-col overflow-y-auto">
              {children}
            </div>
          </div>
          <div className="border-foreground border-t bg-[#252525] px-4 pt-4">
            <div className="flex items-center justify-between gap-4">
              <Drawer.Close asChild>
                <PrimaryButton className="bg-primary max-w-125 grow text-[#191919] hover:bg-none">
                  {isPending ? '...' : `مشاهده ${products?.length} محصول`}
                </PrimaryButton>
              </Drawer.Close>
              <Drawer.Close asChild>
                <button
                  disabled={!filterParams.length}
                  className="disabled:text-primary/30 text-primary px-4 py-2"
                  onClick={removeCategoryFilters}
                >
                  حذف فیلتر
                </button>
              </Drawer.Close>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
