
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex min-h-screen justify-center items-center bg-blue-600 text-white text-center text-3xl">
        <Link href="/waterquest">Waterquest</Link>
      </div>
      <div className="flex min-h-screen justify-center items-center bg-teal-600 text-white text-center text-3xl">
        <Link href="/sunquest">Sunquest</Link>
      </div>
    </main>
  );
}
