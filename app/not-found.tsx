"use client";

import GoBackBtn from "@/components/common/GoBackBtn";
import Link from "next/link";
import { BiHome } from "react-icons/bi";

export default function NotFound() {
  return (
    <section className="min-h-[70dvh]">
      <div className="container mx-auto flex items-center justify-center px-6 py-32">
        <div className="w-full ">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              We lost this page
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              We searched high and low, but couldn’t find what you’re looking
              for.Let’s find a better place for you to go.
            </p>

            <div className="mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
              <Link href="/">
                <button className="primary-btn mx-auto flex w-fit items-center gap-2">
                  <BiHome className="text-xl" /> Take me home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
