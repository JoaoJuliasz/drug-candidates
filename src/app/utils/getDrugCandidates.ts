import { mockDrugCandidates } from "./mock";

export async function getDrugCandidates(query: string) {
  return mockDrugCandidates.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}
