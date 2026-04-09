import PlanCard from '@modules/Cards/PlanCard/PlanCard';
import { plans } from '@/data';

export default function page() {
  return (
    <div className="container">
      <div className="mb-16 text-center">
        <h4 className="mb-2 font-bold md:mb-4">
          <span className="font-morabba block text-[26px] lg:mb-2 lg:text-3xl">پلن های قیمتی</span>
          <span className="font-stretchPro text-paragraph text-sm">Price&apos;s Plans</span>
        </h4>
        <p className="text-paragraph">
          با انتخاب پلن مناسب خود، علاوه بر صرفه‌جویی در هزینه، تجربه‌ای بدون دغدغه از استفاده از
          حساب‌های پریمیوم خواهید داشت.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {plans.map((plan) => (
          <PlanCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
}
