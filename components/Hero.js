import Image from "next/image";
import { BsMouse } from "react-icons/bs";
export default function Hero() {
  const imgSrc = "/hero-dev.jpg";
  const mobileImgSrc = "/mobile-hero.png";
  const altText = "Hero image";
  return (
    <div className="relative flex-col justify-center section-full px-4">
      <div className="">
        <Image
          priority={true}
          src={imgSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          objectPosition="66% 50%"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-transparent opacity-40"></div>
      <div className="relative flex flex-col w-full md:w-1/2 lg:w-[560px] px-6 md:px-8 lg:px-12 py-8 lg:ml-24 gap-6 lg:gap-12">
        <div className="absolute inset-0 rod-glass"></div>
        <h2 className="relative font-bold text-3xl lg:text-5xl text-gray-50">
          Buy Our Stuff
        </h2>
        <p className="relative tracking-wide text-gray-50 text-lg">
          Adaptive underwear that absorbs your period
        </p>
        <div className="relative w-full">
          <button className="btn-primary">Shop Collection</button>
        </div>
      </div>
    </div>
  );
}
