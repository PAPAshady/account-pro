import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';
import Input from '@modules/Input/Input';

export default function page() {
  return (
    <div className="pb-6">
      <div className="relative">
        <div
          className="absolute top-3 -z-1 size-full rounded-3xl rounded-tr-lg border-2 border-transparent lg:top-4"
          style={{
            background:
              'linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to right, #094e3d 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 95%, #094e3d 100%) border-box',
          }}
        ></div>
        <div className="px-4">
          <h3 className="font-morabba text-xl lg:text-[26px] lg:font-semibold">
            اطلاعات حساب کاربری
          </h3>
        </div>
        <form className="space-y-6 px-3 py-4 md:px-4 lg:pt-6">
          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
            <div className="min-[480px]:col-span-2 sm:col-span-1">
              <Input label="نام کاربری" />
            </div>
            <div className="min-[480px]:col-span-2 sm:col-span-1">
              <Input label="تلفن همراه" />
            </div>
            <div className="">
              <Input label="رمز عبور فعلی" type="password" />
            </div>
            <div className="">
              <Input label="رمز عبور جدید" type="password" />
            </div>
            <div className="">
              <Input label="تکرار رمز عبور جدید" type="password" />
            </div>
          </div>
          <div className="max-w-37.5">
            <PrimaryButton className="bg-primary text-blackColor w-full hover:bg-[#0bc798]! hover:bg-none">
              ذخیره تغییرات
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
