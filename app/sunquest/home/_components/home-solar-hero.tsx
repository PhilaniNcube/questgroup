import Image from "next/image";

const HomeSolarHero = () => {
  return (
    <div className="bg-brand grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] max-h-[45vh] relative">
      <div className="absolute inset-0 bg-brand/70 lg:bg-brand/0">
        <div className="container h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center h-full pr-10">
            <h1 className="text-white text-3xl lg:text-5xl font-bold">
              Solar for your home
            </h1>
            <p className="text-white text-md md:text-xl mt-4">
              Combining solar, storage and EV charging, Sunquest & Sigenergy
              offers an all-in-one Home Energy Solution that helps you lower
              your utility bill and reliance on the grid. Simple to install,
              easy to use, smart and safe all around.
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="w-full h-full overflow-clip flex">
        <Image
          src="/images/solar-home.jpg"
          width={1920}
          height={2880}
          alt="Solar Home"
          className="w-full h-[40vh] object-cover"
        />
      </div>
    </div>
  );
};
export default HomeSolarHero;
