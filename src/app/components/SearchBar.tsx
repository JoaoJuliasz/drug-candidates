import { Dispatch, SetStateAction } from "react";

// type SearchBarProps = {
//     searchValue: string
//     setSearchValue: Dispatch<SetStateAction<string>>
// }

export const SearchBar = () => {
  return (
    <div className="w-full">
      <input
        className="w-full border-1 rounded-sm py-1.5 px-2 outline-none border-[#f1f1f1]"
        placeholder="Search drug candidates by name..."
      />
    </div>
  );
};
