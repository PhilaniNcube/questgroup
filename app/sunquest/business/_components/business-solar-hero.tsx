import Image from "next/image";

const BusinessSolarHero = () => {
  return (
    <div className="bg-teal-700 grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] relative">
      <div className="absolute inset-0 bg-teal-700/70 lg:bg-teal-700/0">
        <div className="container h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center h-full pr-10">
            <h1 className="text-white text-5xl font-bold">
              Solar power for your business
            </h1>
            <p className="text-white text-xl mt-4">
              Invest in a reliable, independent energy source, shield your
              business from grid outages and rising costs.
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="w-full h-[40h]">
        <Image
          src="/images/factory-solar.jpg"
          width={1920}
          height={2880}
          alt="Solar Home"
          className="w-full aspect-video object-cover"
        />
      </div>
    </div>
  );
};
export default BusinessSolarHero;
