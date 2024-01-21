import HomePageHero from "./_home-page-components/home-page-hero";
import Solutions from "./_home-page-components/home-page-solutions";
import CustomerProfiles from "./_home-page-components/customer-profiles";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Waterquest | Your Solar Powered Pump Solution",
  description:
    "Industry-leading supplier of eco-friendly, reliable Lorentz Solar Water Pumps for farms, gardens, pools and more. Save money and energy with our solar powered water pump solutions.",
  keywords:
    "Solar Water Pumps, Solar Powered Pumps, Lorentz Solar Water Pumps, Renewable Energy Solutions, Sustainable Water Pumping, Eco-friendly water pumps, Energy-efficient water pumps",
  robots: "index, follow",
  openGraph: {
    images: "/images/logo-icon.png",
    description:
      "Industry-leading supplier of eco-friendly, reliable Lorentz Solar Water Pumps for farms, gardens, pools and more. Save money and energy with our solar powered water pump solutions.",
    title: "Waterquest | Your Solar Powered Pump Solution",
  },
};

//<meta name="google-site-verification" content="Y2Gt5-pXR2jy_rl-qcK5LTUGtj3DqrJ0LdpUESi6c4g" />

export default function Component() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="Y2Gt5-pXR2jy_rl-qcK5LTUGtj3DqrJ0LdpUESi6c4g"
        />
      </Head>
      <main className="">
        <HomePageHero />
        <Solutions />
        <CustomerProfiles />
      </main>
    </>
  );
}
