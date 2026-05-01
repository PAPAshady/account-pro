import './globals.css';
import InitAuth from '@/services/InitAuth';

export const metadata = {
  title: 'اکانت پرو',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className="scroll-smooth antialiased">
      <body>
        <InitAuth />
        {children}
      </body>
    </html>
  );
}
