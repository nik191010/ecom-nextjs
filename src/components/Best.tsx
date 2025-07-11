import Image from 'next/image';

import pic1 from '../assets/best-1.png';
import pic2 from '../assets/best-2.png';
import pic3 from '../assets/best-3.png';
import Link from 'next/link';

export default function Best() {
  return (
    <section>
      <div className="flex flex-col gap-[55px]">
        <div className="flex flex-col gap-[.3rem] text-center">
          <h2
            className="text-[1.4rem] md:text-[1.8rem]
            lg:text-[2.625rem] leading-[30px] lg:leading-[60px] font-readex"
          >
            See the best around here
          </h2>
          <p
            className="text-[0.875rem] lg:text-[1rem] 
            max-w-[628px] mx-auto font-readex"
          >
            Browse our top-selling and most popular products available near you.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-s gap-[28px]">
          <div className="flex flex-col items-center bg-[#F8F9FA] p-[21px_40px_0_40px] lg:p-[41px_80px_0_80px] rounded-[16px]">
            <div className="flex flex-col items-center flex-auto gap-[30px_0]">
              <div className="flex flex-col gap-[4px] text-center  font-readex">
                <p className="text-[0.8rem] leading-[1.05rem]">Smart light bulb pack</p>
                <h3 className="text-[1.25rem] md:text-[1.45rem] xl:text-[1.75rem] leading-[1.6rem] xl:leading-[2.188rem]">
                  Latest and greatest
                </h3>
              </div>
              <Link href="/products">
                <button
                  className="text-[.8rem] mt-auto bg-transparent border-1 border-black
                rounded-[20px] w-[170px] py-[.4rem] s992:py-[.6rem] cursor-pointer transition-500
                hover:bg-[#c0d1cc] hover:text-white hover:border-transparent transition-colors duration-300"
                >
                  Explore
                </button>
              </Link>
              <Image
                src={pic1}
                height={0}
                width={0}
                style={{ width: '150px', height: '159px', objectFit: 'contain' }}
                alt="Latest and greatest"
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#F8F9FA] p-[21px_40px_0_40px] lg:p-[41px_80px_0_80px] rounded-[16px]">
            <div className="flex flex-col items-center flex-auto gap-[30px_0]">
              <div className="flex flex-col gap-[4px] text-center font-readex">
                <p className="text-[0.7rem] xl:text-[0.813rem] leading-[1.05rem]">
                  Smart light bulb pack
                </p>
                <h3 className="text-[1.25rem] md:text-[1.45rem] xl:text-[1.75rem] leading-[1.6rem] xl:leading-[2.188rem]">
                  Best selling
                </h3>
              </div>
              <Link href="/products">
                <button
                  className="text-[.8rem] mt-auto bg-transparent border-1 border-black
                rounded-[20px] w-[170px] py-[.4rem] s992:py-[.6rem] cursor-pointer transition-500
                hover:bg-[#c0d1cc] hover:text-white hover:border-transparent transition-colors duration-300"
                >
                  Explore
                </button>
              </Link>
              <Image
                src={pic2}
                height={0}
                width={0}
                style={{ width: '150px', height: '159px', objectFit: 'contain' }}
                alt="Best selling"
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#F8F9FA] p-[21px_40px_0_40px] lg:p-[41px_80px_0_80px] rounded-[16px]">
            <div className="flex flex-col items-center flex-auto gap-[30px_0]">
              <div className="flex flex-col gap-[4px] text-center font-readex">
                <p className="text-[0.7rem] xl:text-[0.813rem] leading-[1.05rem]">
                  Smart light bulb pack
                </p>
                <h3 className="text-[1.25rem] md:text-[1.45rem] xl:text-[1.75rem] leading-[1.6rem] xl:leading-[2.188rem]">
                  Every product
                </h3>
              </div>
              <Link href="/products">
                <button
                  className="text-[.8rem] mt-auto bg-transparent border-1 border-black
                rounded-[20px] w-[170px] py-[.4rem] s992:py-[.6rem] cursor-pointer transition-500
                hover:bg-[#c0d1cc] hover:text-white hover:border-transparent transition-colors duration-300"
                >
                  Explore
                </button>
              </Link>
              <Image
                src={pic3}
                height={0}
                width={0}
                style={{ width: '150px', height: '159px', objectFit: 'contain' }}
                alt="Every product"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
