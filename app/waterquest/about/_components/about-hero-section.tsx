import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <section className="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <Image
            src="/images/home.png"
            width={1024}
            height={1024}
            alt="Home"
            className="w-full object-cover aspect-video"
          />
        </div>
        <div className="w-full py-10 flex flex-col justify-center items-start container px-4 lg:px-12 gap-4">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold text-blue-500">
            About Us
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <p className="text-sm md:text-md lg:text-lg text-slate-500">
              Waterquest: Leader in Sustainable Water Solutions and Solar
              Pumping for Southern Africa&apos;s Residential and Agricultural Needs
            </p>
            <div>
             <Image src="/images/approved-partner.png" width={1866} height={470} alt="Approved Seller" className="w-full object-cover" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
export default AboutHeroSection;
