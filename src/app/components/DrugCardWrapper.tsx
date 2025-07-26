import { DrugCandidate } from "../mock";
import { DrugCard } from ".";

type DrugCardWrapperProps = {
  drugCandidates: DrugCandidate[];
};

export const DrugCardWrapper = ({ drugCandidates }: DrugCardWrapperProps) => {
  return (
    <div className="w-full flex justify-center flex-col gap-3 overflow-auto h-full">
      {drugCandidates.map((drugCandidate) => (
        <DrugCard key={drugCandidate.id} drugCandidate={drugCandidate} />
      ))}
    </div>
  );
};
