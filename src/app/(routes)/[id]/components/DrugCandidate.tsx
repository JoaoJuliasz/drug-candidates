import { DrugNameWrapper } from "@/app/components";
import { DrugCandidate as DrugCandidateType } from "@/app/types";
import Link from "next/link";
import { DrugInfoItems } from ".";

type DrugCandidateProps = {
  drug: DrugCandidateType;
  query: string;
};

export const DrugCandidate = ({ drug, query }: DrugCandidateProps) => {
  const { name, status } = drug;

  const cardLink = () => {
    let link = "/";
    if (query) {
      link += `?q=${query}`;
    }
    return link;
  };

  return (
    <main className="w-full min-h-screen py-4 flex flex-col gap-3 md:px-4">
      <Link className="size-fit text-blue-400 text-sm" href={cardLink()}>
        Back to list
      </Link>
      <div
        className="max-w-3xl w-full flex flex-col gap-8 border border-[#f1f1f1]
       rounded-sm self-center p-5"
      >
        <DrugNameWrapper name={name} status={status} isDrugPage={true} />
        <DrugInfoItems drug={drug} />
      </div>
    </main>
  );
};
