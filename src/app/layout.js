import Header from "@/components/modules/Header/Header";
import "./globals.css";

export const metadata = {
  title: "اکانت پرو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className="antialiased">
      <body className="min-h-full flex flex-col">
        <div className="container mt-10 lg:mt-12.5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
