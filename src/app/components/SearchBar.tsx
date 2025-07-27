"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState<string>(
    () => searchParams.get("q") ?? ""
  );
  const { replace } = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setSearchInput(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchInput) {
        params.set("q", searchInput);
      } else {
        params.delete("q");
      }
      replace(`?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  useEffect(() => {
    if (!searchParams.toString().length && searchInput.length) {
      setSearchInput("");
    }
  }, [searchParams.toString()]);

  return (
    <div className="w-full">
      <input
        data-testid="drug-filter"
        className="w-full border-1 rounded-sm py-1.5 px-2 outline-none border-[#f1f1f1]"
        placeholder="Search drug candidates by name..."
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
};
