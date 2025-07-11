import Link from 'next/link';
import LogoIcon from '../assets/vector/logo-icon.svg';

export default function Footer() {
  return (
    <footer className=" bg-[#F8F9FA] p-[20px_15px] sm:p-[45px_73px_64px_73px]">
      <div className="flex flex-wrap gap-[40px] md:gap-0 justify-between mx-auto max-w-[1294px] w-[100%]">
        <div className="w-full md:w-[40%]">
          <Link href="/">
            <LogoIcon className="w-full text-black hover:text-[#c0d1cc] transition-colors duration-300" />
          </Link>
        </div>
        <div className="flex flex-row flex-wrap w-full md:w-[60%] justify-between gap-[28px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[1.375rem] leading-[1.719rem] font-readex">All products</h2>
            <ul className="flex flex-col gap-[14px] text-[1.063rem] leading-[1.35rem]">
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Phones
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Watch
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Tablet
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Laptops
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[1.375rem] leading-[1.719rem] font-readex">Company</h2>
            <ul className="flex flex-col gap-[14px] text-[1.063rem] leading-[1.35rem]">
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[1.375rem] leading-[1.719rem] font-readex">Support</h2>
            <ul className="flex flex-col gap-[14px] text-[1.063rem] leading-[1.35rem]">
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Style Guide
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Licensing
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Change Log
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[1.375rem] leading-[1.719rem] font-readex">Follow Us</h2>
            <ul className="flex flex-col gap-[14px] text-[1.063rem] leading-[1.35rem]">
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-15 duration-300" href="/">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
