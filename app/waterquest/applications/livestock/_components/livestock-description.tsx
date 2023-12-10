import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LivestockDescription = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 lg:col-span-1 px-4 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg shadow-md py-5 font-medium text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Solar Water Pumps: A Solution for Livestock Farming
            </h2>
            <p className="text-sm md:text-md leading-6">
              Solar water pumps are rapidly becoming the water system of choice
              for many livestock farms and ranches worldwide. The unique
              challenges of a livestock farm&apos;s water needs range from
              alleviating thirsty animals during hot, dry seasons to maintaining
              the cleanliness in their structures and around the farm as a
              whole.
            </p>
            <p className="text-sm md:text-md leading-6 py-3">
              Solar water pumps draw on the power of the sun to pump water from
              wells, boreholes, lakes, or rivers, offering a sustainable and
              reliable source of water supply which can meet these demands.
              Suitable for both small and large scale livestock farms, these
              pumps are efficient, economical, and environmentally friendly,
              ensuring that the farm&apos;s water needs are taken care of
              regardless of the weather conditions or availability of
              traditional electricity.
            </p>
          </div>

          <div className="col-span-2 lg:col-span-1 px-4 bg-gradient-to-b from-slate-300 to-slate-200 rounded-lg shadow-md py-5 font-medium text-slate-800">
            <h2 className="text-2xl md:text-3xl font-semibold">
              The Unique Challenges of Livestock Farms&lsquo;s Water Needs
            </h2>
            <p className="text-sm md:text-md leading-6">
              Livestock farming means managing hundreds or even thousands of
              water-dependent animals daily. This requires a massive and
              consistent supply of water. The water is not only used for
              drinking but also for cleaning the livestock living quarters and
              for mixing feed. Seasonal variations, especially dry spells, often
              make water availability unreliable.
            </p>
            <p className="text-sm md:text-md leading-6 py-3">
              Additionally, access to an electric grid is often limited in many
              remote livestock farms. Therefore, a reliable off-grid solution is
              necessary. Solar water pumps, which utilize the abundant and free
              power of the sun, are the ultimate solutions to these challenges.
              They provide consistency and reliability, ensuring that the
              livestock&lsquo;s needs are met without fail.
            </p>
          </div>
        </div>
        <div className="w-full my-8 relative overflow-hidden">
          <Image
            src="/images/cows.jpg"
            width={1920}
            height={914}
            alt="Drinking Water"
            className="w-full aspect-[3/9] lg:aspect-[6/2] object-cover rounded-md"
          />
          <div className="absolute inset-0 px-8 py-4 text-white bg-gradient-to-tl from-blue-900 via-blue-500 to-transparent rounded-md flex flex-col justify-center">
            <h3 className="text-xl lg:text-3xl font-bold max-w-lg">
              How Solar Water Pumps Can Help
            </h3>
            <p className="text-sm md:text-md lg:text-lg font-medium leading-6 py-3">
              Solar water pumps harness the energy from the sun. The system
              includes solar panels, a pump, and a controller. Even during the
              hottest days when water needs are highest, solar pumps can draw
              water from deep underground or other water sources and pump it to
              where it is needed. They provide the capacity to pump water over
              long distances, uphill, or to remote parts of the ranch, ensuring
              water availability in places where it would otherwise be a
              significant challenge. Given that these systems only need sunlight
              to operate, they render huge savings on electricity bills, or the
              need for expensive fuel stocks to power traditional water pumps.
              In addition, their easy installation, minimum maintenance, and
              long lifespan make solar water pumps an excellent choice for
              livestock farms and ranches seeking to secure their water
              supplies, improve their efficiency and productivity, and foster
              sustainable farming practices.
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
export default LivestockDescription;
