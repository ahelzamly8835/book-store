import React, { useState } from "react";
import HeaderLogin from "../../pages/HeaderLogin";
import SearchBar from "../../pages/SearchBar";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";
import BookCard from "./BookCard";
import Footer from "../ui/Footer";

import { books as allBooks, categories } from "../../Data/api";

const BookPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredBooks = selectedCategory
    ? allBooks.filter((book) => book.categoryId === selectedCategory)
    : allBooks;

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <HeaderLogin showSearch={false} height="h-32" />
      
      {/* SearchBar: Responsive width adjustment */}
      <div className="px-4 md:px-10 mt-6">
        <SearchBar width="max-w-[50em]" />
      </div>

      {/* Main Layout: Stacks on mobile, side-by-side on large screens */}
      <div className="px-4 md:px-10 py-10 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar: Full width on mobile, fixed width on desktop */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Content Area: Occupies remaining space */}
        <div className="flex-1 space-y-6">
          <Pagination
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookPage;