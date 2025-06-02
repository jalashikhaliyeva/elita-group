// src/components/Bathroom/Filter.tsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import FilterModal from "./FilterModal";
import { Category, Brand, Color } from "@/src/types";

interface FilterProps {
  categories: Category[];
  brands: Brand[];
  colors: Color[];
}

function Filter({ categories, brands, colors }: FilterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-5 gap-4">
        <div className="flex flex-wrap gap-2 items-center font-archivo w-full md:w-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2.5 flex gap-2 items-center text-sm text-neutral-800 border border-neutral-800 whitespace-nowrap transition-colors duration-300 hover:bg-neutral-800 hover:text-white"
          >
            Filter
          </button>

          {categories.map((category) => (
            <div
              key={category.id}
              className="p-2 py-2.5 flex items-center text-sm text-neutral-800 border border-neutral-800 whitespace-nowrap transition-colors duration-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
            >
              {category.name.length > 12 ? (
                <>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">
                    {category.name.split(" ")[0]}
                  </span>
                </>
              ) : (
                category.name
              )}
            </div>
          ))}
        </div>

        <div className="relative font-manrope w-full md:w-auto">
          <input
            type="text"
            className="border-b border-neutral-800 text-neutral-800 outline-none py-1 pr-8 focus:border-b-2 w-full"
            placeholder="Axtar..."
          />
          <FiSearch className="absolute text-xl right-2 top-2 text-neutral-500" />
        </div>
      </div>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
        brands={brands}
        colors={colors}
      />
    </>
  );
}

export default Filter;
