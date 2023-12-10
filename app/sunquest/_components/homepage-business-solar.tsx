import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BoxIcon, LucideCandlestickChart, LucideCloudLightning } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

const HomepageBusinessSolar = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <Image
              src="/images/factory-solar.webp"
              width={1920}
              height={1280}
              alt="Factory Solar"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="@container bg-gradient-to-b from-teal-800 to-teal-950 rounded-lg p-12 flex flex-col space-y-2">
            <h2 className="text-3xl md:text-4xl text-white font-bold">
              Business Solar Installations
            </h2>
            <p className="text-white text-md">
              We offer a wide range of solar solutions for businesses of all
              sizes. From small businesses to large factories, we have the
              experience and expertise to help you save money and reduce your
              carbon footprint.
            </p>
            <div className="grid grid-cols-1 gap-3 @sm:grid-cols-2 text-white">
              <Card className="">
                <CardHeader className="py-3">
                  <CardTitle className="text-lg">
                    Sigen Energy Controller
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Solar + Energy storage</p>
                  <div className="flex items-center justify-between mt-3">
                    <Badge>
                      <span className="text-white">Single Phase</span>
                    </Badge>
                    <Badge>
                      <span className="text-white">Three Phase</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader className="py-3">
                  <CardTitle className="text-lg">Sigen Batteries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Stackable battery system</p>
                  <div className="flex items-center justify-between mt-3">
                    <Badge>
                      <span className="text-white">5 kWh</span>
                    </Badge>
                    <span> - </span>
                    <Badge>
                      <span className="text-white">48 kWh</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Link href="/business" className="mt-2">
              <Button
                type="button"
                className="px-5 py-2 bg-teal-800 text-white hover:text-white rounded-full"
              >
                Business Energy Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomepageBusinessSolar;
