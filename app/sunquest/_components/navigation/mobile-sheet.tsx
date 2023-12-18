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
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

const MobileSheet = () => {

  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-teal-600">
          <MenuIcon className="text-slate-50" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetClose />
        </SheetHeader>
        <Separator />
        <div onClick={() => setOpen(false)} className="mt-4 flex flex-col space-y-3">
          <Link className="text-lg font-medium" href="/sunquest/home">
            Home Solar
          </Link>
          <Link className="text-lg font-medium" href="/sunquest/business">
            Business Solar
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileSheet;
