import { DrugCandidate } from "../types";

const url = process.env.NEXT_PUBLIC_URL;
export async function getDrugCandidateById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(url)
  const res = await fetch(`${url}/api/drugs/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch drug candidates");
  }
  const { data } = (await res.json()) as { data: DrugCandidate };

  return data;
}
