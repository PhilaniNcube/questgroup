import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "Pool Pumps",
    description:
      " Shifting to LORENTZ solar pool pumps means zero energy costs and a quick return on investment. Our pumps are quiet, efficient and offer longer life expectancy than standard AC motors.",
    image: "/images/swimming-pool.jpg",
    href: "/waterquest/contact",
  },
  {
    title: "Borehole Pumps",
    description:
      "Submersible borehole pumps are one of the most efficient pumping options available if you need to pump liquid from a below ground level.",
    image: "/images/borehole.jpg",
    href: "/waterquest/contact",
  },
  {
    title: "Surface Pumps",
    description:
      "Surface pumps are built to pump water from surface water sources such as ponds, tanks, springs, or shallow wells or rivers /creeks.",
    image: "/images/pump.webp",
    href: "/waterquest/contact",
  },
];

const ResidentialSolutions = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg w-full  overflow-hidden flex flex-col justify-between"
            >
              <Image
                src={item.image}
                width={640}
                height={427}
                alt={item.title}
                className="w-full aspect-video"
              />
              <div className="p-3 bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col justify-between h-full">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-sm md:text-md">{item.description}</p>
                <Link href={item.href}>
                  <Button type="button" className="bg-blue-500 text-white mt-3">
                    Enquire More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ResidentialSolutions;
