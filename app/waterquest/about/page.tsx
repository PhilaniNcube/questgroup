import AboutHeroSection from "./_components/about-hero-section";
import PurposeCards from "./_components/purpose-cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Waterquest",
  description: "Get to know Waterquest, part of the Questgroup",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description: "Get to know Waterquest, part of the Questgroup",
    title: "About | Waterquest",
  },
};

const AboutPage = () => {
  return <main>
    <AboutHeroSection />
    <PurposeCards />
  </main>;
};
export default AboutPage;
