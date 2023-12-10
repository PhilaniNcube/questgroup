"use client";

import Link from "next/link";
import { forwardRef } from "react";

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


// eslint-disable-next-line react/display-name
const SolutionsMenu = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav ref={ref} className="grid grid-cols-2 gap-4 w-full py-2 px-4">
      {solutions.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="w-full cols-span-1 hover:bg-zinc-100 p-3"
        >
          <h3 className="font-medium text-lg">{item.title}</h3>
          <p className="text-slate-400 text-sm">{item.description}</p>
        </Link>
      ))}
    </nav>
  );
});
export default SolutionsMenu;
