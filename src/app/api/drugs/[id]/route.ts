import { NextResponse } from "next/server";
import { mockDrugCandidates } from "../mock";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const drugId = (await params).id;

  const foundDrug = mockDrugCandidates.find((item) => item.id === drugId);
  if (!foundDrug) {
    return NextResponse.json(
      { error: "Drug candidate not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: foundDrug });
}
