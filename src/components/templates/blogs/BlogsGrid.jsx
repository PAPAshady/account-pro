'use client';
import { useQuery } from '@tanstack/react-query';

import BlogCard from '@modules/Cards/BlogCard/BlogCard';
import Empty from '@modules/Empty/Empty';
import { getBlogsQueryOptions } from '@/queries/blogs';

export default function BlogsGrid() {
  const { data: blogs, isPending } = useQuery(getBlogsQueryOptions());

  return (
    <main className="min-[880px]:w-[70%] xl:w-[75%]">
      {isPending ? (
        <p>در حال دریافت مقالات...</p>
      ) : !blogs?.length ? (
        <Empty />
      ) : (
        <div className="grid grid-cols-1 gap-6 min-[580px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1100px]:gap-4">
          {blogs?.map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      )}
    </main>
  );
}
