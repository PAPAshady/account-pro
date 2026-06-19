import Providers from '@/components/providers/Providers';
import { BASE_URL } from '@/constants';
import './globals.css';

export const metadata = {
  title: 'اکانت پرو | مدیریت اکانت‌های پریمیوم',
  description:
    'اکانت پرو یک سیستم مدرن برای مدیریت اکانت‌های پریمیوم با احراز هویت امن، داشبورد حرفه‌ای و تجربه کاربری سریع است.',
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className="scroll-smooth antialiased">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
