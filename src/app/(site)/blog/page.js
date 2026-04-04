import { FaServer, FaChalkboardTeacher, FaNewspaper, FaLock, FaGamepad } from 'react-icons/fa';

import BlogCard from '@modules/Cards/BlogCard/BlogCard';

const categories = [
  { id: 1, title: 'آشنایی با سرویس ها', subtitle: 'About Services', icon: <FaServer /> },
  {
    id: 2,
    title: 'آموزش ها و راهنمایی ها',
    subtitle: 'Tutorials & Tips',
    icon: <FaChalkboardTeacher />,
  },
  { id: 3, title: 'اخبار به روز رسانی ها', subtitle: 'News & Updates', icon: <FaNewspaper /> },
  { id: 4, title: 'امنیت و حریم خصوصی', subtitle: 'Security & Privacy', icon: <FaLock /> },
  { id: 5, title: 'تکنولوژی و سرگرمی', subtitle: 'Tech & Entertainment', icon: <FaGamepad /> },
];

export default function Blog() {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 min-[880px]:flex-row-reverse lg:gap-8">
        <main className="grid grid-cols-1 gap-6 min-[580px]:grid-cols-2 min-[880px]:w-[70%] min-[1100px]:grid-cols-3 min-[1100px]:gap-4 xl:w-[75%]">
          {Array(6)
            .fill()
            .map((_, index) => (
              <BlogCard key={index} />
            ))}
        </main>
        <aside className="grid min-h-full grid-cols-1 gap-4 min-[880px]:block min-[880px]:w-[30%] min-[880px]:space-y-4 sm:grid-cols-2 xl:w-[25%]">
          {categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </aside>
      </div>
    </div>
  );
}

function Category({ title, subtitle, icon }) {
  return (
    <div className="bg-box group hover:bg-primary rounded-box-ltr flex cursor-pointer items-center gap-4 p-5 transition-colors duration-300">
      <div className="transition-colors duration-300 group-hover:text-[#191919] lg:text-lg">
        {icon}
      </div>
      <div className="text-sm">
        <p className="mb-1 transition-colors duration-300 group-hover:text-[#191919] lg:text-lg">
          {title}
        </p>
        <p className="text-primary transition-colors duration-300 group-hover:text-[#191919]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
