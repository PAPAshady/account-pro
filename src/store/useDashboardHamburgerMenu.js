import { create } from 'zustand';

const useDashboardHamburgerMenu = create((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export default useDashboardHamburgerMenu;
