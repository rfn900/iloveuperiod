import Image from "next/image";
export default function Hero() {
  const imgSrc = "/hero-dev.jpg";
  const altText = "Hero image";
  return (
    <div className="relative flex-col justify-center section-full px-4">
      <Image
        priority={true}
        src={imgSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        objectPosition="66% 50%"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-transparent opacity-40"></div>
      <div className="relative flex flex-col overflow-hidden w-full rounded-xl md:w-1/2 lg:w-[560px] px-6 md:px-8 lg:px-12 py-8 xl:ml-24 gap-6 md:gap-10 xl:gap-12">
        <div className="absolute inset-0 rod-glass"></div>
        <h2 className="relative uppercase font-thin text-3xl lg:text-5xl text-gray-50">
          Buy Our Stuff
        </h2>
        <p className="relative tracking-wide text-gray-50 text-lg lg:text-xl">
          Adaptive underwear that absorbs your period
        </p>
        <div className="relative w-full">
          <button className="btn-primary">Shop Collection</button>
        </div>
      </div>
    </div>
  );
}
