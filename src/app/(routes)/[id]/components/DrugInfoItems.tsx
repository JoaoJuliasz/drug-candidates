import { DrugCandidate } from "@/app/types";
import { drugCandidateInfoItemsSetup } from "@/app/utils";
import { DrugItem } from ".";

type DrugInfoItemsProps = {
  drug: DrugCandidate;
};

export const DrugInfoItems = ({ drug }: DrugInfoItemsProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {drugCandidateInfoItemsSetup(drug).map(({ title, value, key }) => (
        <DrugItem key={key} title={title} value={value} />
      ))}
    </div>
  );
};
