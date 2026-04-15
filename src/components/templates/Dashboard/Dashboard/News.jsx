import { announcements } from '@/data';
import Announcement from '@modules/Announcement/Announcement';

export default function News() {
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
        <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">اخبار و اطلاعیه ها</h3>
      </div>
      <div className="space-y-4 px-3 pt-3 md:px-4 lg:pt-6">
        <div className="space-y-8">
          {announcements.map((announcement) => (
            <Announcement key={announcement.id} {...announcement} />
          ))}
        </div>
      </div>
    </div>
  );
}
