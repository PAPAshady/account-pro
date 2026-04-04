import './globals.css';

export const metadata = {
  title: 'اکانت پرو',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
