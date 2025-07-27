"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { Search, X } from "lucide-react";

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

  const handleClear = () => {
    setSearchInput("");
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
    <div className="w-full flex items-center border-1 pr-1 rounded-sm border-[#f1f1f1] text-gray-500">
      <Search className="ml-2" />
      <input
        data-testid="drug-filter"
        className="w-full border-none py-1.5 px-2 outline-none "
        placeholder="Search drug candidates by name..."
        value={searchInput}
        onChange={handleChange}
      />
      {searchInput.length > 0 && (
        <X onClick={handleClear} size="16" className="cursor-pointer mr-2" data-testid="search-input-clear"/>
      )}
    </div>
  );
};
