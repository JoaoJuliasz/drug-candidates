import { getDrugCandidateById } from "@/app/utils";
import { DrugCandidate } from "./components";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const drug = await getDrugCandidateById(id);

  return <DrugCandidate drug={drug} />;
}
