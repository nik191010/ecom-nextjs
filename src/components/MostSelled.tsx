import Image from 'next/image';

import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import Link from 'next/link';

export default async function MostSelled() {
  // Getting a list of products from Stripe
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  });
  return (
    <section>
      <div className="flex flex-col gap-[55px]">
        <div className="flex flex-col gap-[.3rem] text-center">
          <h2
            className="text-[1.4rem] md:text-[1.8rem]
            lg:text-[2.625rem] leading-[30px] lg:leading-[60px] font-readex"
          >
            Save on our most selled items
          </h2>
          <p
            className="text-[0.875rem] lg:text-[1rem] 
            max-w-[628px] mx-auto font-readex"
          >
            Don’t miss out — save big on our top-selling items!
          </p>
        </div>
        <div
          className="flex flex-wrap md:flex-nowrap justify-center lg:justify-between gap-[60px_10px] lg:gap-[0_27.5px]
        text-center md:text-left"
        >
          {products.data.slice(0, 4).map((product: Stripe.Product) => (
            <div key={product.id} className="flex flex-col gap-[10px] w-full max-w-[302px]">
              {product.images && product.images[0] && (
                <div className="relative h-30 sm:h-40 w-full">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
              <div className="flex flex-col gap-[15px] md:gap-[25px] flex-auto">
                <div className="flex flex-col gap-[9px]">
                  <h3
                    className="font-readex text-[1.2rem] md:text-[1.3rem]
                   lg:text-[1.375rem] md:leading-[1.5rem] lg:leading-[1.719rem]
                   hover:opacity-40 duration-300"
                  >
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-[0.875rem] leading-[1.05rem] text-[#4B4B4B]">
                    {product.description}
                  </p>
                </div>
                <p className="text-[1rem] md:text-[1.125rem] leading-[1rem] md:leading-[1.35rem] mt-auto">
                  {typeof (product.default_price as Stripe.Price)?.unit_amount === 'number' &&
                    `$${((product.default_price as Stripe.Price).unit_amount! / 100).toFixed(2)}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
