"use client";

import Link from "next/link";
import { forwardRef } from "react";

const applications = [
  {
    title: "Drinking Water",
    description:
      "Drinking Water solutions spanning from house size to utility scale",
    href: "/waterquest/applications/drinking-water",
  },
  {
    title: "Irrigation",
    description:
      "For the demanding requirements of farms, we handle irrigation water supply with expert precision and efficiency.",
    href: "/waterquest/applications/irrigation",
  },
  {
    title: "Livestock",
    description:
      "We have great pumping systems for livestock water needs. Ensuring a reliable supply for your herd",
    href: "/waterquest/applications/livestock",
  },
];

// eslint-disable-next-line react/display-name
const ApplicationsMenu = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav ref={ref} className="grid grid-cols-2 gap-4 w-full px-4 py-2">
      {applications.map((item, index) => (
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
export default ApplicationsMenu;
