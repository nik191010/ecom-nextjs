import Image from 'next/image';

import pic1 from '../assets/ideas-1.jpg';

export default function Ideas() {
  return (
    <section>
      <div className="flex flex-col gap-[55px]">
        <div className="flex flex-col gap-[.3rem] text-center">
          <h2
            className="text-[1.4rem] md:text-[1.8rem]
            lg:text-[2.625rem] leading-[30px] lg:leading-[60px] font-readex"
          >
            Ideas have a place here
          </h2>
          <p
            className="text-[0.875rem] lg:text-[1rem] 
            max-w-[628px] mx-auto font-readex"
          >
            Our new Limited Edition
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-[35px]">
          <div className="w-full lg:w-[50%]">
            <Image
              src={pic1}
              style={{ objectFit: 'cover', width: '100%', height: 'auto', maxHeight: '100%' }}
              width={620}
              height={420}
              alt="Latest and greatest"
            />
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-[15px] lg:gap-[23px] text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] leading-[1.4rem] lg:leading-[1.6rem] xl:leading-[1.875rem]">
            <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
            <p>Road Design Handbook For The International Road...</p>
            <p>The Best Kept Secrets About Creative People</p>
            <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
