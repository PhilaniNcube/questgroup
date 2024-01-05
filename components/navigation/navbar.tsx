import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="container py-3 flex justify-between items-center">
        <Link href="/" className="text-sm sm:text-lg font-medium text-white">
          <Image
            src="/images/logo-icon.png"
            alt="Questgroup"
            width={100}
            height={100}
            className="w-16 aspect-square"
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
              className="w-32 lg:w-52 object-cover"
            />
          </Link>
          <Link href="/sunquest" className="px-4 py-2 font-bold">
            <Image
              src="/images/sunquest-logo.png"
              alt="Waterquest"
              width={4500}
              height={947}
              className="w-32 lg:w-40 object-cover"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
