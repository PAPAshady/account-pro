'use client';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';

export default function SendMessageForm() {
  return (
    <div>
      <form className="bg-foreground flex flex-col gap-3.75 rounded-3xl rounded-tl-sm p-5 lg:gap-5">
        <textarea
          required
          className="bg-foreground h-40 rounded-2xl rounded-tr-lg px-3.75 py-2.25 outline-none lg:h-30"
          placeholder="پاسخ شما"
        />
        <div>
          <PrimaryButton isHighLight className="ms-auto w-30">
            ارسال پیام
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
