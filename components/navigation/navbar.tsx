import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="container py-3 flex justify-between items-center">
        <Link href="/" className="text-sm sm:text-lg font-medium text-white">
          QuestGroup
        </Link>
        <nav className="flex items-center space-x-4">
          <Link
            href="/waterquest"
            className="bg-blue-600 hover:bg-blue-800 text-sm sm:text-lg text-white rounded-full px-4 py-2 font-bold"
          >
            Waterquest
          </Link>
          <Link
            href="/sunquest"
            className="bg-brand hover:bg-teal-800 text-sm sm:text-lg text-white rounded-full px-4 py-2 font-bold"
          >
            Sunquest
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
