import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowBigRight, ArrowRight, BoxIcon, Lightbulb, LucideCandlestickChart, LucideCloudLightning } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";

let cards = [
  {
    title: 'Simple',
    icon: <BoxIcon />,
  },
  {
    title: 'Versatile',
    icon: <LucideCandlestickChart />,
  },
  {
    title: 'Robust',
    icon: <LucideCloudLightning />,
  },
  {
    title: 'Intelligent',
    icon: <Lightbulb />,
  },
]


const HomeEnergySection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-center space-y-4 py-6 @container">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800">
              Home Energy Solutions <br />
              with SIGENERGY
            </h2>
            <p className="text-teal-600 text-md md:text-lg leading-6">
              Combining solar, storage and EV charging, Sigenergy offers an
              all-in-one solution that maximizes your energy savings while
              powering your home and EV with clean, renewable energy. The system
              is easy to install and with realtime monitoring and easily
              scalable storage, you’ll enjoy power that&apos;s reliable,
              efficient and safe.
            </p>
            <div className="grid grid-cols-2 gap-6 @lg:grid-cols-4 ">
              {cards.map((card, index) => (
                <Card key={index} className="border-teal-600">
                  <CardHeader>
                    <CardTitle className="text-center text-lg md:text-xl text-teal-800">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center text-teal-900 w-full h-full">
                      {card.icon}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Link href="/home">
              <Button type="button" className="px-5 py-2 bg-teal-800 text-white hover:text-white rounded-full">
                Home Energy Solutions
              </Button>
            </Link>
          </div>
          <div className="col-span-1 flex w-full items-center justify-center p-12 relative isolate bg-gradient-to-br from-slate-300 to-transparent rounded-md shadow-sm">
            <Image
              src="/images/left.png"
              width={3375}
              height={6000}
              alt="Sigenergy"
              className="w-full lg:w-3/5 lg:h-full object-cover"
            />

          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeEnergySection;
