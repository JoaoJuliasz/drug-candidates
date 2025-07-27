import { getDrugCandidateById } from "@/app/utils";
import { notFound } from "next/navigation";
import { DrugCandidate } from "./components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const drug = await getDrugCandidateById(id);
  return {
    title: drug.name,
    description: `Detailed information about ${drug.name}`,
  };
}

export default async function page({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{
    q?: string;
  }>;
}) {
  const { id } = await params;
  try {
    const drug = await getDrugCandidateById(id);
    const sParams = await searchParams;
    const query = sParams?.q || "";
    return <DrugCandidate drug={drug} query={query}/>;
  } catch (error) {
    notFound();
  }
}
