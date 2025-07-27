import Link from "next/link";

export const NotFoundDrugs = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-2">
      <div className="flex flex-col gap-1 text-center">
        <label className="text-gray-600 text-base">Drugs not found</label>
        <p className="text-gray-500 text-sm">We could not find any drugs that match your current search</p>
      </div>
      <Link
        className="rounded-md px-4 py-1.5 text-sm cursor-pointer text-center border border-[#ccc]
      font-semibold text-gray-600 opacity-100 focus:outline-none"
      href="/"
      >
        Clear search
      </Link>
    </div>
  );
};
