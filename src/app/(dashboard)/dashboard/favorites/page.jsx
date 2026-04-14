import Licences from '@templates/Dashboard/Favorites/Licences';
import Blogs from '@templates/Dashboard/Favorites/Blogs';
export default function page() {
  return (
    <div className="pb-6">
      <h3 className="font-morabba mb-8 text-xl md:text-[26px] md:font-semibold">علاقه مندی ها</h3>
      <div className="space-y-12">
        <Licences />
        <Blogs />
      </div>
    </div>
  );
}
