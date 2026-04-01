import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Particle from '@modules/Particle/Particle';

export default function ContactForm() {
  return (
    <div className="relative">
      <Particle className="top-30 -right-30 z-2 size-44 opacity-60 blur-[70px] sm:-bottom-46 sm:size-68 sm:opacity-40 sm:blur-[80px] lg:opacity-30" />

      <div className="container">
        <div className="pt-10">
          <div className="bg-box relative mx-auto rounded-3xl rounded-tr-lg p-5 lg:max-w-[75%]">
            <div className="-mt-9 font-bold">
              <p className="text-xl">تماس با ما</p>
              <p className="text-paragraph text-xl">Contact Us</p>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
              <Input label="نام :" placeholder="نام" />
              <Input label="نام خانوادگی :" placeholder="نام خانوادگی" />
              <Input label="شماره همراه :‌" placeholder="۰۹۰۰۰۰۰۰۰۰۰" />
              <Input label="ایمیل : " placeholder="someone@example.com" type="email" />
              <div className="md:col-start-1 md:col-end-3">
                <label className="mb-1 block">پیام شما :</label>
                <div className="bg-foreground rounded-box-ltr flex grow items-center gap-2 px-3.5">
                  <textarea
                    placeholder="پیام شما به اکانت پرو"
                    className="h-40 grow pt-2.5 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <PrimaryButton dir="ltr" className="bg-primary w-35 text-[#2f2f2f] hover:bg-none">
                ارسال پیام
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
