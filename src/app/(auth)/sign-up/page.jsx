import Link from 'next/link';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

export default function SignUp() {
  return (
    <>
      <div className="space-y-1 font-bold">
        <p className="text-primary text-xl">ایجاد حساب کاربری</p>
        <p className="text-sm">Sign-up</p>
      </div>
      <p className="text-paragraph">
        از انتخاب شما مطمئن هستیم، <br /> چون رضایت شما همیشه اولویت ما بوده است.
      </p>
      <form className="space-y-5">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Input label="نام و نام خانوادگی : " />
          </div>
          <div className="sm:col-span-2">
            <Input label="شماره همراه :‌" />
          </div>
          <div>
            <Input label="رمز عبور :‌" type="password" />
          </div>
          <div>
            <Input label="تکرار رمز عبور :‌" type="password" />
          </div>
        </div>
        <div className="pt-2">
          <PrimaryButton className="bg-primary mx-auto w-[80%] max-w-62.5 font-bold text-[#2f2f2f] hover:bg-[#0ac596]! hover:bg-none">
            ایجاد حساب کاربری
          </PrimaryButton>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 min-[515px]:justify-between">
          <p className="text-paragraph">عضوی از خانواده‌ی اکانتینو هستید؟</p>
          <Link href="/sign-in" className="text-primary hover:text-[#0ac596]">
            ورود به حساب کاربری
          </Link>
        </div>
      </form>
    </>
  );
}
