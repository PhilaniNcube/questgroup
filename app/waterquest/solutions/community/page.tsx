import { Metadata } from "next";
import CommunityDescription from "./_components/community-description";
import CommunityHero from "./_components/community-hero";

export const metadata: Metadata = {
  title: "Waterquest | Community Solar Water Pumps",
  description: "Providing clean and safe drinking water for communities",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description: "Providing clean and safe drinking water for communities",
    title: "Waterquest | Community Solar Water Pumps",
  },
};

const CommunityPage = () => {
  return <main>
    <CommunityHero />
    <CommunityDescription />
  </main>;
};
export default CommunityPage;
