
import React from "react";

const FilterPanel = ({ categories, selected, setSelected }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center mb-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            selected === category
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
          }`}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterPanel;
