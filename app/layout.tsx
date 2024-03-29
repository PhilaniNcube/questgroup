import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navigation/navbar'
import { siteConfig } from '@/config/site'

import { GoogleTagManager } from "@next/third-parties/google";
import Footer from '@/components/navigation/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    "renewable energy resources, water pumps, solar power, batteries, solar batteries, inverters, borehole pumps",
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
  icons: [
    {
      url: "/images/logo-icon.png",
      href: "/images/logo-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <GoogleTagManager
          gtmId="GTM-59P9T94T"
        />
        <Footer />
      </body>
    </html>
  );
}
