/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const AgricultureDescription = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-3 gap-4 @container">
          <div className="col-span-3 flex flex-col gap-y-3 lg:col-span-2 rounded-lg bg-gradient-to-b from-slate-100 to-slate-200 px-3 py-4">
            <h2 className="text-2xl font-bold">
              Revolutionizing Agriculture with Solar Powered Water Pumps
            </h2>
            <p className="text-sm lg:text-md text-slate-800">
              Providing water for agricultural services presents challenges due
              to water scarcity, inefficient management, and high costs. Climate
              change further complicates the situation. Innovative and
              sustainable solutions are necessary to ensure a reliable water
              supply for farming.
            </p>
            <p className="text-sm lg:text-md text-slate-800">
              Lorentz Solar Water pumps can help overcome the challenges of
              providing water for agricultural services in several ways.
              Firstly, they utilize solar energy, making them sustainable and
              environmentally friendly. By harnessing the power of the sun,
              Lorentz pumps reduce reliance on scarce freshwater sources and
              decrease the carbon footprint associated with traditional pumping
              systems. Secondly, Lorentz pumps are designed to be highly
              efficient and deliver water precisely where it is needed, reducing
              wastage and maximizing water utilization.
            </p>
            <p className="text-sm lg:text-md text-slate-800">
              These pumps can be programmed for optimal irrigation practices,
              such as drip irrigation or targeted sprinkler systems, enabling
              farmers to conserve water and minimize run-off. Additionally,
              Lorentz pumps are cost-effective in the long run.
            </p>
          </div>
          <div className="col-span-3 lg:col-span-1 h-full relative rounded-md overflow-clip">
            <Image
              src="/images/sprinklers.webp"
              width={1456}
              height={816}
              alt="Budiriro"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-slate-400/10 flex flex-col justify-end py-3 px-3">
              <h3 className="font-medium text-lg text-white bg-blue-600 rounded-full px-4 w-fit">
                Solar Powered Irrigation
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className="md:py-12 py-9">
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
                    Cost Effective
                  </h2>
                  <p className="text-sm lg:text-md  text-white lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                    While the initial investment may be higher than traditional
                    pumps, the reliance on solar power significantly reduces
                    operational costs and dependence on fossil fuels. This makes
                    them particularly advantageous for farmers in remote or
                    off-grid areas. Overall, Lorentz Solar Water pumps offer a
                    sustainable and viable solution to address water scarcity,
                    inefficient management, and high costs in agricultural
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-tl from-blue-800 to-blue-500 col-span-2 lg:col-span-1 text-white rounded-lg px-4 py-3 shadow-md">
            <h2 className="text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
              Scalability
            </h2>
            <p className="text-sm  text-white mt-4">
              Lorentz Solar Water pumps are highly scalable due to their modular
              design and adaptable technology. These pumps are available in a
              wide range of sizes and capacities, allowing farmers to choose the
              most suitable option to meet their specific needs. Whether it&apos;s a
              small-scale individual farmer or a large agricultural operation,
              Lorentz pumps can be easily scaled up or down as per the
              requirements.
            </p>
          </div>
          <div className="bg-gradient-to-br shadow-md from-slate-200 col-span-2 lg:col-span-1 to-slate-300 text-slate-800 rounded-lg px-4 py-3">
            <h2 className="text-3xl font-bold md:leading-10 leading-9  sm:w-auto w-64">
              Reliable and repairable
            </h2>
            <p className="text-sm   mt-4">
              Lorentz Solar Water pumps are designed to be highly maintainable,
              reducing downtime and ensuring continuous operation. These pumps
              are constructed with durable materials and undergo rigorous
              testing to ensure reliability and longevity. They are built to
              withstand harsh environmental conditions, such as extreme
              temperatures and challenging weather, common in agricultural
              settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AgricultureDescription;
