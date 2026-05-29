import BlogCardSkeleton from '@modules/Cards/BlogCard/BlogCardSkeleton';

export default function SidebarSkeleton() {
  return (
    <aside className="space-y-8 lg:w-[30%] xl:w-[25%]">
      <h4 className="font-morabba text-xl font-bold lg:text-2xl">مقاله های مرتبط</h4>
      <div className="grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 lg:grid-cols-1">
        {Array(3)
          .fill()
          .map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
      </div>
    </aside>
  );
}
