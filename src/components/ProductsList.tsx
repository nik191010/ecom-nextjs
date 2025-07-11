'use client';

import Stripe from 'stripe';
import ProductCard from './ProductCard';
import { useState } from 'react';

interface ProductsListI {
  products: Stripe.Product[];
}

export default function ProductsList({ products }: ProductsListI) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // The same function to filter the products
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });

  return (
    <div className="flex flex-col gap-[40px]">
      <div className="text-center">
        <input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="peer w-[300px] sm:w-[350px] px-[45px_10px] h-[30px] py-2 border-1 border-solid border-black text-lg rounded-full bg-transparent transition-all 
          duration-500 ease-in-out bg-[url('../assets/vector/magnifier-icon.svg')] 
          bg-no-repeat bg-position-[.5rem] bg-size-[auto_24px] bg-[2%_50%] bg-[length:30px] 
          filter brightness-[1.7] focus:bg-white focus:brightness-100 
          placeholder-shown:brightness-[1.7]"
        />
      </div>
      <ul className="flex flex-wrap justify-center xl:justify-start gap-[40px] sm:gap-[10px]">
        {filteredProducts.map((product, key) => {
          return (
            <li key={key}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
