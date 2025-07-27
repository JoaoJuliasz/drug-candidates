import { ListDrugCandidate } from "@/app/types";
import Link from "next/link";
import { DrugNameWrapper } from "..";

type DrugCardProps = {
  drugCandidate: ListDrugCandidate;
  query: string;
};

export const DrugCard = ({
  drugCandidate: { description, id, name, status },
  query,
}: DrugCardProps) => {
  const cardLink = () => {
    let link = `${id}`;
    if (query) {
      link += `?q=${query}`;
    }
    return link;
  };
  return (
    <Link
      href={cardLink()}
      className="flex flex-col gap-3 py-4 px-3 w-full border border-[#f1f1f1] rounded-sm
      transition delay-50 duration-150 ease-in-out hover:bg-[#f1f1f1]"
    >
      <DrugNameWrapper name={name} status={status} />
      <p className="text-gray-500 text-sm">{description}</p>
    </Link>
  );
};
