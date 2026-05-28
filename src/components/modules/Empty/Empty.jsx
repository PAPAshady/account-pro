import { FaSearchMinus } from 'react-icons/fa';

export default function Empty() {
  return (
    <div className="border-primary/30 mt-10 flex flex-col items-center justify-center gap-6 rounded-lg border px-4 py-5 text-center lg:py-10">
      <FaSearchMinus className="text-2xl" />
      <div className="space-y-2">
        <p>نتیجه ای برای جستجوی شما یافت نشد.</p>
        <p className="text-paragraph text-sm">فیلتر های جستجوی خود را تغییر دهید.</p>
      </div>
    </div>
  );
}
