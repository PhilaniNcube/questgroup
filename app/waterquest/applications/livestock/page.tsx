import { Metadata } from "next";
import LivestockDescription from "./_components/livestock-description";
import LivestockHero from "./_components/livestock-hero";

export const metadata: Metadata = {
  title: "Waterquest | Livestock Drinking Water",
  description:
    "Solar water pumps are rapidly becoming the water system of choice for many livestock farms and ranches worldwide. ",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "Solar water pumps are rapidly becoming the water system of choice for many livestock farms and ranches worldwide. ",
    title: "Waterquest | Livestock Drinking Water",
  },
};

const LivestockPage = () => {
  return <main>
    <LivestockHero />
    <LivestockDescription />
  </main>;
};
export default LivestockPage;
