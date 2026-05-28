import Skeleton from '@modules/Skeleton/Skeleton';

export default function FiltersSliderSkeleton() {
  return (
    <div className="flex items-center gap-2 min-[880px]:hidden sm:gap-4">
      <div className="bg-box relative flex items-center gap-2 rounded-2xl rounded-tr-lg px-3 py-1.5">
        <Skeleton className="h-3 w-15 rounded-full" />
        <Skeleton className="size-5 rounded-full" />
      </div>
      <div className="bg-box relative flex items-center gap-2 rounded-2xl rounded-tr-lg px-3 py-1.5">
        <Skeleton className="h-3 w-15 rounded-full" />
        <Skeleton className="size-5 rounded-full" />
      </div>
      <div className="bg-box relative hidden items-center gap-2 rounded-2xl rounded-tr-lg px-3 py-1.5 min-[440px]:flex">
        <Skeleton className="h-3 w-15 rounded-full" />
        <Skeleton className="size-5 rounded-full" />
      </div>
      <div className="bg-box relative hidden items-center gap-2 rounded-2xl rounded-tr-lg px-3 py-1.5 sm:flex">
        <Skeleton className="h-3 w-15 rounded-full" />
        <Skeleton className="size-5 rounded-full" />
      </div>
    </div>
  );
}
