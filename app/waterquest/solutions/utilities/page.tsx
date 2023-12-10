import { Metadata } from "next";
import UtilitiesDescription from "./_components/utilities-description";
import UtilitiesHero from "./_components/utilities-hero";

export const metadata: Metadata = {
  title: "Waterquest | Water Providers And Utilities",
  description: "meeting the needs of remote communities by building water micro grids",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description: "meeting the needs of remote communities by building water micro grids",
    title: "Waterquest | Water Providers And Utilities",
  },
};

const UtilitiesPage = () => {
  return <main>
    <UtilitiesHero />
    <UtilitiesDescription />
  </main>;
};
export default UtilitiesPage;
