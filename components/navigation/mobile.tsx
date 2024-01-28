"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

const Mobile = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-y-3">
          <Link
            onClick={() => setIsOpen(false)}
            href="/sunquest"
            className="px-2 py-2 font-bold"
          >
            <Image
              src="/images/sunquest.webp"
              alt="Waterquest"
              width={470}
              height={92}
              className="w-32 lg:w-40 object-cover"
            />
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/waterquest"
            className=" px-2 py-2 font-bold"
          >
            <Image
              src="/images/waterquest.webp"
              alt="Waterquest"
              width={4500}
              height={947}
              className="w-40 lg:w-44 object-cover"
            />
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/electraquest"
            className="px-2 py-2 font-bold"
          >
            <Image
              src="/images/electraquest.webp"
              alt="Electraquest"
              width={470}
              height={72}
              className="w-44 lg:w-48 object-cover"
            />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Mobile;
