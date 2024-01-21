import AgricultureDescription from "./_components/agriculture-description";
import AgricultureHero from "./_components/agriculture-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture Solutions | Waterquest",
  description:
    "Revolutionizing Agriculture with Solar Powered Water Pumps",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "Revolutionizing Agriculture with Solar Powered Water Pumps",
    title: "Agriculture Solutions | Waterquest",
  },
};

const AgriculturePage = () => {
  return <main>
    <AgricultureHero />
    <AgricultureDescription />
  </main>;
};
export default AgriculturePage;
