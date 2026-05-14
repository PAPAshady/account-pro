import { Drawer } from 'vaul';
import { FaXmark } from 'react-icons/fa6';
import { useSearchParams } from 'next/navigation';

import CheckBox from '@modules/CheckBox/CheckBox';

export default function CategoriesDrawer({ categories, onChecked }) {
  const searchParams = useSearchParams();
  const categoryParams = searchParams.getAll('cat');

  return (
    <Drawer.Root closeThreshold={0.35}>
      <Drawer.Trigger asChild>
        <button className="bg-foreground hover:bg-primary hover:text-box mx-1.5 rounded-2xl rounded-tr-lg px-3 py-1.5 text-[#b7b7b7] transition-colors duration-300">
          دسته بندی ها
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed right-0 bottom-0 left-0 z-10 rounded-t-2xl bg-[#252525] p-4">
          <Drawer.Handle />
          <div className="flex flex-col">
            <div className="border-foreground border-b p-4 pb-2">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <Drawer.Title className="text-paragraph">دسته بندی</Drawer.Title>
                <button className="text-lg">
                  <FaXmark />
                </button>
              </div>
            </div>
            <div className="mt-4 flex h-[calc(100dvh/2)] grow flex-col overflow-y-auto">
              {categories.map((category) => (
                <label className="flex items-center justify-start gap-4" key={category._id}>
                  <CheckBox
                    checked={categoryParams.includes(category.slug)}
                    onChange={() => onChecked(category.slug)}
                  />
                  <div className="border-foreground text-neutral700 grow border-b py-3.5">
                    <p>{category.title}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
