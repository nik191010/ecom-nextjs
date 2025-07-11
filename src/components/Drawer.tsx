'use client';

import Image from 'next/image';
import { TfiClose } from 'react-icons/tfi';
import { useGeneralStore } from '../../store/general-store';
import Link from 'next/link';
import useOutsideClick from '@/lib/useOutsideClick ';
import { useCartStore } from '../../store/cart-store';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

export default function Drawer() {
  const { minusItem, removeItem, changeQuantity } = useCartStore();
  const items = useCartStore((state) => state.items);
  const totalPrice = items
    .reduce((acc, item) => acc + (item.price * item.quantity) / 100, 0)
    .toFixed(2);

  // Open/close Drawer
  const { openDrawer, setOpenDrawer } = useGeneralStore();
  // The hook to handle an event when the user clicks outside of smth.
  // e.g. outside of the Drawer
  const ref = useOutsideClick(() => setOpenDrawer(false));

  return (
    <div
      ref={ref}
      className={`min-h-dvh bg-[#F8F9FA] flex flex-col w-full max-w-[420px] 
    absolute right-0 top-0 transform duration-300 ease-in-out
    ${
      openDrawer ? 'translate-x-[0]' : 'translate-x-[100%]'
    } shadow-[-10px_4px_24px_0px_#0000001a] z-2`}
    >
      <div className="flex flex-auto flex-col gap-[1rem] p-[15px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold">Your order</h2>
          <TfiClose
            onClick={() => setOpenDrawer(false)}
            className="text-[1rem] md:text-[1.5rem] cursor-pointer duration-500 hover:opacity-45"
          />
        </div>

        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-[1.2rem] p-[15px_20px] border-1 border-[#DCE5E2] rounded-[12px]"
            >
              <div className="w-[94px] h-[94px] relative shrink-0">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="94px"
                  />
                )}
              </div>
              <div className="flex flex-col gap-[1rem] w-full md:pt-[10px]">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-[.8rem] md:text-[1rem] font-bold">{item.name}</h3>
                  <TfiClose
                    onClick={() => removeItem(item.id)}
                    className="text-[.7rem] md:text-[.9rem] cursor-pointer duration-500 hover:opacity-45"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center p-[3px_10px] gap-[.5rem] md:gap-[.8rem] bg-white rounded-[4px]">
                    <button
                      onClick={() => minusItem(item.id)}
                      className="duration-500 cursor-pointer hover:opacity-45"
                    >
                      -
                    </button>
                    <p className="text-[.8rem]">{item.quantity}</p>
                    <button
                      onClick={() => changeQuantity(item.id)}
                      className="duration-500 cursor-pointer hover:opacity-45"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[.9rem] md:text-[1rem] font-bold">
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[500px]">
            <h2 className="font-readex text-[1.2rem] sm:text-[1.5rem] md:text-[1.7rem]">
              Your cart is empty
            </h2>
            <MdOutlineRemoveShoppingCart className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.7rem]" />
          </div>
        )}
      </div>
      <div className="flex justify-between items-center bg-white p-[20px_15px] border-t-1 border-[#DCE5E2] ">
        <p className="font-bold text-[1rem] md:text-[1.2rem]">Total: ${totalPrice}</p>
        <Link href="/checkout">
          <button
            onClick={() => setOpenDrawer(false)}
            className="p-[8px_15px] md:p-[10px_20px] w-[150px] md:w-[200px] max-w-full text-black
         border-1 border-black rounded-[5px]
         duration-500 hover:bg-[#c0d1cc] hover:text-white hover:border-transparent cursor-pointer"
          >
            Order
          </button>
        </Link>
      </div>
    </div>
  );
}
