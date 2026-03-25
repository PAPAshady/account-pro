import ServiceCard from '@/components/modules/Cards/ServiceCard/ServiceCard';
import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';
import Particle from '@/components/modules/Particle/Particle';

const services = [
  { id: 1, title: 'لایسنس ویندوز ۱۱', price: 90_000, region: 'همه ریجن ها' },
  { id: 2, title: 'اکانت پرمیوم یوتیوب', price: 100_000, region: 'همه ریجن ها' },
  { id: 3, title: 'اکانت پرمیوم اسپاتیفای یک ماهه', price: 200_000, region: 'ریجن آمریکا' },
  { id: 4, title: 'اکانت پرمیوم تلگرام یک ساله', price: 120_000, region: 'همه ریجن ها' },
];

export default function Services() {
  return (
    <div className="relative">
      <Particle className="-bottom-26 left-0 size-44 opacity-60 blur-[70px] sm:-bottom-46 sm:size-68 sm:opacity-40 sm:blur-[80px]" />
      <div className="container">
        <div className="relative w-full bg-[url('/images/index/section-container-lg.png')] bg-position-[center_55] bg-no-repeat lg:bg-[url('/images/index/section-container-sm.png')] lg:bg-position-[center_20]">
          <div className="space-y-2">
            <h3 className="text-center text-2xl font-bold">سرویس های اکانت پرو</h3>
            <h3 className="text-paragraph mb-2 text-center text-lg font-bold lg:mb-5">Services</h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {services.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <PrimaryButton dir="ltr" className="w-2/3 max-w-43">
              مشاهده همه
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
