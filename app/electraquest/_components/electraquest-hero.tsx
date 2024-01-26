import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ElectraquestHero = () => {
  return (
    <section className="relative isolate">
      <Image
        src="/images/distribution_box.webp"
        width={900}
        height={504}
        alt="Electricity"
        className="w-full h-[70vh] object-cover"
      />
      <div className="absolute inset-0 bg-slate-600/60 w-full">
        <div className="container flex flex-col h-full items-center justify-center space-y-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-xl mx-auto">
            Superior Electrical Services
          </h1>
          <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold">
            Experience a Seamless Blend of Professional Electrical Services &
            Maintenance
          </p>
          <Link href="/quote">
            <Button
              type="button"
              className="rounded-full bg-brand text-white text-xl font-medium hover:text-white transition-colors"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ElectraquestHero;
