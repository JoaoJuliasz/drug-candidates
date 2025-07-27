import { getDrugCandidateById } from "@/app/utils";
import { notFound } from "next/navigation";
import { DrugCandidate } from "./components";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const drug = await getDrugCandidateById(id);
  return {
    title: drug.name,
    description: `Detailed information about ${drug.name}`,
  };
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  try {
    const drug = await getDrugCandidateById(id);
    return <DrugCandidate drug={drug} />;
  } catch (error) {
    notFound();
  }
}
