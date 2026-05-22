import { Suspense } from 'react';

import { getUserProducts } from '@/lib/userProducts';
import DashboardLicenceCard from '@modules/DashboardLicenceCard/DashboardLicenceCard';
import DashboardLicenceCardSkeleton from '@modules/DashboardLicenceCard/DashboardLicenceCardSkeleton';

export default async function UserProducts() {
  return (
    <div className="relative">
      <div
        className="absolute top-3 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent lg:top-5"
        style={{
          background:
            'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
        }}
      ></div>
      <div className="px-4">
        <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">
          وضعیت اشتراک و لایسنس ها
        </h3>
      </div>

      <Suspense fallback={<ProductsListSkeleton />}>
        <ProductsList />
      </Suspense>
    </div>
  );
}

async function ProductsList() {
  const products = await getUserProducts();
  if (!products.length) {
    return (
      <div className="px-3 pt-3 text-center md:px-4 lg:pt-6">
        <p>در حال حاضر اشتراک فعالی ندارید.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 px-3 pt-3 md:px-4 lg:pt-6">
      {products.map((product) => (
        <DashboardLicenceCard key={product._id} {...product} />
      ))}
    </div>
  );
}

function ProductsListSkeleton() {
  return (
    <div className="space-y-4 px-3 pt-3 md:px-4 lg:pt-6">
      {Array(3)
        .fill()
        .map((_, index) => (
          <DashboardLicenceCardSkeleton key={index} />
        ))}
    </div>
  );
}
