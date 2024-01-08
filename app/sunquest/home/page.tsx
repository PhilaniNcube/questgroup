import { Metadata } from "next";
import HomeSolarDescription from "./_components/home-solar-description";
import HomeSolarHero from "./_components/home-solar-hero";
import HomeSolarProducts from "./_components/home-solar-products";

export const metadata: Metadata = {
  title: "Residential Solar Power | Sunquest",
  description:
    "Increase your energy efficiency and save money with residential solar power solutions. Harness the power of the sun to generate clean and renewable electricity for your home. Our expert team provides customized solar panel installations, ensuring the highest quality and optimal performance. Take control of your energy consumption and reduce your carbon footprint with our reliable and sustainable solar power systems. Experience the benefits of solar energy first-hand and start enjoying lower energy bills today.",
  keywords:
    "renewable energy resources, solar power, batteries, solar batteries, inverters",
};

const HomeSolarPage = () => {
  return <main>
    <HomeSolarHero />
    <HomeSolarDescription />
    <HomeSolarProducts />
  </main>;
};
export default HomeSolarPage;
