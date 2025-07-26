export const DrugCardLoader = () => {
  return (
    <div className="flex flex-col gap-3 py-4 px-3 w-full border border-[#f1f1f1] rounded-sm animate-pulse">
      {/* Title */}
      <div className="h-4 w-1/3 bg-gray-200 rounded" />

      {/* Status */}
      <div className="h-3 w-1/4 bg-gray-200 rounded" />

      {/* Description lines */}
      <div className="h-3 w-full bg-gray-200 rounded" />
      <div className="h-3 w-5/6 bg-gray-200 rounded" />
      <div className="h-3 w-2/3 bg-gray-200 rounded" />
    </div>
  );
};

