import { ListDrugCandidate } from "../types";

const url = process.env.NEXT_PUBLIC_URL;
export async function getDrugCandidates(query: string) {
  const res = await fetch(`${url}/api/drugs?query=${query}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drug candidates");
  }
  const { data } = (await res.json()) as { data: ListDrugCandidate[] };

  return data;
}
