'use client';

import Image from 'next/image';
import Stripe from 'stripe';
import { CartItemI, useCartStore } from '../../store/cart-store';

interface ProductDetailI {
  product: Stripe.Product;
}

export default function ProductDetail({ product }: ProductDetailI) {
  const price = product.default_price as Stripe.Price;
  const { items, addItem, minusItem } = useCartStore();
  const cartItem = items?.find((item: CartItemI) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const totalItemPrice = cartItem ? ((cartItem.price * cartItem.quantity) / 100).toFixed(2) : 0;

  // Function to add a new product to Zustand store(including localStorage)
  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-[400px]">
      <div className="flex flex-col md:flex-row gap-[20px] max-w-[350px] md:max-w-[600px] h-full mx-auto">
        {product.images && product.images[0] && (
          <div className="relative h-40 sm:h-60 w-full">
            <Image src={product.images[0]} alt={product.name} layout="fill" objectFit="contain" />
          </div>
        )}
        <div className="flex flex-col flex-auto gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-readex text-[1.2rem] text-center md:text-left">{product.name}</h2>
            {product.description && <p>{product.description}</p>}
          </div>
          <div className="flex justify-between items-center mt-auto">
            {quantity > 0 ? (
              <p className="text-[1rem] md:text-[1.2rem]">${totalItemPrice}</p>
            ) : (
              price?.unit_amount && (
                <p className="text-[1rem] md:text-[1.2rem]">
                  ${(price.unit_amount / 100).toFixed(2)}
                </p>
              )
            )}
            <div className="flex items-center p-[3px_10px] gap-[.5rem] md:gap-[.8rem] bg-gray-200 rounded-[4px]">
              <button
                onClick={() => minusItem(product.id)}
                className="duration-500 cursor-pointer hover:opacity-45"
              >
                -
              </button>
              <p className="text-[.8rem]">{quantity}</p>
              <button onClick={onAddItem} className="duration-500 cursor-pointer hover:opacity-45">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
