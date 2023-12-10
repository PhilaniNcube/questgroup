import { Metadata } from "next";
import ResidentialDescription from "./_components/residential-description";
import ResidentialHero from "./_components/residential-hero";
import ResidentialSolutions from "./_components/residential-solutions";

export const metadata: Metadata = {
  title: "Waterquest | Residential Solar Water Pumps",
  description:
    "Solar water pumping systems can transform your residential water use, bringing with it a slew of accompanying benefits while ensuring greater environmental sustainability.",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "Solar water pumping systems can transform your residential water use, bringing with it a slew of accompanying benefits while ensuring greater environmental sustainability.",
    title: "Waterquest | Your Solar Powered Pump Solution",
  },
};

const ResidientialPage = () => {
  return <main>
    <ResidentialHero />
    <ResidentialSolutions />
    <ResidentialDescription />
  </main>;
};
export default ResidientialPage;
