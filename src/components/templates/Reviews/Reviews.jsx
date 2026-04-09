import Image from 'next/image';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';
import { reviews } from '@/data';

export default function Reviews() {
  return (
    <div className="relative">
      <Particle className="top-60 -right-15 z-2 size-40 opacity-60 blur-[75px] sm:size-45 sm:blur-[80px] lg:top-30 lg:-right-30 lg:size-60 lg:opacity-50 lg:blur-[100px] xl:top-15" />

      <div className="absolute top-20 -right-30 hidden lg:block xl:top-0">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>
      <div className="absolute top-20 -left-30 hidden lg:block xl:top-5">
        <Image
          src="/images/hatching.png"
          alt=""
          width={326}
          height={248}
          className="w-62 lg:h-62 lg:w-81.5"
        />
      </div>

      <div className="relative z-1 container">
        <div className="bg-[url('/images/index/section-container-sm.png')] bg-position-[center_12] bg-no-repeat lg:bg-position-[top_right] xl:bg-[url('/images/index/reviews-rectangle.png')] xl:bg-position-[center_right]">
          <div className="items-center gap-10 lg:flex xl:gap-4">
            <div className="mb-10 text-center lg:m-0 lg:max-w-57.5 lg:ps-4 lg:pt-20 lg:text-start xl:w-[30%] xl:max-w-none xl:p-0 xl:ps-6">
              <div className="mb-4 xl:mb-1">
                <h4 className="font-morabba text-xl font-semibold md:text-[26px] lg:mb-4 lg:text-3xl xl:mb-2 xl:pt-6">
                  نظرات مشتریان
                </h4>
                <h4 className="font-stretchPro text-paragraph text-sm xl:mb-3">Customers Review</h4>
              </div>
              <p className="text-paragraph lg:mb-24 xl:mb-8">
                اکانت پرو همیشه توجه کاربرانش را جلب می کند!
              </p>
              <div className="hidden justify-center lg:flex xl:justify-start">
                <PrimaryButton className="w-full max-w-40">مشاهده همه</PrimaryButton>
              </div>
            </div>
            <div className="mb-8 flex flex-col gap-8 lg:m-0 xl:w-[70%] xl:flex-row">
              {reviews.map((review) => (
                <Review key={review.id} {...review} />
              ))}
            </div>
            <div className="flex justify-center lg:hidden">
              <PrimaryButton className="w-full max-w-40">مشاهده همه</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Review({ name, account, body, avatar }) {
  return (
    <div className="flex gap-2">
      <div className="bg-primary bg-hatching flex w-32 shrink-0 flex-col gap-3 rounded-lg rounded-br-3xl p-3.75 pt-0 pl-2 sm:w-45">
        <Image
          alt="Maryam moradi"
          width={56}
          height={56}
          src={`/images/profile/${avatar}`}
          className="border-primary -mt-4 size-14 rounded-3xl rounded-tr-lg border-4"
        />
        <div>
          <p className="text-blackColor text-xl font-bold md:text-2xl">{name}</p>
          <p className="text-blackColor">{account}</p>
        </div>
      </div>
      <div className="bg-box flex grow items-center rounded-lg rounded-bl-3xl p-3.75">
        <p className="text-sm min-[400px]:text-base md:text-lg">{body}</p>
      </div>
    </div>
  );
}
