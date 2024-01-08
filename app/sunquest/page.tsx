import { Metadata } from "next";
import HomepageBusinessSolar from "./_components/homepage-business-solar";
import HomeEnergySection from "./_components/homepage-description";
import HomepageHero from "./_components/homepage-hero";
import SigenergDescriotion from "./_components/homepage-sigenergy-description";

export const metadata: Metadata = {
  title: "Home | Sunquest",
  description: "Sunquest solar energy with Sigenergy quality products",
  keywords:
    "renewable energy resources, solar power, batteries, solar batteries, inverters",
};

const page = () => {
    return (
      <main className="">
        <HomepageHero />
        <HomeEnergySection />
        <HomepageBusinessSolar />
        <SigenergDescriotion />
      </main>
    );
};
export default page;
