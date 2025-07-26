export type DrugCandidate = {
  id: string;
  name: string;
  status: DrugCandidateStatus;
  description: string;
};

export type DrugCandidateStatus = "In Development" | "Approved" | "Rejected";
