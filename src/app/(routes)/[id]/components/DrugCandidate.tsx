import { DrugCandidate as DrugCandidateType } from "@/app/types";
import Link from "next/link";
import { DrugItem } from ".";

type DrugCandidateProps = {
  drug: DrugCandidateType;
};

export const DrugCandidate = ({ drug }: DrugCandidateProps) => {
  return (
    <main className="w-full min-h-screen p-4 flex flex-col">
      <Link className="size-fit text-blue-400" href="/">
        Back to list
      </Link>
      <div className="max-w-3xl w-full min-h-full border border-[#f1f1f1] rounded-sm self-center">
        <p>{drug.name}</p>
        <DrugItem title="Description" value={drug.description} />
      </div>
    </main>
  );
};
