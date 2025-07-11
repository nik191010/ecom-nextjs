'use client';

import { useGeneralStore } from '../../store/general-store';

export default function Blur() {
  const { openDrawer, openMobileMenu } = useGeneralStore();
  // Blur effect when the Drawer is open
  return (
    <div
      className={`absolute top-0 right-0 w-full h-dvh backdrop-blur-sm bg-white/20 z-1 
  transition-opacity duration-100 ease-in-out ${
    openDrawer || openMobileMenu ? 'visible' : 'hidden'
  }`}
    ></div>
  );
}
