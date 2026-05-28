'use client';
import { useQuery } from '@tanstack/react-query';
import { FaSearchMinus } from 'react-icons/fa';

import BlogCard from '@modules/Cards/BlogCard/BlogCard';
import { getBlogsQueryOptions } from '@/queries/blogs';

export default function BlogsGrid() {
  const { data: blogs, isPending } = useQuery(getBlogsQueryOptions());

  return (
    <main className="min-[880px]:w-[70%] xl:w-[75%]">
      {isPending ? (
        <p>در حال دریافت مقالات...</p>
      ) : !blogs?.length ? (
        <div className="border-primary/30 mt-10 flex flex-col items-center justify-center gap-6 rounded-lg border px-4 py-5 text-center lg:py-10">
          <FaSearchMinus className="text-2xl" />
          <div className="space-y-2">
            <p>نتیجه ای برای جستجوی شما یافت نشد.</p>
            <p className="text-paragraph text-sm">فیلتر های جستجوی خود را تغییر دهید.</p>
          </div>
        </div>
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
