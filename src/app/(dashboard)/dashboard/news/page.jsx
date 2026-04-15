import { announcements } from '@/data';
import Announcement from '@modules/Announcement/Announcement';

export default function page() {
  return (
    <div className="pb-6">
      <h3 className="font-morabba mb-8 text-xl md:text-[26px] md:font-semibold">
        اخبار و اطلاعیه ها
      </h3>
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Announcement key={announcement.id} {...announcement} />
        ))}
      </div>
    </div>
  );
}
