import { ListDrugCandidate } from "../types";

export async function getDrugCandidates(query: string) {
  const res = await fetch(`http://localhost:3000/api/drugs?query=${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drug candidates");
  }
  const { data } = (await res.json()) as { data: ListDrugCandidate[] };

  return data;
}
