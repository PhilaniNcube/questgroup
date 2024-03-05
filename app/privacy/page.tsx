
import Link from "next/link"
import React from "react"

export default function PrivacyPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We value your privacy and are committed to protecting your personal information. This Privacy Policy
              explains what information we collect, how we use it, and your rights in relation to it.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-1">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Information We Collect</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We collect various types of information, including your name, email address, and usage data to improve
              your experience on our platform.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">How We Use Your Information</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We use your information to provide, maintain, and improve our services, as well as to communicate with you
              on these and other topics.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">How We Protect Your Information</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We implement a variety of security measures to maintain the safety of your personal information.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Third Parties</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Your Rights</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You have the right to access, correct, or delete your personal information at any time. Please contact us
              to exercise these rights.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">

        </div>
      </div>
    </main>
  )
}

