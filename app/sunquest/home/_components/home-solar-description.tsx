import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const HomeSolarDescription = () => {
  return (
    <section className="container py-10">
      <div className="w-full overflow-clip">
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1 relative">
            <Image
              src="/images/sigenergy-packages.webp"
              width={742}
              height={377}
              alt="Home Solar"
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 p-8">
            <h2 className="text-3xl font-semibold">
              Start small, grow on demand
            </h2>
            <p className="text-md leading-6 mt-4">
              We use Sigenergy products in order to provide solar installations
              that can grow as you needs for energy increase. Start with a small
              package and then add more battery units for more storage capacity
              as & when needed.
            </p>
            <p className="text-md leading-6 mt-4">
              The modular 5-in-One modular design integrates Solar Inverter, EV
              DC Charger, Battery PCS, Battery Packs and EMS into one
              intelligent home energy system.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Card className="bg-brand text-white">
                <CardHeader>
                  <CardTitle>Single Phase</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-brand text-white">
                <CardHeader>
                  <CardTitle>Three Phase</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSolarDescription;
