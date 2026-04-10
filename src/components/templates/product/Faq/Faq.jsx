import Image from 'next/image';

import FaqAccordion from '@modules/FaqAccordion/FaqAccordion';
import { faq } from '@/data';

export default function Faq() {
  return (
    <div id="faq">
      <div className="relative">
        <div
          className="absolute top-7 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="mb-3 space-y-1 px-4 font-bold">
          <h3 className="font-morabba text-xl lg:text-[26px]">سوالات پرتکرار</h3>
          <p className="text-paragraph font-stretchPro text-sm">FAQ</p>
          <div className="px-4 pt-2 md:px-6 md:pt-3 md:pb-0">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center">
              <div className="mx-auto w-full max-w-125 lg:w-1/2">
                <Image
                  alt="سوالات متداول"
                  width={500}
                  height={409}
                  src="/images/product/faq.jpg"
                  className="size-full object-cover"
                />
              </div>
              <div className="w-full space-y-5 lg:w-1/2">
                {faq.map(({ id, ...question }) => (
                  <FaqAccordion key={id} {...question} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
