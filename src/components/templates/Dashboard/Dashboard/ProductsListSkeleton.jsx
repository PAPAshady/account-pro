import DashboardLicenceCardSkeleton from '@modules/DashboardLicenceCard/DashboardLicenceCardSkeleton';

export default function UserProductsSkeleton() {
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
