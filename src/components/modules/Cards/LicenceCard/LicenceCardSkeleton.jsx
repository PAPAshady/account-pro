import Skeleton from '@modules/Skeleton/Skeleton';

export default function LicenceCardSkeleton() {
  return (
    <div className="flex flex-col gap-6 bg-[#191919CC] p-5 sm:flex-row-reverse">
      <div className="sm:w-[75%]">
        <div className="mb-8 justify-between sm:flex">
          <Skeleton className="mb-4 h-3.5 w-2/3 rounded-full sm:max-w-55 md:max-w-65" />
          <Skeleton className="h-3 w-1/2 rounded-full sm:max-w-25" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {Array(7)
            .fill()
            .map((_, index) => (
              <div key={index}>
                <Skeleton className="mb-2 h-2.5 w-2/3 rounded-full" />
                <Skeleton className="rounded-box-ltr h-8 px-3.5" />
              </div>
            ))}
        </div>
      </div>
      <div className="sm:w-[25%]">
        <div className="relative">
          <div className="flex h-13.75 items-center gap-1.5 overflow-hidden">
            <Skeleton className="h-full shrink-0 grow overflow-hidden rounded-lg rounded-tl-3xl" />
            <Skeleton className="h-full shrink-0 grow overflow-hidden rounded-lg rounded-tr-3xl" />
          </div>
          <div className="relative z-1 -mt-9 flex justify-center">
            <div className="size-18" />
          </div>
          <Skeleton className="-mt-7 h-16 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
