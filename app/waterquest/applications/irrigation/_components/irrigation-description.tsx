import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const IrrigationDescription = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 lg:col-span-1 px-4 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg shadow-md py-5 font-medium text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Solar Irrigation Systems
            </h2>
            <p className="text-sm md:text-md leading-6">
              Solar water pumping solutions offer a sustainable, renewable
              energy method for drawing water from a variety of sources for
              irrigation purposes. They can draw water from sources such as
              underground wells, rivers, lakes, or even rainwater storage tanks.
            </p>
            <p className="text-sm md:text-md leading-6 py-3">
              These systems utilize solar panels to convert sunlight into
              electricity, which then powers the pump. The water drawn from
              these sources can be delivered directly for immediate use, or it
              can be stored in a reservoir for future use. This makes solar
              water pumping solutions an effective choice for farmers or
              large-scale agricultural operations, as they utilize natural
              resources to maintain their crops, reducing both their dependency
              on traditional electricity sources and their environmental impact.
            </p>
          </div>

          <div className="col-span-2 lg:col-span-1 px-4 bg-gradient-to-b from-slate-300 to-slate-200 rounded-lg shadow-md py-5 font-medium text-slate-800">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Fields from deserts – a solar agricultural water pumping system
            </h2>
            <p className="text-sm md:text-md leading-6">
              LORENTZ solar pumping systems can be used to transform unused land
              into productive farms or to improve the yields from existing
              crops. Bringing water to locations that do not have any existing
              infrastructure is improving food security and generating
              significant income for farmers and communities around the world.
            </p>
            <p className="text-sm md:text-md leading-6 py-3">
              The unavailability of grid power or the high costs of using diesel
              engines to provide irrigation means that good land is not used to
              its fully capability. A LORENTZ solar water pumping system
              combined with your preferred irrigation system and some smart
              planning can deliver water wherever you need it.
            </p>
          </div>
        </div>
        <div className="w-full my-8 relative overflow-hidden">
          <Image
            src="/images/pivot.jpg"
            width={1920}
            height={914}
            alt="Drinking Water"
            className="w-full aspect-[3/5] lg:aspect-[6/2] object-cover rounded-md"
          />
          <div className="absolute inset-0 px-8 py-4 text-white bg-gradient-to-tl from-blue-900 via-blue-500 to-transparent rounded-md flex flex-col justify-center">
            <h3 className="text-xl lg:text-3xl font-bold max-w-lg">
              Work with what you have
            </h3>
            <p className="text-sm md:text-md lg:text-lg font-medium leading-6 py-3">
              If you already have an irrigation system in place, then the
              LORENTZ range of solar pumping systems can work with what you
              have. Drip, sprinkler, pivot or flood irrigation methods can be
              supported and integrate well to LORENTZ pumps. Our pumps can
              produce very high flows and high pressures, even offering features
              such as constant pressure and flow. The change to solar power
              means you can lower your operating costs.
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
export default IrrigationDescription;
