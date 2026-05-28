import BlogCardSkeleton from '@modules/Cards/BlogCard/BlogCardSkeleton';

export default function BlogsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 min-[580px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1100px]:gap-4">
      {Array(3)
        .fill()
        .map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
    </div>
  );
}
