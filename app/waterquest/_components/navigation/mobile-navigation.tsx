"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex md:hidden items-center justify-center shadow-lg z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo-letters.png"
            width={4500}
            height={2521}
            alt="Waterquest Logo"
            className="w-16 object-cover"
          />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <MenuIcon className="" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <Separator />
            <div className="flex flex-col gap-y-2 py-3">
              <Link onClick={() => setOpen(false)} href="/waterquest/solutions">
                Solutions
              </Link>
              <div className="pl-8 flex flex-col gap-y-5">
                <Link
                  className="text-sm"
                  onClick={() => setOpen(false)}
                  href="/waterquest/solutions/residential"
                >
                  Residential
                </Link>
                <Link
                  className="text-sm"
                  onClick={() => setOpen(false)}
                  href="/waterquest/solutions/community"
                >
                  Community
                </Link>
                <Link
                  className="text-sm"
                  onClick={() => setOpen(false)}
                  href="/waterquest/solutions/utilities"
                >
                  Utilities
                </Link>
              </div>
              <Separator />
              <Link onClick={() => setOpen(false)} href="/waterquest/applications">
                Applications
              </Link>
              <div className="pl-8 flex flex-col gap-y-5">
                <Link
                  className="text-sm"
                  onClick={() => setOpen(false)}
                  href="/waterquest/applications/drinking-water"
                >
                  Drinking Water
                </Link>
                <Link
                  className="text-sm"
                  onClick={() => setOpen(false)}
                  href="/waterquest/applications/irrigation"
                >
                  Irrigation
                </Link>
                <Link
                  className="text-sm"
                  onClick={() => setOpen(false)}
                  href="/waterquest/applications/livestock"
                >
                  Livestock
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileNavigation;
