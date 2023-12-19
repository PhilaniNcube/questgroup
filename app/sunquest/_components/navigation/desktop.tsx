import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const DesktopNavigation = () => {
  return (
    <header className="bg-black shadow-lg hidden lg:block">
      <div className="container flex justify-between text-white py-3">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-medium">
            <Image src="/images/sunquest-logo.png" alt="Sunquest" width={4500} height={947} className="w-48 object-cover" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/sunquest/home">Home Solar</Link>
          <Link href="/sunquest//business">Business Solar</Link>
          {/* <Link href="/quote">
            <Button
              type="button"
              className="rounded-full px-6 py-2 bg-white text-teal-800 hover:text-white"
            >
              Get a Quote
            </Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
};
export default DesktopNavigation;
