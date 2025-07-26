import { Suspense } from "react";
import { DrugCardWrapper, SearchBar } from ".";
import { mockDrugCandidates } from "../mock";

type HomeProps = {
  searchQuery: string;
};

export const Home = ({ searchQuery }: HomeProps) => {
  const filteredDrugs = mockDrugCandidates.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="w-full flex justify-center h-screen">
      <main className="font-san max-w-3xl w-full h-full flex flex-col justify-center gap-4 items-center p-4">
        <SearchBar />
        <div
          className="w-full flex-1 overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300"
        >
          <Suspense key={searchQuery} fallback={<p>loading...</p>}>
            <DrugCardWrapper drugCandidates={filteredDrugs} />
          </Suspense>
        </div>
      </main>
    </div>
  );
};
