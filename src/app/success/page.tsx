'use client';

import Link from 'next/link';
import { useCartStore } from '../../../store/cart-store';
import { useEffect } from 'react';

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  // Clear the cart when the user is redirected to this page
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-[500px] flex flex-col items-center gap-[12px] sm:gap-[18px] md:gap-[24px] text-center">
      <h1 className="font-readex text-[1.2rem] sm:text-[1.5rem] md:text-[2rem]">
        Thank you for your purchase!
      </h1>
      <h2>Your payment has been processed successfully.</h2>
      <Link
        className="inline-block text-center py-[10px] md:py-[15px] 
        w-[150px] md:w-[200px] max-w-full
      bg-black text-white rounded-[12px] 
        duration-500 hover:opacity-60"
        href="/products"
      >
        To Products
      </Link>
    </div>
  );
}
