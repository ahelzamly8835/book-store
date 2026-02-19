import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="w-full px-4 py-6 md:py-10 flex justify-center">
      <div
        className="
          relative
          w-full 
          max-w-[600px] 
          h-12 md:h-14 
          flex items-center 
          justify-between
          border border-gray-300
          rounded-full
          pl-5 md:pl-6
          bg-white
          shadow-sm
          focus-within:border-mainColor
          focus-within:ring-1
          focus-within:ring-mainColor
          transition-all
          overflow-hidden
        "
      >
        <input
          type="text"
          placeholder="Search for books..."
          className="outline-none w-full bg-transparent text-gray-700 text-sm md:text-base placeholder:text-gray-400"
          aria-label="Search books"
        />

        <button
          type="submit"
          className="
            cursor-pointer 
            bg-mainColor 
            text-white 
            w-14 md:w-16 
            self-stretch
            flex justify-center 
            items-center 
            hover:brightness-90
            active:scale-95
            transition-all
          "
        >
          <CiSearch className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
