import { DrugCandidate } from "../types";

export async function getDrugCandidateById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await fetch(`http://localhost:3000/api/drugs/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drug candidates");
  }
  const { data } = (await res.json()) as { data: DrugCandidate };

  return data;
}
