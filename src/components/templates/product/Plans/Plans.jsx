import { productPlans as plans } from '@/data';

export default function Plans() {
  return (
    <div id="plans">
      <div className="relative">
        <div
          className="absolute top-7 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="mb-3 space-y-1 px-4 font-bold">
          <h3 className="font-morabba text-xl lg:text-[26px]">انواع پلن های اشتراک پرمیوم</h3>
          <p className="font-stretchPro text-paragraph text-sm">Premium Plans</p>
        </div>
        <div className="space-y-10 px-4 pt-2 md:px-6 md:pt-3 md:pb-0">
          <p className="text-paragraph lg:text-lg">
            سپاتیفای چندین نوع اشتراک پرمیوم ارائه می‌دهد که هر کدام برای گروه خxاصی از کاربران
            طراحی شده است. <br /> در ادامه، انواع اشتراک‌ها و ویژگی‌های آن‌ها توضیح داده شده است.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {plans.map(({ id, ...plan }) => (
              <PremiumCard key={id} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PremiumCard({ title, type, options }) {
  return (
    <div className="bg-foreground border-foreground hover:border-primary flex flex-col gap-3 rounded-3xl rounded-tr-lg border p-5 transition-colors duration-300">
      <p className="text-primary">{type}</p>
      <p className="font-morabba mb-2 text-[28px] font-bold">{title}</p>
      <ul className="flex grow flex-col gap-5">
        {options.map((option) => (
          <li className="flex gap-2" key={option.id}>
            <span className="bg-primary mt-2 size-3 shrink-0 rounded-lg rounded-tr-xs"></span>
            <div>
              <p className="mb-2.5">{option.title}:</p>
              <p className="text-paragraph text-[15px] lg:text-base">{option.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
