import { StatusTag } from ".";
import { DrugCandidateStatus } from "../types";

type DrugNameWrapperProps = {
  name: string;
  status: DrugCandidateStatus;
  isDrugPage?: boolean
};

export const DrugNameWrapper = ({ name, status, isDrugPage }: DrugNameWrapperProps) => {
  return (
    <div className="flex justify-between w-full items-center">
      <h5 className={`text-gray-800 font-bold ${isDrugPage ? 'text-xl' : 'text-base'}`}>{name}</h5>
      <StatusTag status={status} />
    </div>
  );
};
