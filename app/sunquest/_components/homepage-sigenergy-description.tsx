import { Separator } from "@radix-ui/react-separator";
import { BatteryCharging, Grid3X3, UtilityPole } from "lucide-react";

const SigenergDescriotion = () => {
  return (
    <section className="py-10">
      <div className="container @container">
        <article className="rounded-lg p-4 bg-gradient-to-br from-slate-300 to stroke-slate-200 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">
            Sunquest + Sigenergy
          </h2>
          <p className="text-teal-600 text-md md:text-lg leading-6 max-w-5xl mt-3">
            Sunquest is the authorized distributor for Sigenergy products in
            South Africa. Sigenergy is leading a new way of producing, storing,
            transferring, and consuming energy. With the{" "}
            <strong>SigenStar</strong>, you can have a unique 5-in-1 modular
            system that integrates a Solar Inverter, EV DC Charger, Battery PCS,
            Battery Pack and EMS into one intelligent energy system. Simple,
            robus and versatile, it will be a great addition to your home or
            business.
          </p>
        </article>
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mt-8">
          How can I use Sigenergy Products?
        </h2>
        <div className="grid grid-cols-1 mt-5 @lg:grid-cols-3 gap-8 text-teal-800">
          <div className="flex flex-col space-y-2 bg-teal-800 p-4 rounded-md text-white">
            <span className="flex gap-1 items-center">
              <h3 className="text-xl font-medium">Storage Only </h3>

              <BatteryCharging className="" />
              <UtilityPole className="" />
            </span>
            <p className="text-sm leading-6">
              Maximise your savings by storing energy in your Sigenergy battery
              systems from electricity from the grid. This energey can then be
              utilised either when there is a power outage or fill up the
              battery during off-peak hours when electicity is cheaper and then
              use the stored energy in the battery during peak hours when
              electricity is more expensive.
            </p>
          </div>
          <div className="flex flex-col space-y-2 bg-teal-800 p-4 rounded-md text-white">
            <span className="flex gap-1 items-center">
              <h3 className="text-xl font-medium">Solar + Storage</h3>

              <BatteryCharging className="" />
              <UtilityPole className="" />
              <Grid3X3 className="" />
            </span>
            <p className="text-sm leading-6">
              The SigenStar can be used to store energy from your solar panels
              and use it when the sun is not shining. This will allow you to
              maximise your savings by using your own solar energy instead of
              buying electricity from the grid. With an expertly designed solar
              system, you can reduce your electricity bill by up to 90%.
            </p>
          </div>
          <div className="flex flex-col space-y-2 bg-teal-800 p-4 rounded-md text-white">
            <span className="flex gap-1 items-center">
              <h3 className="text-xl font-medium">Backup/Off-grid</h3>

              <BatteryCharging className="" />
              <BatteryCharging className="" />
              <Grid3X3 className="" />
            </span>
            <p className="text-sm leading-6">
              In order to go completely Off-grid, you must have a battery system
              to store the energy from your solar panels. This will allow you to
              use your own solar energy during the day and at night. The
              SigenStar can also be used as a backup system to provide power
              during load shedding or power outages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SigenergDescriotion;
