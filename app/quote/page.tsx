import QuoteForm from "@/components/quote-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get A Quote | Questgroup",
  description: "Request A Quote",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description: "Request A Quote",
    title: "Get A Quote | Questgroup",
  },
};

const page = () => {
  return <main className="py-10"><QuoteForm /></main>;
};
export default page;
