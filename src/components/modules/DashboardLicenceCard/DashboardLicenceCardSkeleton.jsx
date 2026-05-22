import Skeleton from '@modules/Skeleton/Skeleton';

export default function DashboardLicenceCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 bg-[#191919CC]">
      <div className="rounded-3xl rounded-tr-lg bg-[#111] px-3 py-4 md:p-4">
        <div className="mb-5 space-y-2.5 min-[480px]:mb-7 min-[480px]:space-y-4">
          <Skeleton className="h-3.5 w-2/3 max-w-60 rounded-full min-[480px]:h-4 sm:max-w-80" />
          <Skeleton className="h-2.5 w-1/2 max-w-45 rounded-full min-[480px]:h-3" />
        </div>
        <ul className="flex flex-wrap gap-3 min-[480px]:justify-between">
          <li className="flex items-center gap-1">
            <Skeleton className="size-2.5 shrink-0 rounded-lg rounded-tr-sm min-[480px]:size-3" />
            <Skeleton className="h-2 w-22.5 rounded-full min-[480px]:h-2.5 sm:w-30" />
          </li>
          <li className="flex items-center gap-1">
            <Skeleton className="size-2.5 shrink-0 rounded-lg rounded-tr-sm min-[480px]:size-3" />
            <Skeleton className="h-2 w-22.5 rounded-full min-[480px]:h-2.5 sm:w-30" />
          </li>
          <li className="flex items-center gap-1">
            <Skeleton className="size-2.5 shrink-0 rounded-lg rounded-tr-sm min-[480px]:size-3" />
            <Skeleton className="h-2 w-22.5 rounded-full min-[480px]:h-2.5 sm:w-30" />
          </li>
        </ul>
      </div>
    </div>
  );
}
