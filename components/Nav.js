import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsHandbagFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import BarsMenu from "./BarsMenu";
import { useActiveMobileMenu } from "../context/activeMobileMenu";

const menuLinks = [
  {
    linkText: "Shop",
    linkTo: "/shop",
  },
  {
    linkText: "Collections",
    linkTo: "/collections",
  },
  {
    linkText: "More About Our Panties",
    linkTo: "/about-our-period-pants",
  },
];

function Nav() {
  const [lockNav, setLockNav] = useState(false);
  const { activeMobileMenu } = useActiveMobileMenu();
  const router = useRouter();

  let navBarColor =
    router.pathname === "/" && !activeMobileMenu
      ? "text-gray-50 bg-transparent"
      : "text-brand-red rod-glass bg-gray-50 bg-opacity-50";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setLockNav(true) : setLockNav(false);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        window.scrollY > 40 ? setLockNav(true) : setLockNav(false);
      });
  }, [activeMobileMenu]);

  return (
    <header
      className={`${
        lockNav
          ? "fixed rod-glass bg-gray-50 bg-opacity-50 text-brand-red"
          : navBarColor + " absolute"
      } transition duration-500 w-screen top-0 z-50 py-4 md:px-2`}
    >
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className=" flex-center cursor-pointer text-xl lg:text-2xl">
            <p className="uppercase font-semi mr-2 font-medium tracking-widest ">
              I Love u
            </p>
            <span className="tracking-widest font-thin">PERIOD</span>
          </a>
        </Link>

        <div className="hidden lg:flex gap-8 font-thin text-lg tracking-wider">
          {menuLinks.map((linkEl, index) => {
            return (
              <Link key={index} href={linkEl.linkTo} passHref>
                <a className="cursor-pointer relative group">
                  <span className="text-lg">{linkEl.linkText}</span>
                  <span
                    className={`absolute h-1 w-full ${
                      lockNav || router.pathname !== "/" // Will only change bg color in homepage
                        ? "bg-brand-red bg-opacity-75"
                        : "bg-brand-green-light"
                    } rounded-xl transform scale-x-0 bottom-0 duration-300 ease-in-out left-0 transition origin-left group-hover:scale-x-100 `}
                  ></span>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3 lg:gap-8">
          <BsSearch className="w-4 lg:w-5 h-4 lg:h-5 hidden lg:block" />
          <BsHandbagFill className="w-5 h-5 lg:w-6 lg:h-6" />
          <BarsMenu promoBarInView={!lockNav} />
        </div>
      </div>
    </header>
  );
}

export default Nav;
