import Skeleton from '@modules/Skeleton/Skeleton';

export default function SidebarSkeleton() {
  return (
    <aside className="rounded-box-ltr relative mt-6 hidden min-h-full overflow-visible border border-white/15 p-4 mix-blend-lighten min-[880px]:block min-[880px]:w-[30%] xl:w-[25%]">
      <div className="bg-blackColor absolute -top-9 left-1/2 w-3/4 -translate-x-1/2 text-center">
        <p className="font-morabba text-[26px] font-semibold lg:mb-1 lg:text-3xl">فیلتر ها</p>
        <p className="font-stretchPro text-paragraph text-sm font-semibold">Filters</p>
      </div>
      <div className="space-y-3 pt-10">
        {Array(5)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-box rounded-box-ltr flex items-center justify-between px-3.75 py-3"
            >
              <div className="flex w-full items-center gap-4">
                <div>
                  <Skeleton className="size-8 rounded-lg rounded-tr-sm" />
                </div>
                <div className="w-full space-y-2">
                  <Skeleton className="h-2.5 w-3/4 rounded-full" />
                  <Skeleton className="h-2 w-1/2 rounded-full" />
                </div>
              </div>
              <Skeleton className="size-6 shrink-0 rounded-full" />
            </div>
          ))}
      </div>
    </aside>
  );
}
