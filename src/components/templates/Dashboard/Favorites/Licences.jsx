import ServiceCard from '@modules/Cards/ServiceCard/ServiceCard';
import { services } from '@/data';

export default function Licences() {
  return (
    <div className="relative">
      <div
        className="absolute top-3 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent lg:top-4"
        style={{
          background:
            'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
        }}
      ></div>
      <div className="px-4">
        <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">اشتراک و لایسنس ها</h3>
      </div>
      <div className="px-3 pt-4 md:px-4 lg:pt-6">
        <div className="grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} hasLikeButton isFavorite />
          ))}
        </div>

        {/* Empty state ui */}
        {/* <div className="px-3 pb-4 text-center md:px-4">
          <p>در حال حاضر اشتراک مورد علاقه ای ندارید.</p>
        </div> */}
      </div>
    </div>
  );
}
