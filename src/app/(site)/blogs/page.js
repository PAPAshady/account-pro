import Sidebar from '@templates/blogs/Sidebar';
import BlogsGrid from '@templates/blogs/BlogsGrid';

export default function Blogs() {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 min-[880px]:flex-row-reverse lg:gap-8">
        <BlogsGrid />
        <Sidebar />
      </div>
    </div>
  );
}
