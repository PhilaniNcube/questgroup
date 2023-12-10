import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ApplicationsHero = () => {
  return (
    <section>
      <section className="bg-blue-400 text-white py-4 md:py-10 lg:py-16">
        <div className="container grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1">

            <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold">
             Solar Water Pumps For All Uses
            </h1>
            <p className="text-lg lg:text-2xl mt-3">
             Regardless of the application, Waterquest & Lorentz have the solar water pump to fit your use case.
            </p>
            <Link href="/quote">
              <Button
                type="button"
                className="bg-sky-800 text-white uppercase rounded-full px-6 text-lg font-medium mt-8 py-2"
              >
                Request A Quote
              </Button>
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center lg:col-span-1">
            <div className="aspect-square object-cover rounded-full h-[500px] w-[500px] border-4 border-dashed border-white border-b-blue-400 border-l-blue-400 p-4">
              <Image
                src="/images/pipes.jpg"
                width={1280}
                height={853}
                alt="Pump"
                className="aspect-square object-cover object-left rounded-full h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default ApplicationsHero;
