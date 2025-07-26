import { NextResponse } from "next/server";
import { mockDrugCandidates } from "./mock";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase() || "";
  
  const filteredDrugs = mockDrugCandidates.filter((item) =>
    item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return NextResponse.json({ data: filteredDrugs });
}
