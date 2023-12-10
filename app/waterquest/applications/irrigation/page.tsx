import { Metadata } from "next";
import IrrigationDescription from "./_components/irrigation-description";
import IrrigationHero from "./_components/irrigation-hero";

export const metadata: Metadata = {
  title: "Waterquest | Solar Irrigation Systems",
  description:
    "Solar water pumping solutions offer a sustainable, renewable energy method for drawing water from a variety of sources for irrigation purposes. They can draw water from sources such as underground wells, rivers, lakes, or even rainwater storage tanks.",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "Solar water pumping solutions offer a sustainable, renewable energy method for drawing water from a variety of sources for irrigation purposes. They can draw water from sources such as underground wells, rivers, lakes, or even rainwater storage tanks.",
    title: "Waterquest | Solar Irrigation Systems",
  },
};

const IrrigationPage = () => {
  return <main>
    <IrrigationHero />
    <IrrigationDescription />
  </main>;
};
export default IrrigationPage;
