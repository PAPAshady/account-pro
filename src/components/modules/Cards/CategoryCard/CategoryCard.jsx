import Image from 'next/image';

import RoundedContainer from '@/ui/RoundedContainer/RoundedContainer';

export default function CategoryCard({ id, title, image, alt }) {
  return (
    <div key={id} className="group">
      <RoundedContainer containerClassName="h-full relative" className="h-full" dir="ltr">
        <div className="group-hover:bg-primary hover:bg-hatching flex h-full flex-col gap-4 bg-[#161616] px-2.5 pt-3.75 transition-all duration-300 xl:p-5! xl:pb-0!">
          <div className="flex h-full grow flex-col transition-colors duration-300">
            <p className="text-mainColor group-hover:text-blackColor text-sm xl:text-base!">
              اکانت های
            </p>
            <p className="group-hover:text-blackColor line-clamp-2 grow text-sm font-bold xl:text-lg!">
              {title}
            </p>
          </div>
          <div>
            <Image
              alt={alt}
              src={image}
              width={512}
              height={512}
              className="mx-auto size-13.75 grayscale-100 transition-colors duration-300 xl:size-23.75!"
            />
            <div className="group-hover:bg-primary absolute inset-0 size-full transition-colors duration-300 group-hover:mix-blend-color"></div>
          </div>
        </div>
      </RoundedContainer>
    </div>
  );
}
