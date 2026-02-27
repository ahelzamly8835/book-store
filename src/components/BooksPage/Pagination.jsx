import React from "react";

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleFilter = (categoryId) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const getButtonClass = (isActive) => `
    cursor-pointer border py-3 px-8 rounded-xl transition-all duration-300
    ${
      isActive
        ? "bg-mainColor text-white border-mainColor shadow-lg"
        : "border-gray-400 hover:bg-mainColor/10 hover:border-mainColor"
    }
  `;

  return (
    <div
      className="flex flex-wrap gap-4"
      role="group"
      aria-label="Category Filters"
    >
      <button
        type="button"
        onClick={() => setSelectedCategory(null)}
        className={getButtonClass(selectedCategory === null)}
        aria-pressed={selectedCategory === null}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => handleFilter(cat.id)}
          className={getButtonClass(selectedCategory === cat.id)}
          aria-pressed={selectedCategory === cat.id}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
