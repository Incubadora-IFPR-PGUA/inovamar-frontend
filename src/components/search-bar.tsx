import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  placeholder: string;
  initialValue?: string;
};

function SearchBar({ placeholder, initialValue = "" }: SearchBarProps) {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = value.trim();
    if (trimmed)
      navigate(`/buscar?q=${encodeURIComponent(trimmed)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      handleSearch();
  };

  return (
    <div className="sticky top-24 z-10 py-2 flex items-center justify-between gap-5 lg:w-[45em] lg:mx-auto">
      <div className="flex flex-1 rounded-2xl border-2 border-gray-500 focus-within:border-gray-900">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-12.5 bg-white border-none rounded-l-2xl px-4 font-bold w-full outline-none"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="h-12.5 text-gray-500 text-xl cursor-pointer bg-white border-none rounded-r-2xl px-4"
        >
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
