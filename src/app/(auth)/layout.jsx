import Image from 'next/image';
import Link from 'next/link';

import Particle from '@modules/Particle/Particle';

export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <div className="container">
        <div className="relative flex min-h-dvh flex-col items-center justify-center gap-10 py-8">
          <Link href="/">
            <Image
              alt="اکانت پرو"
              width={330}
              height={115}
              src="/images/logo/logo-lg.png"
              className="w-50"
            />
          </Link>
          <div className="relative flex w-full items-center">
            <div className="flex w-full items-center justify-center xl:w-1/2">
              <Particle className="top-0 -right-30 z-1 size-50 opacity-50 blur-[100px] lg:size-60 lg:opacity-40" />
              <Particle className="bottom-0 -left-30 z-1 size-30 opacity-50 blur-[70px] lg:size-60 lg:opacity-40 lg:blur-[100px]" />
              <div className="relative w-full max-w-120 space-y-5 rounded-3xl rounded-tr-lg bg-[#222] p-6.25">
                {children}
              </div>
            </div>
            <div className="hidden w-1/2 xl:block">
              <Image
                alt="Account Pro"
                width={647}
                height={368}
                src="/images/index/banner.png"
                className="size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
