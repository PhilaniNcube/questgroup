import { Metadata } from "next";
import ApplicationsGrid from "./_components/applications-grid";
import ApplicationsHero from "./_components/applications-hero";

export const metadata: Metadata = {
  title: "Waterquest | Solar Water Pumps For All Uses",
  description:
    "Solar water pumps have broad applications. In agriculture, they can provide irrigation and drinking water for livestock. Residentially, they are useful for circulating pond water and drawing water from wells.",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "Solar water pumps have broad applications. In agriculture, they can provide irrigation and drinking water for livestock. Residentially, they are useful for circulating pond water and drawing water from wells.",
    title: "Waterquest | Solar Water Pumps For All Uses",
  },
};

const ApplicationsPage = () => {
  return <main>
    <ApplicationsHero />
    <ApplicationsGrid />
  </main>;
};
export default ApplicationsPage;
