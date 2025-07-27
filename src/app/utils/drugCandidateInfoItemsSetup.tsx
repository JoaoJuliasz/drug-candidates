import { DrugCandidate } from "../types";

export const drugCandidateInfoItemsSetup = (drug: DrugCandidate) => {
  const {
    administrationRoute,
    clinicalTrials,
    description,
    dosageForm,
    manufacturer,
    mechanismOfAction,
    sideEffects,
    therapeuticArea,
    approvalDate,
  } = drug;
  return [
    { title: "Description", value: description, key: "description" },
    {
      title: "Mechanism Of Action",
      value: mechanismOfAction,
      key: "mechanismOfAction",
    },
    {
      title: "Side Effects",
      value: sideEffects.join(", "),
      key: "sideEffects",
    },
    {
      title: "Therapeutic Area",
      value: therapeuticArea,
      key: "therapeuticArea",
    },
    { title: "Dosage Form", value: dosageForm, key: "dosageForm" },
    { title: "Manufacturer", value: manufacturer, key: "manufacturer" },
    {
      title: "Administration Route",
      value: administrationRoute,
      key: "administrationRoute",
    },
    {
      title: "Clinical Trials",
      value: clinicalTrials.join(", "),
      key: "clinicalTrials",
    },
    ...(approvalDate
      ? [{ title: "Approval Date", value: approvalDate, key: "approvalDate" }]
      : []),
  ];
};
