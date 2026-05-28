import DynamicIcon from '@modules/DynamicIcon/DynamicIcon';
import { getBlogCategories } from '@/lib/blogCategories';

export default async function Sidebar() {
  const { data: blogCategories } = await getBlogCategories();

  return (
    <aside className="grid min-h-full grid-cols-1 gap-4 min-[880px]:block min-[880px]:w-[30%] min-[880px]:space-y-4 sm:grid-cols-2 xl:w-[25%]">
      {blogCategories.map((category) => (
        <Category key={category._id} {...category} />
      ))}
    </aside>
  );
}

function Category({ title, latinTitle, iconName }) {
  return (
    <div className="bg-box group hover:bg-primary rounded-box-ltr flex cursor-pointer items-center gap-4 p-5 transition-colors duration-300">
      <div className="transition-colors duration-300 group-hover:text-[#191919] lg:text-lg">
        <DynamicIcon iconName={iconName} />
      </div>
      <div className="text-sm">
        <p className="mb-1 transition-colors duration-300 group-hover:text-[#191919] lg:text-lg">
          {title}
        </p>
        <p className="text-primary transition-colors duration-300 group-hover:text-[#191919]">
          {latinTitle}
        </p>
      </div>
    </div>
  );
}
