import Link from "next/link";

function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">I LOVE U PERIOD</span>
          </a>
        </Link>
        <div className="flex items-center gap-8">
          <BsSearch className="w=6 h-7" />
          <BsHandbagFill className="w-7 h-7" />
        </div>
      </div>
    </header>
  );
}

export default Nav;
