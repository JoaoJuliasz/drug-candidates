"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>(
    () => searchParams.get("q") ?? ""
  );
  const { replace } = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    replace(`?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <input
        className="w-full border-1 rounded-sm py-1.5 px-2 outline-none border-[#f1f1f1]"
        placeholder="Search drug candidates by name..."
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
};
