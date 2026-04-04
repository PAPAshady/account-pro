import Header from '@modules/Header/Header';
import Footer from '@modules/Footer/Footer';

export default function RootLayout({ children }) {
  return (
    <div className="min-h-full overflow-x-hidden">
      <div className="overflow-x-hidden">
        <Header />
        <div className="lg:mb-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
