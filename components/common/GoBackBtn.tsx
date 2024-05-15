"use client";

import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function GoBackBtn({ children }: { children: ReactNode }) {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <>
      {children}
      <button
        onClick={goBack}
        className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-5 w-5 rtl:rotate-180"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </button>
    </>
  );
}
