import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsHandbagFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import BarsMenu from "./BarsMenu";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navBarColor =
    router.pathname === "/" ? "text-gray-50" : "text-gray-700";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setLockNav(true) : setLockNav(false);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        window.scrollY > 40 ? setLockNav(true) : setLockNav(false);
      });
  }, []);

  return (
    <header
      className={`${
        lockNav
          ? "fixed rod-glass bg-gray-50 bg-opacity-50 text-brand-red"
          : "text-" + navBarColor + " absolute bg-transparent"
      } transition duration-500 w-screen top-0 z-20 py-4 md:px-2 `}
    >
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className=" flex-center cursor-pointer">
            <p className="uppercase font-semi mr-2 font-medium tracking-widest text-xl lg:text-3xl">
              I Love u
            </p>
            <span className="tracking-widest text-xl lg:text-3xl font-thin">
              PERIOD
            </span>
          </a>
        </Link>

        <div className="hidden lg:flex gap-8 font-thin text-lg tracking-wider">
          {menuLinks.map((linkEl, index) => {
            return (
              <Link key={index} href={linkEl.linkTo} passHref>
                <a className="cursor-pointer">
                  <span className="text-lg">{linkEl.linkText}</span>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3 lg:gap-8">
          <BsSearch className="w-4 lg:w-6 h-4 lg:h-6 hidden lg:block" />
          <BsHandbagFill className="w-5 h-5 lg:w-7 lg:h-7" />
          <BarsMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            lockNav={lockNav}
          />
        </div>
      </div>
    </header>
  );
}

export default Nav;
