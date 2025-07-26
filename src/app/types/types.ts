export type ListDrugCandidate = {
  id: string;
  name: string;
  status: DrugCandidateStatus;
  description: string;
};

export type DrugCandidate = {
  id: string;
  name: string;
  status: "In Development" | "Approved" | "Rejected";
  description: string;
  mechanismOfAction: string;
  sideEffects: string[];
  clinicalTrials: string[];
  approvalDate?: string;
  manufacturer: string;
  therapeuticArea: string;
  administrationRoute: string;
  dosageForm: string;
};

export type DrugCandidateStatus = "In Development" | "Approved" | "Rejected";
