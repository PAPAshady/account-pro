import { Suspense } from 'react';

import Sidebar from '@templates/blog/Sidebar';
import Main from '@templates/blog/Main';
import MainSkeleton from '@templates/blog/MainSkeleton';
import SidebarSkeleton from '@templates/blog/SidebarSkeleton';
import { getBlog } from '@/lib/blogs';
import { BASE_URL } from '@/constants';

export default async function page({ params }) {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 lg:flex-row">
        <Suspense fallback={<MainSkeleton />}>
          <Main params={params} />
        </Suspense>
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar params={params} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: blog } = await getBlog(slug);

  return {
    title: `${blog.title} | اکانت پرو`,
    description: blog.description,
    alternates: {
      canonical: `${BASE_URL}/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${BASE_URL}/blog/${blog.slug}`,
      siteName: 'اکانت پرو',
      type: 'article',
      images: [
        {
          url: blog.imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.imageUrl],
    },
  };
}
