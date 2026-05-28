import Skeleton from '@modules/Skeleton/Skeleton';

export default function SearchBoxSkeleton() {
  return (
    <div className="bg-foreground rounded-box-rtl flex grow items-center gap-2 px-3.5">
      <div className="h-11.25 grow" />
      <Skeleton className="size-6 shrink-0 rounded-lg rounded-tr-sm" />
    </div>
  );
}
