import Skeleton from '@modules/Skeleton/Skeleton';

export default function BlogCategoryCardSkeleton() {
  return (
    <div className="rounded-box-ltr flex items-center justify-between gap-4 bg-[#191919CC] py-7 px-5">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="size-7 shrink-0 rounded-md" />
        <div className="grow space-y-2">
          <Skeleton className="h-3 w-2/3 rounded-full" />
          <Skeleton className="h-2.25 w-1/2 rounded-full" />
        </div>
      </div>
      <Skeleton className="size-5 shrink-0 rounded-md" />
    </div>
  );
}
