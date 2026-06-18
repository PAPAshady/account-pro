import HamburgerMenu from './HamburgerMenu';
import { getNavbarDropdownLinks } from '@/lib/categories';

export default async function HamburgerMenuWrapper() {
  const { data } = await getNavbarDropdownLinks();
  return <HamburgerMenu dropdownLinks={data} />;
}
