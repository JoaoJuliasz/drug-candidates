import { DrugCardLoader } from ".";

export const DrugCardSkeletonList = () => (
    <div className="w-full flex flex-col gap-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <DrugCardLoader key={index} />
      ))}
    </div>
  );
  