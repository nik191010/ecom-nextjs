import { create } from 'zustand';

interface GeneralStoreI {
  openDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
  openMobileMenu: boolean;
  setOpenMobileMenu: (value: boolean) => void;
}

// Opening/closing the drawer and mobile menu
export const useGeneralStore = create<GeneralStoreI>((set) => ({
  openDrawer: false,
  openMobileMenu: false,

  setOpenDrawer: (value) => set({ openDrawer: value }),
  setOpenMobileMenu: (value) => set({ openMobileMenu: value }),
}));

// export const useGeneralStore = create<GeneralStoreI>((set) => ({
//   openDrawer: false,
//   openMobileMenu: false,

//   setOpenMobileMenu: () => set((state) => ({ openMobileMenu: !state.openMobileMenu })),
//   setOpenDrawer: () => set((state) => ({ openDrawer: !state.openDrawer })),
// }));
