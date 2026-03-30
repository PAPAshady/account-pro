import Header from '@modules/Header/Header';
import Footer from '@modules/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'اکانت پرو',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className="antialiased">
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <div className="overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
