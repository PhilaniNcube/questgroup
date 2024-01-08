import { Metadata } from "next";
import BusinessSolarDescription from "./_components/business-solar-description";
import BusinessSolarHero from "./_components/business-solar-hero";

export const metadata: Metadata = {
  title: "Commercial Solar Power | Sunquest",
  description:
    "Power your business with clean and cost-effective solar energy solutions. Our expert team specializes in designing and installing commercial solar power systems tailored to meet your specific energy needs. Harness the power of the sun to reduce your operating costs and carbon footprint. Benefit from long-term savings and take advantage of available tax incentives for commercial solar installations. Be a leader in sustainability and showcase your commitment to renewable energy. Experience the advantages of commercial solar power and make a positive impact on the environment and your bottom line.",
  keywords:
    "renewable energy resources, solar power, batteries, solar batteries, inverters",
};

const BusinessSolarPage = () => {
  return <main>
    <BusinessSolarHero />
    <BusinessSolarDescription />
  </main>;
};
export default BusinessSolarPage;
