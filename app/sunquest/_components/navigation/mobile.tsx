"use client"

import Image from "next/image";
import Link from "next/link";
import MobileSheet from "./mobile-sheet";

const MobileNav = () => {
  return <div className="flex justify-between items-center lg:hidden py-2">
    <div className="container flex justify-between items-center">
      <Link href="/sunquest" className="text-lg font-medium">
        <Image src="/images/sunquest-icon.png" alt="Sunquest" width={4500} height={4500} className="w-12 object-cover" />
      </Link>
      <div>
        <MobileSheet />
      </div>
    </div>
  </div>;
};
export default MobileNav;
