import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="container py-3 flex justify-between items-center">
        <Link href="/" className="text-sm sm:text-lg font-medium text-white">
          <Image
            src="/images/questgroup-logo-wide.png"
            alt="Questgroup"
            width={1275}
            height={249}
            className="w-44 object-cover"
          />
          <p className="sr-only">Questgroup</p>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/waterquest" className=" px-4 py-2 font-bold">
            <Image
              src="/images/logo.png"
              alt="Waterquest"
              width={4500}
              height={947}
              className="w-32 lg:w-44 object-cover"
            />
          </Link>
          <Link href="/sunquest" className="px-4 py-2 font-bold">
            <Image
              src="/images/sunquest-logo.png"
              alt="Waterquest"
              width={4500}
              height={947}
              className="w-32 lg:w-36 object-cover"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
