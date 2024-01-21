import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className=" relative">

      <div className="container">
        <div className=" w-full flex justify-center items-center py-12 px-10 ">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[6rem] font-semibold md:font-bold text-center">
            Experience the Benefits of Solar Energy
          </h1>
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
          <Link href="/waterquest" className="flex flex-col space-y-3 relative">
            <Image
              src="/images/irrigation.jpg"
              width={1920}
              height={1080}
              alt="Irrigation"
              quality={80}
              loading="lazy"
              className="w-full aspect-[4/2] lg:aspect-[5/2] object-cover rounded-lg"
            />
            <article className="w-full h-full rounded-lg shadow-lg p-6 flex flex-col gap-x-4 justify-between items-center bg-white border border-blue-300">
              <Image
                src="/images/logo.png"
                alt="Waterquest"
                width={4500}
                height={947}
                quality={80}
                loading="lazy"
                className="w-48 object-cover"
              />
              <p className="text-center text-sm leading-6 mt-4">
                Efficient, solar water pumping solutions delivering you more
                water
              </p>
              <Button className="bg-blue-500 text-blue-50 font-medium mt-4">
                See More
              </Button>
            </article>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="text-xl font-semibold">
                      Residential Solar Pumps
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 mt-4">
                    We offer a range of solar water pumps for residential use.
                    From pool pumps to borehole pumps.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="text-xl font-semibold">
                      Commercial Solar Pumps
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 mt-4">
                    Pumps supplying water to businesses and communities,
                    it&apos;s crucial to unearth financially viable solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Link>
          <Link href="/sunquest" className="flex flex-col space-y-3">
            <Image
              src="/images/installations.jpg"
              width={1920}
              height={1080}
              alt="Irrigation"
              className="w-full aspect-[4/2] lg:aspect-[5/2] object-cover rounded-lg"
            />
            <article className="w-full h-full rounded-lg shadow-lg p-6 gap-x-4 flex flex-col justify-between items-center bg-white border border-brand">
              <Image
                src="/images/sunquest-logo.png"
                alt="Waterquest"
                width={4500}
                height={947}
                className="w-48 object-cover"
              />
              <p className="text-center text-sm leading-6 mt-4">
                Solar Solutions for South African Homes and Businesses
              </p>
              <Button className="bg-brand text-black font-medium mt-4">
                See More
              </Button>
            </article>{" "}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="text-xl font-semibold">
                      Home Solar Power
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 mt-4">
                    Produce, store and use green energy for your home with the
                    Sigenergy group of products.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="text-xl font-semibold">
                      Business Solar Power
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 mt-4">
                    Flexible & Modular Commercial and Industrial Energy Storage
                    Solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
