import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 bg-zinc-100">
      <div className="container">
        <div className="flex flex-col lg:justify-between items-start md:flex-row">
          <div className="flex flex-col">
            <Link
              href="/"
              prefetch={false}
              className="text-sm sm:text-lg font-medium text-white"
            >
              <Image
                src="/images/questgroup-logo-wide.webp"
                alt="Questgroup"
                width={1275}
                height={249}
                className="w-40 md:w-48 object-cover"
              />
              <p className="sr-only">Questgroup</p>
            </Link>
            <Link
              className="flex items-center text-sm mt-2 gap-x-2"
              href="mailto:darren@questgroup.co.za"
            >
              <Mail />
              <span>darren@questgroup.co.za</span>
            </Link>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} Questgroup. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              href="/sunquest"
              prefetch={false}
              className="px-2 py-2 font-bold"
            >
              <Image
                src="/images/sunquest.webp"
                alt="Waterquest"
                width={470}
                height={92}
                className="w-36 lg:w-40 object-cover"
              />
            </Link>
            <Link
              href="/waterquest"
              prefetch={false}
              className="px-2 py-2 font-bold"
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
              prefetch={false}
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
