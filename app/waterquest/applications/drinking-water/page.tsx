import { Metadata } from "next";
import DrinkingWaterDescription from "./_components/drinking-water-description";
import DrinkingWaterHero from "./_components/drinking-water-hero";

export const metadata: Metadata = {
  title: "Waterquest | Sustainable Drinking Water Solutions with WaterQuest",
  description:
    "Take a look at our solar water pump applications for the provision of drinking water",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "Take a look at our solar water pump applications for the provision of drinking water",
    title: "Waterquest | Sustainable Drinking Water Solutions with WaterQuest",
  },
};

const DrinkingWaterPage = () => {
  return (
    <div>
      <DrinkingWaterHero />
      <DrinkingWaterDescription />
    </div>
  );
};
export default DrinkingWaterPage;
