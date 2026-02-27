import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ width = "max-w-[600px]" }) => {
  return (
    <div className="w-full md:flex hidden justify-center mt-10 pr-14 ">
      <div
        className={`relative w-full ${width} h-12 md:h-14 flex items-center border border-gray-300 rounded-full pl-5 md:pl-6 bg-white shadow-sm overflow-hidden`}
      >
        <input
          type="text"
          placeholder="Search for books..."
          className="outline-none w-full bg-transparent text-gray-700 text-sm md:text-base placeholder:text-gray-400"
        />

        <button
          type="submit"
          className="cursor-pointer bg-mainColor text-white w-14 md:w-16 self-stretch flex justify-center items-center"
        >
          <CiSearch className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
