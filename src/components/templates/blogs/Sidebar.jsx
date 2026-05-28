import { getBlogCategories } from '@/lib/blogCategories';
import BlogCategoryCard from '@modules/Cards/BlogCategoryCard/BlogCategoryCard';

export default async function Sidebar() {
  const { data: blogCategories } = await getBlogCategories();

  return (
    <aside className="grid min-h-full grid-cols-1 gap-4 min-[880px]:block min-[880px]:w-[30%] min-[880px]:space-y-4 sm:grid-cols-2 xl:w-[25%]">
      {blogCategories.map(({ _id, title, latinTitle, iconName }) => (
        <BlogCategoryCard
          key={_id}
          id={_id}
          title={title}
          latinTitle={latinTitle}
          iconName={iconName}
        />
      ))}
    </aside>
  );
}
