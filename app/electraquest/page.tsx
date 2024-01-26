import { Metadata } from "next";
import ElectraquestHero from "./_components/electraquest-hero";
import ElectricalServices from "./_components/electrical-services";

export const metadata: Metadata = {
  title: "Electraquest | Questgroup",
  description: "Professional Electrical Services & Maintenance",
  keywords:
    "Electrical Services South Africa, Professional Electrical Maintenance, Certificate of Compliance, Commercial Electrical Services, Residential Electrical Services, Safety Inspections, South Africa Electrical Solutions, Electrical Installations, Reliable Electrical Services, Quality Residential Electrical Repairs, Affordable Commercial Electrical Services, Experienced Electricians in South Africa, Top-Quality Electrical Services, Routine Electrical Inspections, Comprehensive Electrical Services, Electrical System Maintenance, Health and Safety Standards, Preventive Electrical Maintenance, Professional Certification of Compliance Service, Electrical Services for Businesses and Homes",
};

const page = () => {
  return <main>
    <ElectraquestHero />
    <ElectricalServices />
  </main>;
};
export default page;
