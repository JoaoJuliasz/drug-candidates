import { getDrugCandidates } from "@/app/utils";
import { DrugCard, NotFoundDrugs } from ".";

type DrugCardWrapperProps = {
  searchQuery: string;
};

export const DrugCardWrapper = async ({
  searchQuery,
}: DrugCardWrapperProps) => {
  const drugCandidates = await getDrugCandidates(searchQuery);

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
