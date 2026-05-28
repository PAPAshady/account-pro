import { Suspense } from 'react';

import Sidebar from '@templates/blogs/Sidebar';
import BlogsGrid from '@templates/blogs/BlogsGrid';
import BlogsPageSearchBox from '@templates/blogs/BlogsPageSearchBox';
import SearchBoxSkeleton from '@modules/SearchBox/SearchBoxSkeleton';
import BlogsGridSkeleton from '@templates/blogs/BlogsGridSkeleton';

export default function Blogs() {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 min-[880px]:flex-row-reverse lg:gap-8">
        <main className="space-y-6 min-[880px]:w-[70%] xl:w-[75%]">
          <Suspense fallback={<SearchBoxSkeleton />}>
            <BlogsPageSearchBox />
          </Suspense>
          <Suspense fallback={<BlogsGridSkeleton />}>
            <BlogsGrid />
          </Suspense>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
