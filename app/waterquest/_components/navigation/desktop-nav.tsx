"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import ApplicationsMenu from "./applications-menu";
import { ChevronDown } from "lucide-react";
import SolutionsMenu from "./solutions-menu";

let solutions = [
  {
    title: "Residential",
    description:
      "We provide water solutions for residential water sources like pools, boreholes, and wellpoints.",
    href: "/waterquest/solutions/residential",
  },

  {
    title: "Community",
    description: "We provide water solutions for community scale projects",
    href: "/waterquest/solutions/community",
  },
  {
    title: "Utilities",
    description:
      "We have finding economically attractive solutions importnant for water service providers.",
    href: "/waterquest/solutions/utilities",
  },
];

const applications = [
  {
    title: "Drinking Water",
    href: "/waterquest/applications/drinking-water",
  },
  {
    title: "Irrigation",
    // description:
    //   "For the demanding requirements of farms, we handle irrigation water supply with expert precision and efficiency.",
    href: "/waterquest/applications/irrigation",
  },
  {
    title: "Livestock",
    // description:
    //   "We have great pumping systems for livestock water needs. Ensuring a reliable supply for your herd",
    href: "/waterquest/applications/irrigation",
  },
];

const DesktopNav = () => {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);

  const refs = useRef<(HTMLElement | null)[]>([]);

  const onMouseEnter = (index: number, el: HTMLElement) => {
    setHovering(index);
    setPopoverLeft(el.offsetLeft);

    const menuElement = refs.current[index];
    if (menuElement) {
      setPopoverHeight(menuElement.offsetHeight + 20);
    }
  };

  return (
    <div
      className="hidden md:flex items-center justify-between relative z-50"
      onMouseLeave={() => {
        setHovering(null);
      }}
    >
      <div className="flex items-center justify-between container">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={4500}
              height={947}
              alt="Waterquest Logo"
              className="w-64 object-cover"
            />
          </Link>

          <nav className="flex relative space-x-4 items-center">
            <Link
              onMouseEnter={(e) => onMouseEnter(1, e.currentTarget)}
              href="/waterquest/solutions"
              className="flex items-center space-x-2"
            >
              Solutions
              <ChevronDown className="w-5 h-5" />
            </Link>
            <Link
              onMouseEnter={(e) => onMouseEnter(2, e.currentTarget)}
              href="/waterquest/applications"
              className="flex items-center space-x-2"
            >
              Applications
              <ChevronDown className="w-5 h-5" />
            </Link>{" "}
            <Link onMouseEnter={(e) => setHovering(null)} href="/waterquest/about">
              About Us
            </Link>
            <Link onMouseEnter={(e) => setHovering(null)} href="/waterquest/contact">
              Contact
            </Link>
            {hovering && (
              <div
                style={{
                  left: popoverLeft || 0,
                  height: popoverHeight || 0,
                }}
                className="absolute top-8 p-3 bg-slate-50 shadow rounded-md transform-gpu overflow-hidden w-[550px] transition-all duration-150 "
              >
                <div
                  className={cn(
                    "absolute transition-opacity duration-150 w-full",
                    hovering === 1
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  <SolutionsMenu
                    ref={(element) => (refs.current[1] = element)}
                  />
                </div>
                <div
                  className={cn(
                    "absolute transition-opacity duration-150 w-full",
                    hovering === 2
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                  <ApplicationsMenu
                    ref={(element) => (refs.current[2] = element)}
                  />
                </div>
              </div>
            )}
          </nav>
        </div>

        <Link
          href="/quote"
          className="text-sm hover:bg-blue-950 transition-colors py-2 bg-blue-600 text-white rounded-full px-4"
        >
          Request A Quote
        </Link>
      </div>
    </div>
  );
};
export default DesktopNav;
