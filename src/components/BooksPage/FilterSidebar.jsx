import React from "react";
import { VscSettings } from "react-icons/vsc";

const FilterSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-2 mb-6">
        <VscSettings className="text-xl" />
        <h2 className="text-lg font-semibold">Filter</h2>
      </div>

      <div className="space-y-1">
        <label className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === null}
              onChange={() => setSelectedCategory(null)}
              className="h-4 w-4 accent-mainColor cursor-pointer"
            />
            <span
              className={
                selectedCategory === null ? "font-medium text-mainColor" : ""
              }
            >
              All Categories
            </span>
          </div>
        </label>

        {categories.map((cat) => (
          <label
            key={cat.id}
            className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="h-4 w-4 accent-mainColor cursor-pointer"
              />
              <span
                className={
                  selectedCategory === cat.id
                    ? "font-medium text-mainColor"
                    : ""
                }
              >
                {cat.name}
              </span>
            </div>
            <span className="text-gray-400 text-xs font-mono">
              ({cat.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
