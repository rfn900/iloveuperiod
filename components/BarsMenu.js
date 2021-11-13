export default function BarsMenu({
  menuOpen,
  lockNav,
  navBarColor,
  setMenuOpen,
}) {
  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className="cursor-pointer relativen w-8 h-8 flex-center lg:hidden"
    >
      <div
        className={`absolute w-6 h-px transform -translate-y-1 transition ${
          lockNav ? "bg-brand-red" : `bg-${navBarColor}`
        } ${menuOpen && "translate-y-0 rod-rotate-45 origin-center"} `}
      ></div>
      <div
        className={`w-6 h-px transform transition translate-y-1 ${
          lockNav ? "bg-brand-red" : `bg-${navBarColor}`
        } ${menuOpen && "translate-y-0 -rod-rotate-45 origin-center"}`}
      ></div>
    </div>
  );
}
