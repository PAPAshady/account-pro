import Skeleton from '@modules/Skeleton/Skeleton';

export default function BlogCardSkeleton() {
  return (
    <div>
      <div className="relative">
        <div className="bg-box absolute bottom-5.5 h-18.75 w-full overflow-hidden rounded-t-2xl rounded-b-lg"></div>
        <div className="rounded-box-ltr relative z-1 mx-auto block w-[90%] overflow-hidden">
          <Skeleton className="h-32.5 w-full" />
        </div>
      </div>
      <div className="bg-box -mt-4 rounded-t-lg rounded-b-2xl p-3.75 pt-7.5">
        <Skeleton className="h-3.5 w-1/2 rounded-full" />
        <div className="my-3.25 space-y-1.5">
          <Skeleton className="h-2.5 rounded-full" />
          <Skeleton className="h-2.5 w-1/2 rounded-full" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="size-5 rounded-lg rounded-tr-sm" />
            <Skeleton className="h-2 w-18 rounded-full" />
          </div>
          <Skeleton className="rounded-box-rtl h-8 w-25" />
        </div>
      </div>
    </div>
  );
}
