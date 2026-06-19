import { Suspense } from 'react';

import Sidebar from '@templates/blogs/Sidebar';
import BlogsGrid from '@templates/blogs/BlogsGrid';
import BlogsPageSearchBox from '@templates/blogs/BlogsPageSearchBox';
import SearchBoxSkeleton from '@modules/SearchBox/SearchBoxSkeleton';
import BlogsGridSkeleton from '@templates/blogs/BlogsGridSkeleton';
import SidebarSkeleton from '@templates/blogs/SidebarSkeleton';
import { BASE_URL } from '@/constants';

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
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'وبلاگ | اکانت پرو',
  description:
    'مقالات، آموزش‌ها و اخبار مرتبط با اکانت پرو و مدیریت اکانت‌های پریمیوم. یادگیری، راهنما و نکات کاربردی برای کاربران.',

  alternates: {
    canonical: `${BASE_URL}/blogs`,
  },
};
