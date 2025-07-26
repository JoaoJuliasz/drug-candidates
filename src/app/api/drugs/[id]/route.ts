import { NextResponse } from "next/server";
import { mockDrugCandidates } from "../mock";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const drugId = (await params).id;

  const foundDrug = mockDrugCandidates.find((item) => item.id === drugId);

  return NextResponse.json({ data: foundDrug });
}
