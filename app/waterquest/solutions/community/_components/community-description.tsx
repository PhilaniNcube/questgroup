import Image from "next/image";

const CommunityDescription = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-3 gap-4 @container">
          <div className="col-span-3 flex flex-col gap-y-3 lg:col-span-2 rounded-lg bg-gradient-to-b from-slate-100 to-slate-200 px-3 py-4">
            <h2 className="text-2xl font-bold">
              Providing clean and safe drinking water for communities
            </h2>
            <p className="text-sm lg:text-md text-slate-800">
              In many densely populated urban areas, or remote areas, access to
              clean and safe drinking water has been a significant challenge.
              They often face difficulties due to waterborne diseases and other
              water-related health crises. This calls for sustainable and
              long-term solutions to ensure the health and wellbeing of these
              communities.
            </p>
            <p className="text-sm lg:text-md text-slate-800">
              At Waterquest we can provide great solutions for this use case
              using our range of Lorentz Solar Pumps and accessories. This
              solution can be configured to meet the specific needs of a
              particular community in order to minimize waste of resources.
            </p>
            <p className="text-sm lg:text-md text-slate-800">
              One of the solutions we can provide includes a LORENTZ PS2-1800
              C-SJ5-12 solar powered pump which provides 50 m³ (13,200 US gal.)
              of raw water per day, serving almost 1,000 families. To combat an
              contamination of the original water source, the water can be
              chlorinated before delivery. LORENTZ smartTAP Water Dispensers can
              also be integrated into the system as an easy, secure and
              affordable solution for dispensing water.{" "}
            </p>
          </div>
          <div className="col-span-3 lg:col-span-1 relative rounded-md overflow-hidden">
            <Image
              src="/images/budiriro.jpg"
              width={1024}
              height={683}
              alt="Budiriro"
              className="w-full object-cover "
            />
            <div className="absolute inset-0 flex flex-col justify-end py-3 px-3">
              <h3 className="font-medium text-lg text-white bg-blue-600 rounded-full px-4 w-fit">
                Budiriro, Harare
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
                    Invest Once
                  </h2>
                  <p className="text-sm lg:text-md  text-white lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                    When you are responsible for delivering water to your
                    community then making the right choices is important.
                    LORENTZ have been designing and manufacturing solar water
                    pumping systems for 20 years and are the market leader. Our
                    products are high quality, are designed for off-grid
                    environments, have the highest efficiency and are easy to
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-tl from-blue-800 to-blue-500 col-span-2 lg:col-span-1 text-white rounded-lg px-4 py-3 shadow-md">
            <h2 className="text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
              Ability To Expand
            </h2>
            <p className="text-sm  text-white mt-4">
              LORENTZ have the best system planning software in the market. Our
              sales and service partners can plan a system that is cost
              effective to deliver the water your community needs now but with
              the capacity to grow. With such a wide range of systems available
              one can be selected which will grow as the need for water does.
              This growth can be achieved by adding more solar panels, this is
              easy to do, cost effective.
            </p>
          </div>
          <div className="bg-gradient-to-br shadow-md from-slate-200 col-span-2 lg:col-span-1 to-slate-300 text-slate-800 rounded-lg px-4 py-3">
            <h2 className="text-3xl font-bold md:leading-10 leading-9  sm:w-auto w-64">
              Reliable and repairable
            </h2>
            <p className="text-sm   mt-4">
              Lorentz Pumps are designed to have a long life, but are also
              designed to be repairable. All the components of a LORENTZ system
              are replaceable down to sub component level quickly and easily. In
              the event of a failure in the system, or as a result of wear and
              tear, the system can be easily repaired without the costs of
              having to replace a whole unit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CommunityDescription;
