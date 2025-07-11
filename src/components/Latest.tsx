import pic1 from '../assets/latest-1.png';
import pic2 from '../assets/latest-2.png';
import pic3 from '../assets/latest-3.png';
import pic4 from '../assets/latest-4.png';

export default function Latest() {
  return (
    <section>
      <div className="flex flex-col gap-[55px]">
        <div className="flex flex-col gap-[.3rem] text-center">
          <h2
            className="text-[1.4rem] md:text-[1.8rem]
            lg:text-[2.625rem] leading-[30px] lg:leading-[60px] font-readex"
          >
            Shop our latest offers and categories
          </h2>
          <p
            className="text-[0.875rem] lg:text-[1rem] 
            max-w-[628px] mx-auto font-readex"
          >
            Discover exclusive deals and explore a wide range of categories. Shop our latest offers
            and find the perfect products for every need.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-[16px]">
          <div
            style={{ backgroundImage: `url(${pic1.src})` }}
            className="h-[350px] md:h-[300px] lg:h-[472px] px-0 py-[20px] md:py-0 md:px-[42px] lg:mb-[56px] shadow-latest 
            flex flex-col items-center md:items-start lg:items-end justify-end md:justify-center lg:justify-end
            bg-size-[300px] lg:bg-size-[500px_372px] 
            bg-position-[50%_0] md:bg-right lg:bg-top bg-no-repeat 
            col-start-1 col-end-13 lg:col-end-7"
          >
            <p className="text-[0.8rem] md:text-[1rem]">Laptops</p>
            <h3
              className="font-readex text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] 
              leading-[1.6rem] md:leading-[1.9rem] lg:leading-[2.375rem] 
              text-center md:text-left lg:text-right"
            >
              True Laptop
              <br /> Solution
            </h3>
          </div>
          <div
            style={{ backgroundImage: `url(${pic4.src})` }}
            className="h-[350px] md:h-[300px] lg:h-[270px] px-0 py-[20px] 
            md:py-0 md:px-[42px] lg:mb-[56px] shadow-latest 
            flex flex-col items-center md:items-start lg:items-end justify-end md:justify-center
            bg-size-[300px] md:bg-size-[300px_100%] lg:bg-size-[380px_270px]
            bg-position-[50%_0] md:bg-top-right lg:bg-top-left bg-no-repeat 
            col-start-1 col-end-13 lg:col-end-7"
          >
            <p className="text-[0.8rem] md:text-[1rem]">Watch</p>
            <h3
              className="font-readex text-[1.5rem] 
              md:text-[1.8rem] lg:text-[2rem] 
              leading-[1.6rem] md:leading-[1.9rem] 
              lg:leading-[2.375rem] text-center md:text-left lg:text-right"
            >
              Not just
              <br /> stylish
            </h3>
          </div>
          <div
            style={{ backgroundImage: `url(${pic2.src})` }}
            className="h-[350px] md:h-[300px] lg:h-[792px] 
            px-0 md:px-[42px] py-[20px] md:py-0 lg:py-[142px] shadow-latest 
            flex flex-col items-center md:items-start lg:items-center 
            justify-end md:justify-center lg:justify-end
            bg-size-[180px] md:bg-contain lg:bg-size-[305px_367px]
            bg-position-[50%_0] md:bg-right lg:bg-position-[0_100px] bg-no-repeat
            col-start-1 lg:col-start-7 col-end-13 lg:col-end-10 lg:row-start-1 lg:row-end-6"
          >
            <p className="text-[0.8rem] md:text-[1rem]">Phones</p>
            <h3
              className="font-readex text-[1.5rem] 
              md:text-[1.8rem] lg:text-[2rem] 
              leading-[1.6rem] md:leading-[1.9rem] 
              lg:leading-[2.375rem] text-center"
            >
              Your day to day
              <br className="visible md:hidden" /> life
            </h3>
          </div>
          <div
            style={{ backgroundImage: `url(${pic3.src})` }}
            className="h-[350px] md:h-[300px] lg:h-[792px] 
            px-0 md:px-[42px] py-[20px] md:py-0 lg:py-[142px] shadow-latest 
            flex flex-col items-center md:items-start lg:items-center 
            justify-end md:justify-center lg:justify-end
            bg-size-[200px] md:bg-size-[205px_267px] lg:bg-size-[305px_367px] bg-position-[50%_0] md:bg-right-bottom
            lg:bg-position-[0_60%] bg-no-repeat
            col-start-1 lg:col-start-10 col-end-13 lg:row-start-1 lg:row-end-6"
          >
            <p className="text-[0.8rem] md:text-[1rem]">Tablet</p>
            <h3
              className="font-readex text-[1.5rem] 
              md:text-[1.8rem] lg:text-[2rem] 
              leading-[1.6rem] md:leading-[1.9rem] 
              lg:leading-[2.375rem] text-center"
            >
              Empower your
              <br className="visible md:hidden" /> work
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
