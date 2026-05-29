import Skeleton from '@modules/Skeleton/Skeleton';

export default function MainSkeleton() {
  return (
    <main className="rounded-2xl rounded-tr-lg bg-[#191919CC] p-5 lg:w-[70%] xl:w-[75%]">
      <Skeleton className="h-4 w-4/5 rounded-full sm:w-2/3 md:h-4.5 md:w-1/2 xl:max-w-100" />
      <div className="bg-foreground my-8 flex flex-wrap justify-between gap-4 rounded-2xl rounded-tr-lg p-3.75">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="flex w-full items-center gap-2.5 min-[500px]:w-auto">
              <Skeleton className="size-8 shrink-0 rounded-lg rounded-tr-sm" />
              <Skeleton className="h-3 w-[80%] rounded-full min-[500px]:w-28 min-[1440px]:w-35" />
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="bg-foreground space-y-8 rounded-xl rounded-tr-lg p-5 lg:grow">
          <Skeleton className="h-3.5 w-3/4 rounded-full sm:w-2/3 md:w-1/2 lg:w-2/3" />
          <div className="space-y-3">
            {Array(8)
              .fill()
              .map((_, index) => (
                <Skeleton key={index} className="h-2.5 w-full rounded-full" />
              ))}
            <Skeleton className="h-2.5 w-2/3 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Skeleton className="mx-auto aspect-square size-full max-w-50 rounded-lg lg:size-40 lg:max-w-none lg:shrink-0 xl:size-60" />
          <Skeleton className="mx-auto h-4 w-2/3 rounded-full min-[480]:max-w-57.5 lg:mx-0 lg:w-full lg:max-w-none xl:mx-auto xl:w-3/4" />
        </div>
      </div>
    </main>
  );
}
