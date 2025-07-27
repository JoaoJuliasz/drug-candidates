import { DrugNameWrapper } from "@/app/components";
import { DrugCandidate as DrugCandidateType } from "@/app/types";
import Link from "next/link";
import { DrugInfoItems } from ".";

type DrugCandidateProps = {
  drug: DrugCandidateType;
};

export const DrugCandidate = ({ drug }: DrugCandidateProps) => {
  const { name, status } = drug;
  return (
    <main className="w-full min-h-screen py-4 flex flex-col gap-3 md:px-4">
      <Link className="size-fit text-blue-400 text-sm" href="/">
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
