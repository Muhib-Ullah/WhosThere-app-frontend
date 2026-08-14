import React from "react";
import { Search } from "lucide-react";

const SearchField = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative w-full sm:w-64">
      <Search size={17}
        strokeWidth={1.7}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-google-sans block w-full rounded-sm bg-white px-3 py-2 pl-9 pr-3 text-base outline-1 -outline-offset-1 outline-gray-300
          transition duration-200 ease-in-out focus:outline-1 focus:outline-primary placeholder:text-gray-400 sm:text-sm/6"
      />
    </div>
  );
};

export default SearchField;