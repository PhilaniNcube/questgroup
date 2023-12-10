import { Metadata } from "next";
import SolutionsHeroSection from "./_components/solutions-hero-section";
import SolutionsGrid from "./_components/solutions-grid";


export const metadata: Metadata = {
  title: "Waterquest | Empowering Sustainable Water Solutions",
  description:
    "High-quality, eco-friendly solar water pump systems designed by Lorentz Pumps for residential, community, and utility applications.",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "High-quality, eco-friendly solar water pump systems designed by Lorentz Pumps for residential, community, and utility applications.",
    title: "Waterquest | Your Solar Powered Pump Solution",
  },
};

const SolutionsPage = () => {
  return <main>
    <SolutionsHeroSection />
    <SolutionsGrid />
  </main>;
};
export default SolutionsPage;
