import Skeleton from '@modules/Skeleton/Skeleton';

export default function CommentSkeleton() {
  return (
    <div className="md:flex md:gap-4">
      <div className="mb-1.5 flex items-center justify-between gap-2 rounded-2xl rounded-tr-3xl bg-[#191919CC] p-3.75 min-[480px]:h-25 sm:h-27.5 md:mb-0 md:h-32.5 md:min-h-full md:w-1/4">
        <div className="grow space-y-2">
          <Skeleton className="h-4 w-2/3 max-w-45 rounded-full" />
          <Skeleton className="h-2.5 w-1/2 max-w-35 rounded-full" />
        </div>
        <Skeleton className="h-12 w-2.5 rounded-full" />
      </div>
      <div className="rounded-lg rounded-tr-sm bg-[#191919CC] p-3.75 md:w-3/4">
        <div className="mb-3 space-y-2 rounded-lg rounded-tr-sm bg-[#191919] p-3.75">
          <Skeleton className="h-2.5 w-full rounded-full"></Skeleton>
          <Skeleton className="h-2.5 w-full rounded-full"></Skeleton>
          <Skeleton className="h-2.5 w-1/2 rounded-full"></Skeleton>
        </div>
        <div className="flex justify-end">
          <Skeleton className="h-3 w-20 rounded-full"></Skeleton>
        </div>
      </div>
    </div>
  );
}
