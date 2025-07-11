'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import pic1 from '../assets/slider-1.webp';
import pic2 from '../assets/slider-2.webp';
import pic3 from '../assets/slider-3.webp';
import Arrow from '../assets/vector/arrow-icon.svg';
import Link from 'next/link';

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

// Data for the Carousel
const carouselDesc = [
  {
    image: pic1,
    header: `The new phones are here take a look`,
    text: 'Now that’s smart. Our latest iPhone models are built for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly.',
  },
  {
    image: pic2,
    header: 'Choose your new MacBook Pro',
    text: 'MacBook Pro features the most advanced lineup of chips ever built for a pro laptop. Phenomenal single- and multithreaded CPU performance, faster unified memory, enhanced machine learning accelerators — the M4 family of chips gives you the kind of speed and capability you’ve never thought possible.',
  },
  {
    image: pic3,
    header: 'iPad. Touch, draw, and type on one magical device',
    text: 'Versatility comes standard.There’s never been a more joyful way of getting stuff done than with iPad. Designed for Multi-Touch, simple gestures help you get around smoothly and quickly.',
  },
];

export default function Carousel({ autoSlide = true, autoSlideInterval = 2000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // If autoSlide is true and the user doesnt't hover over the carousel
  // change the slides according to the interval(2000ms etc.).
  // Clear the interval in order to prevent interval stacking

  useEffect(() => {
    if (autoSlide && !isHovered) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselDesc.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, carouselDesc.length, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselDesc.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselDesc.length) % carouselDesc.length);
  };

  return (
    <section>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full mx-auto bg-olive rounded-[16px]"
      >
        <div className="overflow-hidden relative py-[2rem] xl:p-0 h-[550px]">
          {carouselDesc.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row gap-[1.5rem] md:gap-0 items-center md:text-left p-[1rem_2rem_4rem_2rem] md:p-[2rem] md:px-[56px] 
              absolute inset-0 transition-transform duration-500 transform ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div
                className="flex flex-col items-center md:items-start 
            text-center md:text-left gap-[1rem] md:gap-[1.2rem] w-full md:max-w-[400px] xl:max-w-[588px]"
              >
                <h2 className="text-[1.5rem] md:text-[2rem] xl:text-[3rem] leading-[30px] md:leading-[45px] xl:leading-[65px] font-readex">
                  {item.header}
                </h2>
                <p className="max-w-[565px]">{item.text}</p>
                <Link href="/products">
                  <button
                    className="text-[.8rem] bg-transparent border-1 border-black
                rounded-[20px] w-[170px] py-[.4rem] s992:py-[.6rem] cursor-pointer transition-500
                hover:bg-[#c0d1cc] hover:text-white hover:border-transparent transition-colors duration-300"
                  >
                    Explore
                  </button>
                </Link>
              </div>
              <div className="relative md:absolute top-0 right-0 w-[250px] md:w-[320px] s992:w-[447px] xl:w-[647px] h-[250px] md:h-full">
                <Image
                  src={item.image.src}
                  alt={`Slide ${index}`}
                  fill={true}
                  className="w-full h-full object-contain xl:object-cover"
                />
              </div>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
            {carouselDesc.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="py-2 cursor-pointer"
              >
                <div className="relative w-[80px] sm:w-[100px] md:w-[150px] h-[2px] md:h-[3px] rounded-full mx-1 bg-gray-400">
                  <div
                    className={`absolute left-0 top-0 h-full  bg-gray-800 ${index === currentIndex && 'animate-line-fill'} `}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer"
          onClick={prevSlide}
        >
          <Arrow className="hover:opacity-45 duration-300" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rotate-y-180 cursor-pointer"
          onClick={nextSlide}
        >
          <Arrow className="hover:opacity-45 duration-300" />
        </button>
      </div>
    </section>
  );
}
