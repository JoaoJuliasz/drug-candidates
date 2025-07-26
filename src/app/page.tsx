import { DrugCardWrapper, SearchBar } from "./components";
import { mockDrugCandidates } from "./mock";

export default function Page() {
  return (
    <div className="w-full flex justify-center max-h-screen">
      <main className="font-san max-w-3xl w-full h-full flex flex-col justify-center gap-4 items-center p-4">
        <SearchBar />
        <DrugCardWrapper drugCandidates={mockDrugCandidates} />
      </main>
    </div>
  );
}
