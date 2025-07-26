import { ListDrugCandidate } from "@/app/types";
import Link from "next/link";

type DrugCardProps = {
  drugCandidate: ListDrugCandidate;
};

const statusBg = {
  "In Development": "bg-blue-400",
  Approved: "bg-green-400",
  Rejected: "bg-red-400",
};

export const DrugCard = ({
  drugCandidate: { description, id, name, status },
}: DrugCardProps) => {
  return (
    <Link
      href={`/${id}`}
      className="flex flex-col gap-3 py-4 px-3 w-full border border-[#f1f1f1] rounded-sm
      transition delay-50 duration-300 ease-in-out hover:bg-[#f1f1f1]"
    >
      <div className="flex justify-between w-full">
        <h5 className="text-gray-800 font-bold text-base">{name}</h5>
        <div
          className={`p-1 rounded-1 text-xs font-bold  text-white rounded-sm ${statusBg[status]}`}
        >
          <span>{status}</span>
        </div>
      </div>
      <p className="text-gray-500 text-sm">{description}</p>
    </Link>
  );
};
