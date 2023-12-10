import Image from "next/image";

const UtilitiesDescription = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="my-3 grid grid-cols-2 gap-4 w-full">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 max-w-lg">
              Financially Viable Solution for Water Service Providers
            </h2>
            <p className="text-slate-800 text-sm md:text-md lg:text-lg leading-6 mt-5">
              If your business caters to supplying water to businesses and
              communities, it&apos;s crucial to unearth financially viable
              solutions. Solar power water pumps enable you to fulfill your
              delivery commitments while decreasing your operating expenses.
            </p>
            <p className="text-slate-800 text-sm md:text-md lg:text-lg leading-6 py-3">
              Government mandates often dictate water supply without factoring
              in the cost on the provider&apos;s part. Your clientele&apos;s
              payment capacity is limited, and you might be operating under
              strict price regulations. In evolving markets, the cost of pumping
              water can outstrip the price you can set for it.
            </p>
            <p className="text-slate-800 text-sm md:text-md lg:text-lg leading-6">
              Solar-powered water pumping systems can provide the answer to the
              issues of accessing distant communities and diminishing operating
              expenditures.
            </p>
          </div>
          <Image
            src="/images/water-treatment.jpg"
            width={1280}
            height={866}
            alt="Water Treatment"
            className="w-full h-full object-cover rounded-lg col-span-3 lg:col-span-1"
          />
        </div>
        <div className="my-12 gap-6 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-slate-100 to-slate-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">Remote Boost Stations</h3>
            <p className="text-sm leading-6">
              LORENTZ surface solar pump systems are used as remote boost
              stations by water providers. With a smart system design, solar
              pumps can replace remote diesel powered pump stations, reducing
              the need for maintenance, fuel deliveries and security.
            </p>
          </div>
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">
              Remote infrastructure management
            </h3>
            <p className="text-sm leading-6">
              All LORENTZ solar water pumping systems have an inbuilt ability to
              collect data and to be managed by our PumpScanner App. These
              CONNECTED functions can easily be extended to full remote
              management and monitoring via our pumpMANAGER managed service.
              pumpMANAGER shows the status of all of your LORENTZ pump systems
              in real-time, alerts you by email when there is a problem and
              allows you to make changes remotely. Think of the costs savings
              and service improvements this could deliver.
            </p>
          </div>
        </div>
        <div className="relative rounded-md">
          <img
            src="/images/invest.jpg"
            alt="city view"
            className="w-full h-full rounded-md  object-left absolute sm:block hidden object-cover"
          />
          <img
            src="/images/invest-square.jpg"
            alt="city view"
            className="w-full h-full rounded-md absolute object-center object-cover sm:hidden"
          />
          <div className="text-xl relative z-20 bg-gradient-to-r from-blue-700/90 to-blue-400/60 w-full h-full lg:z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
            <div>
              <h2 className="text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                Local ground water abstraction
              </h2>
              <p className="text-sm lg:text-md  text-white lgw-10/12  2xl:pr-12 mt-4">
                Water companies are meeting the needs of remote communities by
                building “water micro grids”. By using LORENTZ solar water pumps
                with local ground water abstraction from boreholes as their
                source, long pipelines are completely avoided. This local supply
                of water is less capital intensive and results in lower
                operating costs while meeting the obligations of the water
                provider. Using the embedded data features and ability to
                connect external sensors and flow meters, the use of water can
                be measured and integrated into payment systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UtilitiesDescription;
