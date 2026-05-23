import Image from 'next/image';

import Particle from '@modules/Particle/Particle';
import ProductForm from '@templates/product/ProductForm/ProductForm';

export default function ProductDetails({
  _id,
  title,
  latinTitle,
  shortDescription,
  price,
  images,
  plans,
}) {
  return (
    <div className="flex flex-col items-center gap-3 min-[900px]:flex-row md:gap-6 lg:gap-10">
      <div className="w-full space-y-6 min-[900px]:w-1/2">
        <div className="space-y-2 font-bold">
          <h1 className="font-morabba text-xl min-[900px]:text-[26px]">{title}</h1>
          <p className="font-stretchPro text-paragraph mb-6 text-sm">{latinTitle}</p>
          <p className="text-sm font-thin min-[900px]:text-base">{shortDescription} </p>
          <p className="pt-3 text-sm font-semibold min-[900px]:text-base">
            همین حالا {title} رو امتحان کن!
          </p>
        </div>
        <ProductForm plans={plans} price={price} productId={_id} />
      </div>
      <div className="relative grid w-full grid-cols-2 gap-3 min-[900px]:w-1/2">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 rounded-4xl">
          <Particle className="top-1/2 left-1/2 size-64 -translate-1/2 opacity-35 blur-[70px]" />
          <Image
            alt={title}
            width={170}
            height={170}
            src={images[0].url}
            className="size-42.5 min-w-42.5 object-cover"
          />
        </div>
        <div className="bg-foreground flex min-h-50 flex-col rounded-4xl rounded-tr-2xl p-5">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span>100</span>
            <span className="font-morabba text-primary">%</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            مشتری رضایتمند!
          </p>
        </div>
        <div className="bg-foreground flex min-h-50 flex-col items-end rounded-4xl rounded-tl-2xl p-5 text-end">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span>100</span>
            <span className="font-morabba text-primary">%</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            خرید دوباره از اکانت پرو!
          </p>
        </div>
        <div className="bg-foreground flex min-h-50 flex-col justify-end rounded-4xl rounded-br-2xl p-5">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span className="font-morabba text-primary">+</span>
            <span>10000</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            فعالسازی در ماه گذشته!
          </p>
        </div>
        <div className="bg-foreground flex min-h-50 flex-col justify-end rounded-4xl rounded-bl-2xl p-5 text-end">
          <p className="space-y-2 text-[28px] font-bold min-[380px]:text-[36px] min-[420px]:text-[40px] min-[900px]:text-[40px] lg:text-[48px]">
            <span className="font-morabba text-primary">+</span>
            <span>8</span>
          </p>
          <p className="text-paragraph text-sm min-[380px]:text-base min-[900px]:text-lg">
            لایسنس و اشتراک مختلف!
          </p>
        </div>
      </div>
    </div>
  );
}
