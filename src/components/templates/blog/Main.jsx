import Image from 'next/image';

import { FaPen, FaRegCalendar, FaUser, FaStopwatch } from 'react-icons/fa';

import { getBlog } from '@/lib/blogs';

export default async function Main({ params }) {
  const { slug } = await params;
  const { data: blog } = await getBlog(slug);
  const date = new Date(blog.createdAt).toLocaleDateString('fa-IR');

  const blogInfos = [
    { id: 1, title: 'ناشر : اکانت پرو', icon: <FaPen /> },
    { id: 2, title: `تاریخ : ${date}`, icon: <FaRegCalendar /> },
    { id: 3, title: ` نویسنده : ${blog.creator.name}`, icon: <FaUser /> },
    { id: 4, title: `زمان مطالعه : ${blog.readTime} دقیقه`, icon: <FaStopwatch /> },
  ];

  return (
    <main className="bg-foreground rounded-2xl rounded-tr-lg p-5 lg:w-[70%] xl:w-[75%]">
      <h1 className="font-morabba text-xl font-bold lg:text-2xl">{blog.title}</h1>
      <div className="bg-foreground my-8 flex flex-wrap justify-between gap-4 rounded-2xl rounded-tr-lg p-3.75">
        {blogInfos.map((info) => (
          <div key={info.id} className="flex w-full items-center gap-2.5 min-[500px]:w-auto">
            <i className="bg-primary grid size-8 place-content-center rounded-lg rounded-tr-sm text-lg text-[#191919]">
              {info.icon}
            </i>
            <p className="text-sm lg:text-base">{info.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="bg-foreground space-y-8 rounded-xl rounded-tr-lg p-5">
          <h4 className="font-morabba text-xl font-bold lg:text-2xl">تیتر تستی</h4>
          <p className="text-justify text-sm leading-8 lg:text-base">{blog.content}</p>
        </div>
        <div className="flex flex-col gap-6 lg:px-4">
          <Image
            alt={blog.title}
            width={300}
            height={300}
            src="/images/products/YouTube Premium-main-1778009063469.png"
            className="mx-auto aspect-square w-full max-w-50 lg:w-auto"
          />
          <p className="text-center text-3xl font-bold">YOUTUBE PREMIUM</p>
        </div>
      </div>
    </main>
  );
}
