
import Link from 'next/link'
import HomeHero from './(home)/home-hero';
import Principles from './(home)/questgroup-principles';
import { Metadata } from 'next';
import { siteConfig } from "@/config/site";
import Reasons from './(home)/reasons';


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    "renewable energy resources, water pumps, solar power, batteries, solar batteries, inverters, borehole pumps",
  verification: {
    google: "0q-lkDFLoCCydacYTBApXQFmXYHFKKLl1KVgP6exwVo",
  },
  openGraph: {
    images: [
      {
        url: "https://www.questgroup.co.za/images/opengraph.png",
        width: 1882,
        height: 885,
      },
    ],
    description: "Renewable Solar Energy Solutions.",
    title: "Questgroup | Renewable Solar Energy Solutions.",
    countryName: "South Africa",
    url: "https://www.questgroup.co.za",
  },
  twitter: {
    site: "@questgroup_",
    card: "summary_large_image",
    images: "/images/opengraph.png",
  },
  icons: [
    {
      url: "/images/logo-icon.png",
      href: "/images/logo-icon.png",
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-300 to-fuchsia-200">
      <HomeHero />
      <Principles />
      <Reasons />
    </main>
  );
}
