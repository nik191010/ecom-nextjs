import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';

interface ProductCardI {
  product: Stripe.Product;
}

export default function ProductCard({ product }: ProductCardI) {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="flex flex-col h-full gap-[55px]">
      <div
        className="flex flex-col h-full items-center gap-[20px]
        w-[320px] sm:w-[360px] s860:w-[400px] rounded-[16px]
        p-[20px_15px] shadow-lg"
      >
        {product.images && product.images[0] && (
          <div className="relative h-40 sm:h-60 w-full">
            <Image src={product.images[0]} alt={product.name} layout="fill" objectFit="contain" />
          </div>
        )}
        <div className="flex flex-col flex-1 items-center gap-[20px] w-full">
          <div className="flex flex-col items-center gap-[10px]">
            <h2 className="text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-readex">
              {product.name}
            </h2>
            {price?.unit_amount && (
              <p className="text-[1rem] md:text-[1.2rem]">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
            {product.description && <p>{product.description}</p>}
          </div>

          <Link
            className="inline-block text-center mt-auto py-[10px] md:py-[15px] 
            w-[150px] md:w-[200px] max-w-full
          bg-black text-white rounded-[12px] 
            duration-500 hover:opacity-60"
            href={`/products/${product.id}`}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
