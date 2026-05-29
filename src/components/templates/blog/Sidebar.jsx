import BlogCard from '@modules/Cards/BlogCard/BlogCard';
import { getLandingPageBlogs } from '@/lib/blogs';

export default async function Sidebar() {
  const { data: relatedBlogs } = await getLandingPageBlogs();

  return (
    <aside className="space-y-8 lg:w-[30%] xl:w-[25%]">
      <h4 className="font-morabba text-xl font-bold lg:text-2xl">مقاله های مرتبط</h4>
      <div className="grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 lg:grid-cols-1">
        {relatedBlogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </aside>
  );
}
