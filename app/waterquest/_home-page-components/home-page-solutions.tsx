import { BadgeDollarSign, CogIcon, Settings2, SunIcon } from "lucide-react";
import Image from "next/image";

const Solutions = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full gap-y-4">
          <h2 className="text-4xl font-semibold text-center text-blue-500 lg:text-5xl">
            Why Should You Choose A Solar Water Pump?
          </h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 mt-5 lg:grid-cols-3 @container">
          <div className="col-span-2 p-10 rounded-lg shadow-xl lg:p-12 lg:col-span-1 bg-slate-200">
            <BadgeDollarSign className="w-12 h-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-blue-500">
              Save Money
            </h3>
            <p>
              Payback in just a couple of years before your profits increase
            </p>
          </div>
          <div className="col-span-2 p-10 rounded-lg shadow-xl lg:p-12 lg:col-span-1 bg-slate-200">
            <CogIcon className="w-12 h-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-blue-500">
              Less Maintenance
            </h3>
            <p>
              Fewer moving parts, and no more travelling to pumps to fill up
              with diesel or petrol
            </p>
          </div>
          <div className="col-span-2 p-10 rounded-lg shadow-xl lg:p-12 lg:col-span-1 bg-slate-200">
            <SunIcon className="w-12 h-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold text-blue-500">
              Sustainable
            </h3>
            <p>
              Reduce your carbon footprint and help the environment by using
              renewable energy from the sun
            </p>
          </div>
          <div className="col-span-2 rounded-lg shadow-xl gap-4 lg:col-span-3 bg-slate-200 flex flex-col @lg:flex-row">
            <div>
              <p className="max-w-4xl w-[3/4] p-10 text-md md:text-lg lg:p-12">
                Solar water pumps provide many advantages over diesel pumps with
                the main ones being less maintenance or higher profitability
                over the long run. View our solar pump projects to see how our
                customers have benefited from LORENTZ technology.
              </p>
            </div>
            <div className="flex items-center justify-center min-w-[300px] flex-1 px-6 py-2">
              <Image
                src="/images/approved-partner.png"
                width={1866}
                height={470}
                className="object-cover w-full"
                alt="Approved Partner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="w-full p-10 text-white bg-blue-500 rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Applications of Solar Pumps
          </h2>
          <div className="grid w-full grid-cols-2 gap-6 mt-4">
            <p className="max-w-4xl col-span-2 lg:col-span-1 text-md md:text-lg ">
              Solar water pumping systems are most commonly used in agriculture
              for irrigation or watering livestock. However LORENTZ solar pool
              pumps are also used in residential and commercial pools across
              Australia.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 gap-3 mt-4">
            <div className="w-full p-3 bg-blue-600 rounded col-span-3 lg:col-span-1">
              <h3 className="text-lg font-semibold">Irrigation</h3>
              <p className="mt-2 text-sm">
                Drip, flood or pivot irrigation for crops on farms with zero
                energy costs.
              </p>
            </div>
            <div className="w-full p-3 bg-blue-600 rounded col-span-3 lg:col-span-1">
              <h3 className="text-lg font-semibold">Drinking Water</h3>
              <p className="mt-2 text-sm">
                Provide drinking water fr communities or livestock including cattle sheep and more.
              </p>
            </div>
            <div className="w-full p-3 bg-blue-600 rounded col-span-3 lg:col-span-1">
              <h3 className="text-lg font-semibold">Pool Pumps</h3>
              <p className="mt-2 text-sm">
                Residential or commercial swimming pools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;
