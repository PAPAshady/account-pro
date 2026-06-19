import ContactInfos from '@templates/contactUs/ContactInfos/ContactInfos';
import ContactForm from '@templates/contactUs/ContactForm/ContactForm';
import { BASE_URL } from '@/constants';

export default function page() {
  return (
    <div className="space-y-27">
      <ContactInfos />
      <ContactForm />
    </div>
  );
}

export const metadata = {
  title: 'تماس با ما | اکانت پرو',
  description:
    'ارتباط با تیم اکانت پرو برای پشتیبانی، سوالات کاربران و همکاری. راه‌های تماس سریع و ساده برای پاسخ‌گویی به نیازهای شما.',

  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
};
