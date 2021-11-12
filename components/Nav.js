import Image from "next/image";
import Link from "next/link";
import { BsHandbagFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

function Nav() {
  return (
    <header className="absolute w-screen top-0 z-20 text-gray-50 py-4 md:py-8 md:px-2 bg-transparent">
      <div className="flex items-center justify-between max-w-6xl px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="flex-center w-40 xs:w-60 cursor-pointer ">
            <Image
              src="/logo.png"
              alt="Company Logo"
              objectFit="contain"
              height={30}
              width={220}
            />
          </a>
        </Link>

        <div className="hidden lg:flex gap-8 font-thin text-lg tracking-wider">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <span className="text-lg">Shop</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <span className="text-lg">Collections</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <span className="text-lg">More About Our Panties</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:gap-8">
          <BsSearch className="w-4 lg:w-6 h-4 lg:h-6 hidden lg:block" />
          <BsHandbagFill className="w-5 h-5 lg:w-7 lg:h-7" />
          <div className="flex flex-col gap-[8px] lg:hidden">
            <div className="w-6 h-px bg-gray-50"></div>
            <div className="w-6 h-px bg-gray-50"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
