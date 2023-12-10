import Image from "next/image"

const UtilitiesHero = () => {
  return (
    <section className="relative isolate">
      <Image
        src="/images/neighbourhood.png"
        width={1280}
        height={719}
        alt="Home"
        className="object-cover aspect-[6/4] lg:aspect-[6/2] w-full object-center"
      />
      <div className="absolute inset-0 z-0 flex justify-center items-center text-white bg-slate-700/70">
        <h1 className="text-3xl text-center md:text-5xl lg:text-7xl max-w-[13ch] font-semibold">
          Water Providers And Utilities
        </h1>
      </div>
    </section>
  );
};
export default UtilitiesHero;
