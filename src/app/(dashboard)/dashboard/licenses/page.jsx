import { Suspense } from 'react';

import LicenceCard from '@modules/Cards/LicenceCard/LicenceCard';
import LicenceCardSkeleton from '@modules/Cards/LicenceCard/LicenceCardSkeleton';
import { getUserProducts } from '@/lib/userProducts';

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
  return products.map((product) => <LicenceCard key={product._id} {...product} />);
}

export const dynamic = 'force-dynamic';
