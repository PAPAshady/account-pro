import Skeleton from '@modules/Skeleton/Skeleton';

export default function ProductCardSkeleton({ hasLikeButton = false }) {
  return (
    <div className="group relative">
      <div className="relative flex h-20 items-center gap-2 overflow-hidden">
        <Skeleton className="h-full shrink-0 grow overflow-hidden rounded-lg rounded-tl-3xl" />
        <Skeleton className="h-full shrink-0 grow overflow-hidden rounded-lg rounded-tr-3xl" />
      </div>
      <div className="relative z-1 -mt-13 flex justify-center">
        <div className="size-18.75 lg:size-20" />
      </div>
      <div className="-mt-3.5 rounded-t-lg rounded-b-3xl bg-[#191919CC] p-3 pt-4 lg:pt-6">
        <div className="mb-3 flex items-center justify-between gap-2 lg:mb-4.5">
          <Skeleton className="h-4 w-3/5 rounded-full" />
          <div className="w-2/5 space-y-2">
            <Skeleton className="ms-auto h-2.5 w-5/6 rounded-full" />
            <Skeleton className="ms-auto h-2.5 w-2/3 rounded-full" />
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Skeleton className="rounded-box-ltr h-8 w-full px-3.75 text-[15px] font-semibold"></Skeleton>
          {hasLikeButton && <Skeleton className="size-8 shrink-0 rounded-lg rounded-tr-sm" />}
        </div>
      </div>
    </div>
  );
}
