'use client';

import CartIcon from '../assets/vector/cart-icon.svg';
import LogoIcon from '../assets/vector/logo-icon.svg';
import { TfiClose } from 'react-icons/tfi';

import Link from 'next/link';
import { useGeneralStore } from '../../store/general-store';
import useOutsideClick from '@/lib/useOutsideClick ';
import { useEffect, useState } from 'react';
import Stripe from 'stripe';
import axios from 'axios';
import Image from 'next/image';
import { useCartStore } from '../../store/cart-store';

export default function Navbar() {
  const { openDrawer, setOpenDrawer, openMobileMenu, setOpenMobileMenu } = useGeneralStore();
  // All items that are kept in Zustand
  const items = useCartStore((state) => state.items);
  const itemsQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const ref = useOutsideClick(() => setOpenMobileMenu(false));
  const [products, setProducts] = useState<Stripe.Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // It's a client-side component, so in order to use env. variables
  // to get the information about products from Stripe
  // we need to use an API request
  useEffect(() => {
    try {
      axios.get('/api/stripe/products').then((res) => {
        const data = res.data;
        setProducts(data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Prevent scrolling if the mobile menu or the drawer is open
  useEffect(() => {
    if (openDrawer || openMobileMenu) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [openDrawer, openMobileMenu]);

  // Close the mobile menu, open the drawer
  const closeMobileOpenCart = () => {
    setOpenMobileMenu(false);
    setOpenDrawer(true);
  };

  // Gives back the products that match the search request by name or desription

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return nameMatch || descriptionMatch;
  });

  // Close the mobile menu and clear the search
  // when the user chooses a product
  const clearSearchTerm = () => {
    setSearchTerm('');
    setOpenMobileMenu(false);
  };

  return (
    <div className="mx-auto max-w-[1264px] w-[100%] px-[15px] ">
      <nav className="py-[30px] w-[100%] flex justify-between items-center z-0">
        <div>
          <Link href="/">
            <LogoIcon className="w-full h-full text-black hover:text-[#c0d1cc] transition-colors duration-300" />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-[2rem] uppercase text-[.9rem]">
          <li className="hover:opacity-60 transition-all duration-500 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:opacity-60 transition-all duration-500 ease-in-out">
            <Link href="/products">All products</Link>
          </li>
          <li className="hover:opacity-60 transition-all duration-500 ease-in-out">
            <Link href="/checkout">Checkout</Link>
          </li>
        </ul>
        <div className="hidden lg:flex gap-[1rem]">
          <div className="flex relative">
            <form>
              <div className="flex flex-col relative">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="search"
                  placeholder="Search..."
                  className="peer w-[160px] px-[45px_10px] h-[30px] py-2 border- border-white 
                  duration-500 ease-in-out bg-[url('../assets/vector/magnifier-icon.svg')] 
                  text-lg rounded-full bg-transparent transition-all 
                  filter brightness-[1.7] focus:w-[250px] focus:bg-white focus:brightness-100 
                  bg-no-repeat bg-position-[.5rem] bg-size-[auto_24px] bg-[2%_50%] bg-[length:30px] 
                  placeholder-shown:w-[170px] placeholder-shown:brightness-[1.7]"
                />
                <ul
                  className={`${searchTerm.length > 0 ? 'block' : 'hidden'} flex flex-col gap-[7px]
                  h-[100px] w-[250px] p-[5px_10px] 
                bg-white shadow-[5px_5px_5px_5px_rgba(0,0,0,0.31)]
                  absolute top-[32px] right-0 rounded-[5px] z-1
                  overflow-auto`}
                >
                  {filteredProducts.map((product, index) => (
                    <Link
                      onClick={() => setSearchTerm('')}
                      key={product.id}
                      href={`/products/${product.id}`}
                    >
                      <li
                        className={`flex items-center gap-[5px] ${index === filteredProducts.length - 1 ? 'border-0' : ' border-b'} pb-[2px]`}
                      >
                        <div className="relative h-[30px] w-[30px]">
                          {product.images && product.images[0] && (
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              layout="fill"
                              objectFit="contain"
                            />
                          )}
                        </div>
                        <p className="text-[.9rem]">{product.name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </form>
          </div>
          <div className="relative w-[40px] h-[24px]">
            <CartIcon
              onClick={setOpenDrawer}
              className="w-full h-full text-black hover:opacity-40 duration-500 cursor-pointer"
            />
            {items.length > 0 && (
              <span
                className="absolute right-[-5px] top-[-10px] w-[12px] h-[12px] p-[10px] bg-[#DC143C]
              text-white text-[.7rem] flex items-center justify-center rounded-full"
              >
                {itemsQuantity}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => setOpenMobileMenu(true)}
          className={`flex lg:hidden flex-col justify-center items-center ${
            openMobileMenu ? 'gap-0 invisible' : 'gap-[2px] visible'
          } cursor-pointer z-0`}
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-8 rounded-sm ${
                      openMobileMenu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-8 rounded-sm my-0.5 ${openMobileMenu ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-8 rounded-sm ${
                      openMobileMenu ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
          ></span>
        </button>
      </nav>
      <div
        ref={ref}
        className={`absolute top-0 right-0 bg-[#F8F9FA] max-w-[420px] w-full 
   min-h-dvh shadow-[-10px_4px_24px_0px_#0000001a] p-[40px_25px]
   flex flex-col transform duration-300 ease-in-out ${
     openMobileMenu ? 'translate-x-[0]' : 'translate-x-[100%]'
   } z-10`}
      >
        <div className="flex flex-col gap-[2rem]">
          <ul className="flex flex-col gap-[.8rem] md:gap-[1rem] uppercase text-[.8rem] md:text-[1rem] lg:text-[1.2rem]">
            <li
              onClick={() => setOpenMobileMenu(false)}
              className="hover:opacity-60 transition-all duration-500 ease-in-out"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => setOpenMobileMenu(false)}
              className="hover:opacity-60 transition-all duration-500 ease-in-out"
            >
              <Link href="/products">All products</Link>
            </li>
            <li
              onClick={() => setOpenMobileMenu(false)}
              className="hover:opacity-60 transition-all duration-500 ease-in-out"
            >
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>
          <div className="flex justify-between items-center gap-[1rem]">
            <div className="relative">
              <form>
                <div className="flex flex-col relative">
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="search"
                    placeholder="Search..."
                    className="peer w-[160px] px-[45px_10px] h-[30px] py-2 border- border-white 
                  duration-500 ease-in-out bg-[url('../assets/vector/magnifier-icon.svg')] 
                  text-lg rounded-full bg-transparent transition-all 
                  filter brightness-[1.7] focus:w-[250px] focus:bg-white focus:brightness-100 
                  bg-no-repeat bg-position-[.5rem] bg-size-[auto_24px] bg-[2%_50%] bg-[length:30px] 
                  placeholder-shown:w-[170px] placeholder-shown:brightness-[1.7]"
                  />
                  <ul
                    className={`${searchTerm.length > 0 && openMobileMenu ? 'block' : 'hidden'} lg:hidden flex flex-col gap-[7px]
                  h-[100px] w-[250px] p-[5px_10px] 
                bg-white shadow-[5px_5px_5px_5px_rgba(0,0,0,0.31)]
                  absolute top-[32px] right-0 rounded-[5px] z-1
                  overflow-auto`}
                  >
                    {filteredProducts.map((product, index) => (
                      <Link
                        onClick={clearSearchTerm}
                        key={product.id}
                        href={`/products/${product.id}`}
                      >
                        <li
                          className={`flex items-center gap-[5px] ${index === filteredProducts.length - 1 ? 'border-0' : ' border-b'} pb-[2px]`}
                        >
                          <div className="relative h-[30px] w-[30px]">
                            {product.images && product.images[0] && (
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                layout="fill"
                                objectFit="contain"
                              />
                            )}
                          </div>
                          <p className="text-[.9rem]">{product.name}</p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </form>
            </div>
            <div className="relative w-[30px] md:w-[40px] h-[18px] md:h-[24px]">
              <CartIcon
                onClick={closeMobileOpenCart}
                className="w-full h-auto text-black hover:opacity-40  transition-colors duration-300 cursor-pointer"
              />
              {items.length > 0 && (
                <span
                  className="absolute right-[-5px] top-[-10px] w-[12px] h-[12px] p-[10px] bg-[#DC143C]
              text-white text-[.7rem] flex items-center justify-center rounded-full"
                >
                  {itemsQuantity}
                </span>
              )}
            </div>
          </div>
        </div>
        <TfiClose
          onClick={() => setOpenMobileMenu(false)}
          className="absolute top-[10px] right-[30px] text-[1rem] md:text-[1.5rem] cursor-pointer duration-500 hover:opacity-45"
        />
      </div>
    </div>
  );
}
