import { Suspense } from 'react';

import Sidebar from '@templates/blog/Sidebar';
import Main from '@templates/blog/Main';
import MainSkeleton from '@templates/blog/MainSkeleton';
import SidebarSkeleton from '@templates/blog/SidebarSkeleton';

export default async function page({ params }) {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 lg:flex-row">
        <Suspense fallback={<MainSkeleton />}>
          <Main params={params} />
        </Suspense>
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
      </div>
    </div>
  );
}
