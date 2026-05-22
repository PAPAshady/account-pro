import { Suspense } from 'react';

import { FaSearchMinus } from 'react-icons/fa';

import LicenceCard from '@modules/Cards/LicenceCard/LicenceCard';
import LicenceCardSkeleton from '@modules/Cards/LicenceCard/LicenceCardSkeleton';
import { getUserProducts } from '@/lib/userProducts';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

export default async function page() {
  return (
    <div>
      <div className="mb-6 px-4">
        <h3 className="font-morabba text-xl font-semibold lg:text-[26px]">اشتراک ها و لایسنس ها</h3>
      </div>
      <div className="space-y-6">
        <Suspense fallback={<LicenceCardSkeleton />}>
          <LicencesList />
        </Suspense>
      </div>
    </div>
  );
}

async function LicencesList() {
  const products = await getUserProducts();
  if (!products.length) {
    return (
      <div className="border-primary/30 mt-10 flex flex-col items-center justify-center gap-6 rounded-lg border px-4 py-5 text-center sm:py-10">
        <FaSearchMinus className="text-2xl" />
        <div className="space-y-2">
          <p>در حال حاضر اشتراک فعالی ندارید.</p>
          <p className="text-paragraph mb-6 text-sm">
            لطفا محصولات مورد نظر خود را انتخاب و خرید نمایید.
          </p>
          <PrimaryButton isLink href="/shop" isHighLight>
            دیدن محصولات
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return products.map((product) => <LicenceCard key={product._id} {...product} />);
}

export const dynamic = 'force-dynamic';
