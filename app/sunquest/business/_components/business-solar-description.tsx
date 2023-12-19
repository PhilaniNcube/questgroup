import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const BusinessSolarDescription = () => {
  return (
    <section className="container py-10">
      <div className="w-full overflow-clip">
        <div className="grid grid-cols-2 relative shadow-lg rounded-lg overflow-clip">
          <div className="absolute inset-0 z-0 flex">
            <Image
              src="/images/battery-wall.webp"
              width={2048}
              height={1024}
              alt="Home Solar"
              className="w-full object-cover rounded-lg shadow-md object-center "
            />
          </div>
          <div className="col-span-2 lg:col-span-1 p-8 relative bg-gradient-to-br from-slate-200 via-slate-100 to-white/30">
            <h2 className="text-3xl font-semibold">
              Commercial and Industrial Energy Storage Solutions
            </h2>
            <p className="text-md leading-6 mt-4">
              Sigenergy&apos;s powerful Commercial & Industrial energy solution
              can work with or without the grid. From small commercial to large
              industrial scale businesses, SigenStor can flexibly meet your
              power needs. Simple, reliable, and configurable, it will
              seamlessly power your business to a more profitable and
              sustainable future.
            </p>
            <p className="text-md leading-6 mt-4">
              Furthermore, SigenStor&apos;s commitment to sustainability goes
              beyond its clean energy generation. The system is designed with
              eco-friendly materials and manufacturing processes, minimizing its
              environmental impact throughout its lifecycle. Additionally,
              SigenStor can be integrated with renewable energy sources like
              solar and wind, allowing businesses to further reduce their
              reliance on fossil fuels and achieve true energy independence. By
              choosing SigenStor, you&apos;re not just powering your business,
              you&apos;re investing in a cleaner, greener future for everyone.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Card className="bg-brand text-white w-fit">
                <CardHeader>
                  <CardTitle>On-Grid</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-brand text-white w-fit">
                <CardHeader>
                  <CardTitle>Off-Grid</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessSolarDescription;
