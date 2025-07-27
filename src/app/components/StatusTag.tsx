import { DrugCandidateStatus } from "../types";

const statusBg = {
  "In Development": "bg-blue-400",
  Approved: "bg-green-400",
  Rejected: "bg-red-400",
};

type StatusTagProps = {
  status: DrugCandidateStatus;
};

export const StatusTag = ({ status }: StatusTagProps) => {
  return (
    <div
      className={`p-1 rounded-1 text-xs font-bold  text-white rounded-sm ${statusBg[status]}`}
    >
      <span>{status}</span>
    </div>
  );
};
