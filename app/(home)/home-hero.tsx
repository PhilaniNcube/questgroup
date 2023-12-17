import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="container">
      <div className="w-full flex justify-center items-center py-12 px-10 ">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[6rem] font-semibold md:font-bold text-center">
          Experience the Benefits of Solar Energy
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 py-4">
        <Link href="/waterquest">
          <article className="w-full h-full rounded-lg shadow-lg p-6 flex flex-col gap-x-4 justify-between items-center bg-gradient-to-br from-blue-400 to-blue-600 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Waterquest
            </h2>
            <p className="text-center text-md leading-6 mt-4">
              Efficient, solar water pumping solutions delivering you more water
            </p>
            <Button className="bg-white text-blue-600 font-medium mt-4">
              See More
            </Button>
          </article>
        </Link>
        <Link href="/sunquest">
          <article className="w-full h-full rounded-lg shadow-lg p-6 gap-x-4 flex flex-col justify-between items-center bg-gradient-to-br from-teal-400 to-teal-600 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Sunquest
            </h2>
            <p className="text-center text-md leading-6 mt-4">
              Solar Solutions for South African Homes and Businesses
            </p>
            <Button className="bg-white text-teal-600 font-medium mt-4">
              See More
            </Button>
          </article>
        </Link>
      </div>
    </section>
  );
};
export default HomeHero;
