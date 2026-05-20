import Providers from '@/components/providers/Providers';
import './globals.css';

export const metadata = {
  title: 'اکانت پرو',
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
