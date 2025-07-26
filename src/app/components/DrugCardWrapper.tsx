import { DrugCandidate } from "../mock";
import { DrugCard, NotFoundDrugs } from ".";

type DrugCardWrapperProps = {
  drugCandidates: DrugCandidate[];
};

export const DrugCardWrapper = ({ drugCandidates }: DrugCardWrapperProps) => {
  if (!drugCandidates.length) {
    return <NotFoundDrugs />;
  }

  return (
    <div className="w-full flex justify-center flex-col gap-3">
      {drugCandidates.map((drugCandidate) => (
        <DrugCard key={drugCandidate.id} drugCandidate={drugCandidate} />
      ))}
    </div>
  );
};
