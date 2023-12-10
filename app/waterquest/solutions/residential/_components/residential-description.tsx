import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ResidentialDescription = () => {
  return (
    <section className="@container py-8">
      <div className="container">
        <div className="py-2 overflow-y-hidden">
          <div className="flex  sm:flex-row flex-col items-center justify-between">
            <div className="sm:w-2/5 md:w-1/4 lg:w-1/3">
              <h1 className="lg:text-5xl text-2xl font-bold text-gray-800">
                Benefits of Solar Water Pumps
              </h1>
              <p className="text-sm leading-6 text-gray-600 mt-4 ">
                Imagine a reliable, renewable solution that provides running
                water to your home while saving energy and costs. Solar water
                pumping systems can transform your residential water use,
                bringing with it a slew of accompanying benefits while ensuring
                greater environmental sustainability.
              </p>
              <Link href="/quote">
                <Button
                  type="button"
                  className="mt-12 text-base font-normal leading-none text-white bg-blue-500 rounded sm:p-4 p-6 sm:w-auto w-full focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
            <div className="sm:w-1/2 w-11/12 py-10 sm:mt-0 mt-14 sm:ml-0 ml-7  bg-blue-500 shadow-md rounded-md">
              <Image
                width={640}
                height={388}
                src="/images/water.jpg"
                alt="water"
                className="w-full md:-ml-28 -ml-7 rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ResidentialDescription;
