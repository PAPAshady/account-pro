import Header from '@modules/Header/Header';
import Footer from '@modules/Footer/Footer';
import HamburgerMenu from '@modules/HamburgerMenu/HamburgerMenu';

export default function RootLayout({ children }) {
  return (
    <div className="min-h-full overflow-x-hidden">
      <div className="relative overflow-x-hidden">
        <Header />
        <HamburgerMenu />
        <div className="lg:mb-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
