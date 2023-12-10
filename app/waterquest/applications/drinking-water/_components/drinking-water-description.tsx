import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const DrinkingWaterDescription = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 lg:col-span-1 px-4 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg shadow-md py-5 font-medium text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Reliable Provision of Drinking Water for Over 20 Years
            </h2>
            <p className="text-sm md:text-md leading-6">
              LORENTZ solar water pumping systems have a proven track record of
              delivering drinking water to homes, communities and livestock all
              around for over 20 years. As an application, there is nothing more
              critical than drinking water. Therefore, choosing a system that
              you know will deliver the water you need, reliably and predictably
              is of the upmost importance.
            </p>
            <p className="text-sm md:text-md leading-6 py-3">
              To complement our solar water pumping systems LORENTZ also
              solutions that allow for revenue collection and accountability of
              water use. This can be at system level with embedded control or at
              point of delivery with our smartTAP water dispenser solutions. We
              have flexibility to enable different business and operational
              models to fit local social or financial requirements.
            </p>
          </div>

          <div className="col-span-2 lg:col-span-1 px-4 bg-gradient-to-b from-slate-300 to-slate-200 rounded-lg shadow-md py-5 font-medium text-slate-800">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Sustainable Drinking Water Delivery Through Lorentz Solar Water
              Pumps
            </h2>
            <p className="text-sm md:text-md leading-6">
              Improved water sources such as boreholes offer cost effective ways
              to deliver safe clean water to homes and communities. LORENTZ PS2
              systems are deployed as the primary water delivery mechanism for
              homes and smaller communities in all parts of the world. When
              paired with LORENTZ smartTAP water dispensers, a solution that is
              sustainable commercial, socially and environmentally can be water
              implemented anywhere without any other infrastructure.
            </p>
            <p className="text-sm md:text-md leading-6 py-3">
              By utilizing water storage, solar direct systems deliver water
              reliably 24 hours per day without the need for expensive
              batteries, grid connections or generators.
            </p>
          </div>
        </div>
        <div className="w-full my-8 relative overflow-hidden">
          <Image
            src="/images/glass.jpg"
            width={1920}
            height={914}
            alt="Drinking Water"
            className="w-full aspect-[3/8] md:aspect-[3/2] lg:aspect-[6/2] object-cover rounded-md"
          />
          <div className="absolute inset-0 px-8 py-4 text-white bg-gradient-to-tl from-blue-900 via-blue-500 to-transparent rounded-md flex flex-col justify-center">
            <h3 className="text-xl lg:text-3xl font-bold max-w-lg">
              Lorentz Solar Water Pumps: Solving Global Clean Water Challenges
            </h3>
            <p className="text-sm md:text-md lg:text-lg font-medium leading-6 py-3">
              Globally, access to clean drinking water faces problems like water
              scarcity, contamination, high costs, and deficiency of
              infrastructure. Lorentz Solar Water Pumps offer a sustainable
              solution to these challenges. Powered by solar energy, these
              environmentally friendly pumps extract water from underground
              sources, eliminating the need for expensive transportation or
              pipelines. In-built purification technologies offer immediate safe
              drinking water, reducing health risks. Their adaptability to
              remote off-grid locations, and their durability makes them
              cost-effective. Moreover, by moderating extraction rates, they
              ensure responsible resource management, making them a
              comprehensive solution for global clean water challenges.
            </p>
            <Link href="/waterquest/contact">
              <Button
                type="button"
                className="bg-white text-blue-600 rounded-full text-xl font-semibold hover:text-white w-fit px-8 block"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DrinkingWaterDescription;
