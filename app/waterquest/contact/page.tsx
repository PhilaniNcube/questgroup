import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Waterquest",
  description: "Get in touch with Waterquest",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description: "Get in touch with Waterquest",
    title: "Contact | Waterquest",
  },
};

const ContactPage = () => {
  return <main>
    <div className="container py-12">
      <div className="max-w-3xl mx-auto min-h-[70vh] flex items-center justify-center">
        <ContactForm />
      </div>
    </div>
  </main>;
};
export default ContactPage;
