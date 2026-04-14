import Image from 'next/image';

import { FaHeart, FaRegHeart } from 'react-icons/fa';

import Particle from '@/components/modules/Particle/Particle';
import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';

export default function ServiceCard({ title, price, region, hasLikeButton, isFavorite }) {
  return (
    <div className="group relative">
      <div className="relative flex h-20 items-center gap-2 overflow-hidden">
        <div className="group-hover:bg-primary group-hover:bg-hatching bg-box h-full shrink-0 grow overflow-hidden rounded-lg rounded-tl-3xl transition-all duration-300"></div>
        <div className="group-hover:bg-primary group-hover:bg-hatching bg-box relative h-full shrink-0 grow overflow-hidden rounded-lg rounded-tr-3xl transition-all duration-300">
          <span className="text-primary group-hover:text-blackColor absolute bottom-2 left-2 text-sm transition-colors duration-300">
            {region}
          </span>
        </div>
        <Particle className="-bottom-[75%] left-1/2 z-1 size-25 -translate-x-1/2 blur-[25px]" />
      </div>
      <div className="relative z-1 -mt-13 flex justify-center">
        <Image
          alt="Spotify"
          src="/images/services/spotify.png"
          width={300}
          height={300}
          className="size-18.75 grayscale-100 transition-all duration-300 group-hover:grayscale-0 lg:size-20"
        />
      </div>
      <div className="bg-box -mt-3.5 rounded-t-lg rounded-b-3xl p-3 pt-4 lg:pt-6">
        <div className="mb-3 flex items-center justify-between gap-2 lg:mb-4.5">
          <h4 className="line-clamp-2 lg:text-lg lg:font-bold" title={title}>
            {title}
          </h4>
          <div className="text-end">
            <span className="text-paragraph text-sm lg:text-base">شروع قیمت از</span>
            <p>
              <span className="me-1.5 text-xl font-bold lg:text-lg">{price.toLocaleString()}</span>
              <span className="text-primary">تومان</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <PrimaryButton dir="ltr" className="w-full">
            مشاهده و خرید
          </PrimaryButton>
          {hasLikeButton && (
            <button className="bg-foreground text-primary grid size-10.5 shrink-0 cursor-pointer place-content-center rounded-lg rounded-tr-sm text-[23px] hover:bg-[#ffffff28]">
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
