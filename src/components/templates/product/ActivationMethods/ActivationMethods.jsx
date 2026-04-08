import { newAccountActivationSteps, currentAccountActivationSteps } from '@/data';

export default function ActivationMethods() {
  return (
    <div id="activation-methods">
      <div className="relative">
        <div
          className="absolute top-7 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="mb-3 space-y-1 px-4 font-bold">
          <h3 className="text-xl lg:text-[26px]">نحوه ی فعالسازی</h3>
          <p className="text-sm">Activation</p>
        </div>
        <div className="px-4 pt-2 md:px-6 md:pt-3 md:pb-0">
          <div className="mb-6 flex flex-col gap-6 lg:flex-row">
            <div className="bg-foreground flex flex-col gap-5 rounded-3xl rounded-tr-lg p-5">
              <p className="text-lg">فعال‌سازی بر روی اکانت کاربر:</p>
              <p className="text-paragraph">
                مراحل فعال‌سازی اشتراک اسپاتیفای پرمیوم روی اکانت خود کاربر به‌صورت کلی به این شکل
                است:
              </p>
              <ul className="flex grow flex-col gap-5">
                {currentAccountActivationSteps.map((step) => (
                  <ListItem key={step.id} {...step} />
                ))}
              </ul>
            </div>
            <div className="bg-foreground flex flex-col gap-5 rounded-3xl rounded-tr-lg p-5">
              <p className="text-lg">خرید اکانت جدید :</p>
              <p className="text-paragraph">مراحل خرید اکانت‌های آماده با اشتراک پرمیوم:</p>
              <ul className="flex grow flex-col gap-5">
                {newAccountActivationSteps.map((step) => (
                  <ListItem key={step.id} {...step} />
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-foreground flex flex-col gap-5 rounded-3xl rounded-tr-lg p-5">
            <p className="mb-5 text-lg">کدام روش فعال‌سازی برای شما مناسب‌تر است؟</p>
            <p className="text-paragraph">
              خرید اشتراک پرمیوم از طریق ایمیل کاربر امنیت بیشتری دارد و به کاربر اجازه می‌دهد از
              ویژگی‌های کامل اسپاتیفای بهره‌مند شود، اما نیاز به اطلاعات حساب و فرآیند پرداخت
              پیچیده‌تری دارد. در حالی که خرید اکانت آماده سریع و آسان است و نیازی به وارد کردن
              اطلاعات حساب ندارد، اما امنیت کمتری دارد و معمولاً برای مدت کوتاهی فعال است. بنابراین،
              اگر به دنبال امنیت و ویژگی‌های کامل هستید، خرید اشتراک از طریق ایمیل مناسب‌تر است، اما
              اگر راحتی و سرعت بیشتر برایتان مهم است، اکانت آماده گزینه بهتری خواهد بود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem({ title, description, id }) {
  return (
    <li className="flex gap-2">
      <div
        className="bg-primary grid size-8 shrink-0 place-content-center rounded-lg rounded-tr-sm text-[#191919]"
        style={{ width: 32, height: 32 }}
      >
        {id}
      </div>
      <div>
        <p className="mb-2.5">{title}:</p>
        <p className="text-paragraph text-[15px] lg:text-base">{description}</p>
      </div>
    </li>
  );
}
