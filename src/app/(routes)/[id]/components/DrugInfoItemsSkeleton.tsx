export const DrugInfoItemsSkeleton = () => (
    <div className="flex flex-col gap-5 w-full">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="h-4 w-1/4 bg-gray-200 rounded" />
          <div className="h-3 w-full bg-gray-100 rounded" />
          <div className="h-3 w-5/6 bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  );
  