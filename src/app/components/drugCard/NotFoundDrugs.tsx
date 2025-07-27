import { SearchX } from "lucide-react";
import Link from "next/link";

export const NotFoundDrugs = () => {
  return (
    <div
      className="flex flex-col justify-center w-full items-center gap-2"
      data-testid="list-not-found"
    >
      <div className="flex flex-col gap-1 text-center items-center">
        <SearchX className="text-gray-500" size="32" />
        <label className="text-gray-600 text-base">Drugs not found</label>
        <p className="text-gray-500 text-sm">
          We could not find any drugs that match your current search
        </p>
      </div>
      <Link
        className="rounded-md px-4 py-1.5 text-sm cursor-pointer text-center bg-sky-500/75
      font-semibold text-white opacity-100 focus:outline-none"
        href="/"
        data-testid="list-not-found-btn"
      >
        Clear search
      </Link>
    </div>
  );
};
