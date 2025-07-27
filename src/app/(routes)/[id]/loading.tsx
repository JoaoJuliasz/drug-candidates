import { DrugInfoItemsSkeleton } from "./components";

export default function Loading() {
  return (
    <main className="w-full min-h-screen py-4 flex flex-col gap-3 md:px-4 animate-pulse">
      <div className="max-w-3xl w-full flex flex-col gap-8 border border-[#f1f1f1] rounded-sm self-center p-5">
        {/* DrugNameWrapper skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-6 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>

        {/* DrugInfoItems skeleton */}
        <DrugInfoItemsSkeleton />
      </div>
    </main>
  );
}
