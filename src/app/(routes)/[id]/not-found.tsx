import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main
      className="h-screen flex flex-col justify-center gap-3"
      data-testid="drug-not-found"
    >
      <div className="flex flex-col justify-center text-center items-center">
        <TriangleAlert className="text-yellow-500" size="32"/>
        <h3 className="text-base text-gray-700">Oops! Drug not found</h3>
        <h5 className="text-sm text-gray-600">
          We suggest you back to drugs list
        </h5>
      </div>
      <Link
        className="rounded-md bg-sky-500/75 px-4 py-2 text-sm cursor-pointer text-center
      font-semibold text-white opacity-100 focus:outline-none"
        href="/"
        data-testid="drug-not-found-btn"
      >
        Back to list
      </Link>
    </main>
  );
}
