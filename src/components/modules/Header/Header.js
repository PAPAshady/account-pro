import Particle from '@modules/Particle/Particle';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
  return (
    <div className="relative py-10 lg:pt-12.5">
      <Particle className="-top-35 left-0 size-64 opacity-35 blur-[70px]" />
      <Particle className="top-5 right-0 hidden size-50 opacity-50 blur-[80px] lg:block" />
      <header className="container">
        <MobileHeader />
        <DesktopHeader />
      </header>
    </div>
  );
}
