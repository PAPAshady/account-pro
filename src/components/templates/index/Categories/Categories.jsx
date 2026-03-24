import Image from 'next/image';

import RoundedContainer from '@/ui/RoundedContainer/RoundedContainer';
import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';

const categoryCards = [
  {
    id: 1,
    title: 'استریم فیلم و سریال',
    image: '/images/index/movie-category.png',
    alt: 'Movie and series',
  },
  {
    id: 2,
    title: 'استریم موزیک',
    image: '/images/index/music-category.png',
    alt: 'Music',
  },
  {
    id: 3,
    title: 'گرافیک و طراحی',
    image: '/images/index/graphic-category.png',
    alt: 'Graphics',
  },
  {
    id: 4,
    title: 'گیفت کارت و بازی',
    image: '/images/index/gift-category.png',
    alt: 'Gift Card',
  },
  {
    id: 5,
    title: 'هوش مصنوعی',
    image: '/images/index/ai-category.png',
    alt: 'AI',
  },
];

export default function Categories() {
  return (
    <div className="container">
      <div className="">
        <div
          className="relative bg-no-repeat lg:bg-none!"
          style={{
            backgroundImage: 'url(/images/index/categories-container.png)',
            backgroundPositionY: 55,
            backgroundPositionX: 'center',
          }}
        >
          <div className="items-center space-y-4 lg:m-0 lg:flex lg:gap-8">
            <div className="space-y-3">
              <h3 className="text-center text-2xl font-bold lg:hidden">دسته بندی محصولات</h3>
              <h3 className="hidden text-center text-3xl font-bold lg:block">
                دسته بندی
                <br />
                محصولات
              </h3>
              <h3 className="text-paragraph mb-6 text-center text-lg font-bold">Categories</h3>
              <div className="hidden lg:block">
                <PrimaryButton dir="ltr">همه دسته بندی ها</PrimaryButton>
              </div>
            </div>
            <div className="grid grow grid-cols-2 gap-4 px-2 sm:grid-cols-3 lg:grid-cols-5 xl:gap-6">
              {categoryCards.map((category) => (
                <div key={category.id} className="group">
                  <RoundedContainer containerClassName="h-full" className="h-full" dir="ltr">
                    <div className="hover:bg-primary flex h-full flex-col gap-4 bg-[#161616] px-2.5 pt-3.75 transition-colors duration-300 xl:p-5! xl:pb-0!">
                      <div className="flex h-full grow flex-col transition-colors duration-300">
                        <p className="text-mainColor group-hover:text-blackColor text-sm xl:text-base!">
                          اکانت های
                        </p>
                        <p className="group-hover:text-blackColor line-clamp-2 grow text-sm font-bold xl:text-lg!">
                          {category.title}
                        </p>
                      </div>
                      <div className="">
                        <Image
                          alt={category.alt}
                          src={category.image}
                          width={512}
                          height={512}
                          className="mx-auto size-13.75 grayscale-100 group-hover:grayscale-0 xl:size-23.75!"
                        />
                      </div>
                    </div>
                  </RoundedContainer>
                </div>
              ))}
            </div>
          </div>
          <div className="h-900"></div>
        </div>
      </div>
    </div>
  );
}
