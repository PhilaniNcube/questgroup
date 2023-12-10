import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomepageHero = () => {
  return (
    <section className="relative isolate">
      <Image
        src="/images/solar.webp"
        width={4352}
        height={1088}
        alt="Sunquest"
        className="w-full aspect-[4/3] lg:aspect-[8/2] object-cover"
      />
      <div className="absolute inset-0 bg-slate-600/60 w-full aspect-[4/3] lg:aspect-[8/2]">
        <div className="container flex flex-col h-full items-center justify-center space-y-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-xl mx-auto">
            Welcome to the Future of Power
          </h1>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold">
            Solar Solutions for South African Homes and Businesses
          </p>
          <Link href="/quote">
            <Button
              type="button"
              className="rounded-full bg-white text-teal-800 text-xl font-medium hover:text-white transition-colors"
            >
              Get A Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomepageHero;
