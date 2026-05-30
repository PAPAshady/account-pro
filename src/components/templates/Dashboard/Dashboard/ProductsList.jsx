import { getUserProducts } from '@/lib/userProducts';
import DashboardLicenceCard from '@modules/DashboardLicenceCard/DashboardLicenceCard';

export default async function ProductsList() {
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
