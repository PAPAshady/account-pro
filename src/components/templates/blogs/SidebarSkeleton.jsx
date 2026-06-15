import BlogCategoryCardSkeleton from '@modules/Cards/BlogCategoryCard/BlogCategoryCardSkeleton';

export default function SidebarSkeleton() {
  return (
    <aside className="grid min-h-full grid-cols-1 gap-4 min-[880px]:block min-[880px]:w-[30%] min-[880px]:space-y-4 sm:grid-cols-2 xl:w-[25%]">
      {Array(4)
        .fill()
        .map((_, index) => (
          <BlogCategoryCardSkeleton key={index} />
        ))}
    </aside>
  );
}
