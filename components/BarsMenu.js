import { useRouter } from "next/router";
import { useActiveMobileMenu } from "../context/activeMobileMenu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function BarsMenu({ promoBarInView }) {
  const { activeMobileMenu, setActiveMobileMenu } = useActiveMobileMenu();
  const router = useRouter();

  const handleClick = (e) => {
    activeMobileMenu
      ? enableBodyScroll(document.body)
      : disableBodyScroll(document.body);
    setActiveMobileMenu(!activeMobileMenu);
  };
  const navBarColor =
    router.pathname === "/" && !activeMobileMenu ? "bg-gray-50" : "bg-gray-700";

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer relativen w-8 h-8 flex-center lg:hidden"
    >
      <div
        className={`absolute w-6 h-px transform -translate-y-1 transition duration-500 ${
          !promoBarInView ? "bg-brand-red" : `${navBarColor}`
        } ${activeMobileMenu && "translate-y-0 rod-rotate-45 origin-center"} `}
      ></div>
      <div
        className={`w-6 h-px transform transition duration-500 translate-y-1 ${
          !promoBarInView ? "bg-brand-red" : `${navBarColor}`
        } ${activeMobileMenu && "translate-y-0 -rod-rotate-45 origin-center"}`}
      ></div>
    </div>
  );
}
