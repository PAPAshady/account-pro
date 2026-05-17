import Skeleton from '@modules/Skeleton/Skeleton';

export default function CartDropDownItemSkeleton() {
  return (
    <div className="relative flex items-center gap-3 rounded-2xl rounded-tl-sm bg-[#191919CC] p-3.75">
      <div className="flex grow items-center gap-4">
        <Skeleton className="size-10 max-w-10 shrink-0! rounded-lg" />
        <div className="grow space-y-2">
          <Skeleton className="h-2.5 w-2/3 rounded-full" />
          <Skeleton className="h-2.5 w-1/2 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-8 w-18 rounded-md" />
    </div>
  );
}
