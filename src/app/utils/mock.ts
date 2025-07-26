export type DrugCandidate = {
  id: string;
  name: string;
  status: DrugCandidateStatus;
  description: string;
};

export type DrugCandidateStatus = "In Development" | "Approved" | "Rejected";

export const mockDrugCandidates: DrugCandidate[] = [
  {
    id: "dc-001",
    name: "Neurodexin",
    status: "In Development",
    description:
      "Targets early-stage Alzheimer’s by inhibiting tau protein aggregation.",
  },
  {
    id: "dc-002",
    name: "Cardiostat",
    status: "Approved",
    description:
      "Beta-blocker that lowers blood pressure with reduced side effects.",
  },
  {
    id: "dc-003",
    name: "Immunocure",
    status: "Approved",
    description: "Personalized T-cell immunotherapy for late-stage melanoma.",
  },
  {
    id: "dc-004",
    name: "Glucostatin-X",
    status: "In Development",
    description: "Regulates insulin production in Type 2 diabetes patients.",
  },
  {
    id: "dc-005",
    name: "Pulmovir",
    status: "In Development",
    description:
      "Antiviral treatment for respiratory infections like RSV and influenza.",
  },
  {
    id: "dc-006",
    name: "Oncomab",
    status: "Rejected",
    description: "Failed monoclonal antibody drug for breast cancer treatment.",
  },
  {
    id: "dc-007",
    name: "Hepacure",
    status: "Approved",
    description: "Cures chronic Hepatitis C with over 95% effectiveness.",
  },
  {
    id: "dc-008",
    name: "Dermaclear",
    status: "In Development",
    description: "Topical treatment for severe eczema and psoriasis.",
  },
  {
    id: "dc-009",
    name: "Nephrosafe",
    status: "Rejected",
    description:
      "Intended to slow kidney failure, but showed poor trial outcomes.",
  },
  {
    id: "dc-010",
    name: "Oculonix",
    status: "In Development",
    description: "Eye drop therapy for age-related macular degeneration.",
  },
  {
    id: "dc-011",
    name: "Pancrelif",
    status: "Approved",
    description: "Pancreatic enzyme booster for patients with cystic fibrosis.",
  },
  {
    id: "dc-012",
    name: "Arthricalm",
    status: "In Development",
    description:
      "Anti-inflammatory designed for rheumatoid arthritis pain relief.",
  },
  {
    id: "dc-013",
    name: "Lungair",
    status: "Rejected",
    description: "Failed COPD therapy targeting chronic airway inflammation.",
  },
  {
    id: "dc-014",
    name: "Zentraphin",
    status: "Approved",
    description: "Non-opioid pain reliever for chronic nerve pain.",
  },
  {
    id: "dc-015",
    name: "Myostem",
    status: "In Development",
    description: "Muscle regeneration therapy for muscular dystrophy.",
  },
  {
    id: "dc-016",
    name: "Thymogen",
    status: "Rejected",
    description: "Immunomodulator that failed to show efficacy in trials.",
  },
  {
    id: "dc-017",
    name: "Biosera",
    status: "In Development",
    description: "Biosimilar serum for autoimmune disease treatment.",
  },
  {
    id: "dc-018",
    name: "Metaboquest",
    status: "Approved",
    description: "Improves metabolic rate to support obesity management.",
  },
  {
    id: "dc-019",
    name: "Cognitrol",
    status: "In Development",
    description: "Enhances cognitive function in patients with mild dementia.",
  },
  {
    id: "dc-020",
    name: "Virostatin",
    status: "Rejected",
    description:
      "Antiviral compound for herpesvirus that failed safety benchmarks.",
  },
];
