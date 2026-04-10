import Image from 'next/image';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Comment from '@modules/Comment/Comment';
import CommentsBox from '@modules/CommentsBox/CommentsBox';
import { commentsBoxes } from '@/data';

export default function Comments() {
  return (
    <div id="comments" className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-6">
      <div className="relative lg:w-2/3">
        <div
          className="absolute top-7 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="mb-3 space-y-1 px-4 font-bold">
          <h3 className="font-morabba text-xl lg:text-[26px]">دیدگاه های شما</h3>
          <p className="text-paragraph font-stretchPro text-sm">Reviews</p>
          <div className="pt-8">
            <div className="flex flex-col gap-12.5">
              <div className="flex flex-col gap-10">
                <div>
                  <Comment />
                  <div className="ps-5 pt-4">
                    <Comment isReply />
                  </div>
                </div>
              </div>
              <form className="bg-foreground rounded-3xl rounded-tr-lg p-5">
                <div className="mb-4">
                  <p className="mb-2.5 text-lg">دیدگاه شما</p>
                  <p className="text-paragraph font-light">
                    دیدگاه شما نه تنها به ما کمک می‌کنه خدمات بهتری ارائه بدیم، بلکه به دیگر کاربران
                    هم در انتخابشون کمک می‌کنه.
                  </p>
                </div>
                <div className="mb-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <Input label="نام و نام خانوادگی شما : *" />
                    <Input label="ایمیل شما : *" />
                    <div className="w-full md:col-span-2">
                      <label className="mb-1 block font-light">دیدگاه شما : *</label>
                      <div className="bg-foreground rounded-box-ltr flex w-full items-center gap-2 px-3.5">
                        <textarea
                          className="h-40 w-full pt-2.5 font-normal outline-none"
                          placeholder="دیدگاه خودتان را بنویسید"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 space-y-2 font-light">
                  <p>امتیاز شما به اکانت پرو : *</p>
                  <div className="flex max-w-50 justify-between">
                    <RatingButton />
                    <RatingButton />
                    <RatingButton />
                    <RatingButton />
                    <RatingButton />
                  </div>
                </div>
                <PrimaryButton className="bg-primary w-full text-[#2f2f2f] hover:bg-[#0bcf9e]! hover:bg-none">
                  ارسال دیدگاه
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:w-1/3 lg:grid-cols-1">
        {commentsBoxes.map((box) => (
          <CommentsBox key={box.id} {...box} />
        ))}
      </div>
    </div>
  );
}

function RatingButton() {
  return (
    <button className="hover:bg-primary grid size-8 cursor-pointer place-content-center rounded-lg rounded-tr-sm bg-[#3f3f3f] transition-colors duration-300">
      <Image alt="" width={20} height={20} src="/images/product/star.png" />
    </button>
  );
}
