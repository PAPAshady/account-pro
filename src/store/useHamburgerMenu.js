import { create } from 'zustand';

const useHamburgerMenu = create((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export default useHamburgerMenu