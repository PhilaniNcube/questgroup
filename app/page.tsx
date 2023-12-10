import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex justify-center space-x-5">
     <Link href="/waterquest">Waterquest</Link>
     <Link href="/sunquest">Sunquest</Link>
    </main>
  )
}
