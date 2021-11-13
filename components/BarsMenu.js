import { useRouter } from "next/router";
export default function BarsMenu({ menuOpen, lockNav, setMenuOpen }) {
  const router = useRouter();

  const navBarColor = router.pathname === "/" ? "bg-gray-50" : "bg-gray-700";

  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className="cursor-pointer relativen w-8 h-8 flex-center lg:hidden"
    >
      <div
        className={`absolute w-6 h-px transform -translate-y-1 transition ${
          lockNav ? "bg-brand-red" : `${navBarColor}`
        } ${menuOpen && "translate-y-0 rod-rotate-45 origin-center"} `}
      ></div>
      <div
        className={`w-6 h-px transform transition translate-y-1 ${
          lockNav ? "bg-brand-red" : `${navBarColor}`
        } ${menuOpen && "translate-y-0 -rod-rotate-45 origin-center"}`}
      ></div>
    </div>
  );
}
