import ProductsList from '@/components/ProductsList';
import { stripe } from '@/lib/stripe';

export default async function ProductsPage() {
  // Getting products from Stipe
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  });

  return (
    <div className="flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-[1.5rem] md:text-[2rem] xl:text-[3rem] leading-[30px] md:leading-[45px] xl:leading-[65px] font-readex">
        All products
      </h1>

      <ProductsList products={products.data} />
    </div>
  );
}
