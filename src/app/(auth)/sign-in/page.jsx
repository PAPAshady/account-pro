import Link from 'next/link';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

export default function SignIn() {
  return (
    <form className="relative w-full max-w-110 space-y-5 rounded-3xl rounded-tr-lg bg-[#222] p-6.25">
      <div className="space-y-1 font-bold">
        <p className="text-primary text-xl">ورود به حساب کاربری</p>
        <p className="text-sm">Sign-in</p>
      </div>
      <p className="text-paragraph">
        از انتخاب شما مطمئن هستیم، <br /> چون رضایت شما همیشه اولویت ما بوده است.
      </p>
      <div className="space-y-2">
        <Input label="شماره همراه : " placeholder="" />
        <Input label="رمز عبور :‌" placeholder="" type="password" />
      </div>
      <div className="pt-2">
        <PrimaryButton className="bg-primary mx-auto w-[80%] max-w-62.5 font-bold text-[#2f2f2f] hover:bg-[#0ac596]! hover:bg-none">
          ورود به حساب کاربری
        </PrimaryButton>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 min-[515px]:justify-between">
        <p className="text-paragraph">هنوز عضوی از خانواده‌ی اکانتینو نیستید؟ </p>
        <Link href="/sign-up" className="text-primary hover:text-[#0ac596]">
          ایجاد حساب کاربری
        </Link>
      </div>
    </form>
  );
}
