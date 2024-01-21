import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image"

const solutions = [
  {
    title: "Cost and Affordability",
    description:
      "Questgroup offers competitive pricing and financing options to make solar energy more affordable for everyone. We also provide free consultations to help you determine the best system for your needs and budget.",
  },
  {
    title: "Installation and Maintenance",
    description:
      "We have a team of experienced and certified technicians who will professionally install and maintain your solar system. We also offer warranties on all of our products and services, so you can be confident that your investment is protected.",
  },
  {
    title: "Performance and Reliability",
    description:
      "We use the highest quality components and materials in our solar systems. We also provide ongoing monitoring and maintenance to ensure that your system is operating at peak efficiency. providing you with years of clean, reliable energy.",
  },
];


const Principles = () => {
  return (
    <section className="">
      <div className="relative">
        <Image
          src="/images/illustration.webp"
          width={1456}
          height={816}
          loading="lazy"
          alt="Illustraction"
          className="w-full aspect-video lg:aspect-[3/1] object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-slate-700/40">
          <div className="container relative py-7 z-50">
            <h3 className="text-center text-2xl lg:text-5xl font-bold text-white">
              Back Up Your Power With Solar Energy
            </h3>
          </div>
        </div>
      </div>

      <div className="py-6 container">
        <h2 className="text-2xl lg:text-5xl font-bold text-center pb-4">
          Why Use Questgroup
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title} className="py-4">
              <CardContent>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription className="my-2 text-slate-700 font-semibold">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Principles;
