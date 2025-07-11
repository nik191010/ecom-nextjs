'use client';

import { BsCartDashFill } from 'react-icons/bs';
import { useCartStore } from '../../../store/cart-store';
import Image from 'next/image';
import { TfiClose } from 'react-icons/tfi';
import checkoutAction from './checkoutAction';

export default function Checkout() {
  const { items, minusItem, removeItem, changeQuantity, clearCart } = useCartStore();
  const totalPrice = items
    .reduce((acc, item) => acc + (item.price * item.quantity) / 100, 0)
    .toFixed(2);

  return (
    <div
      className="min-h-[500px] max-w-[600px] mx-auto flex flex-col items-center
    gap-[20px]"
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="font-readex text-[1.5rem] md:text-[2rem]">Your order</h2>
        <div
          onClick={clearCart}
          className="flex items-center gap-[5px] text-[.8rem] sm:text-[1rem] cursor-pointer"
        >
          <BsCartDashFill className="text-[#ED3500]" />
          <p className="duration-500 hover:text-[#ED3500]">Clear cart</p>
        </div>
      </div>
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="relative w-full flex justify-between items-center
            shadow-latest p-[20px_10px] rounded-[5px]"
          >
            <TfiClose
              onClick={() => removeItem(item.id)}
              className="absolute right-[10px] top-[8px] text-[.7rem] sm:text-[1rem] text-gray-400 cursor-pointer
                duration-500 hover:opacity-45"
            />

            <div className="flex items-center gap-[10px]">
              <div className="w-[50px] sm:w-[94px] h-[50px] sm:h-[94px] relative shrink-0">
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
              <h3 className="font-readex text-[.8rem] sm:text-[1rem]">{item.name}</h3>
            </div>
            <div className="flex items-center gap-[20px]">
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
              <p className="text-[.8rem] sm:text-[.9rem] md:text-[1rem] font-bold">
                ${((item.price * item.quantity) / 100).toFixed(2)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center min-h-[500px]">
          <h2 className="font-readex text-[1.5rem] md:text-[2rem]">Your cart is empty</h2>
        </div>
      )}
      <div className="flex flex-col-reverse s420:flex-row items-center justify-center s420:justify-between gap-[15px] w-full">
        <form action={checkoutAction}>
          <input type="hidden" name="items" value={JSON.stringify(items)} />
          <button
            type="submit"
            className="inline-block text-center py-[8px] s420:py-[10px] md:py-[15px] 
            w-[180px] md:w-[200px] max-w-full
          bg-black text-white rounded-[12px] 
            duration-500 hover:opacity-60 cursor-pointer"
          >
            Proceed to Payment
          </button>
        </form>
        <h2 className="font-readex text-[1.1rem] md:text-[1.3rem]">Total: ${totalPrice}</h2>
      </div>
    </div>
  );
}
