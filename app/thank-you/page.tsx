"use client";
// @ts-ignore
import { sendGTMEvent } from "@next/third-parties/google";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 py-24 text-center space-y-8 bg-gray-50 dark:bg-gray-800">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-200">
        Thank You!
      </h1>
      <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400">
        We appreciate your input. We will be in touch with you shortly!
      </p>
      <div className="flex justify-center items-center">
        <IconHeart className="h-24 w-24 text-red-500 animate-pulse" />
      </div>
      <Link
        onClick={() => sendGTMEvent({ event: "generate_lead" })}
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        href="/"
      >
        Go Home
      </Link>
    </section>
  );
}

function IconHeart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
