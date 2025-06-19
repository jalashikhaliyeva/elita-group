// Updated Filter.tsx - Change to use category.slug instead of category.name

import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import FilterModal from "./FilterModal";
import { Category, Brand, Color } from "@/src/types";
import { FilterState } from "@/pages/hamam";
import { useTranslation } from "react-i18next";

interface FilterProps {
  categories: Category[];
  brands: Brand[];
  colors: Color[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onSearchChange: (searchTerm: string) => void;
  onClearFilters: () => void;
}

function Filter({
  categories,
  brands,
  colors,
  filters,
  onFilterChange,
  onSearchChange,
  onClearFilters,
}: FilterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(filters.search);
  const { t } = useTranslation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearchChange(localSearch);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [localSearch]);

  // Updated to use category slug instead of name
  const handleCategoryClick = (categorySlug: string) => {
    console.log("🏷️ Category slug clicked:", categorySlug);
    
    const newCategories = filters.categories.includes(categorySlug)
      ? filters.categories.filter((c) => c !== categorySlug)
      : [...filters.categories, categorySlug];

    console.log("📋 Previous category slugs:", filters.categories);
    console.log("📋 New category slugs:", newCategories);

    const updatedFilters = {
      ...filters,
      categories: newCategories,
    };

    console.log("🔄 Updated filters being sent (with slugs):", updatedFilters);
    
    onFilterChange(updatedFilters);
  };

  const activeFiltersCount =
    filters.categories.length +
    filters.brands.length +
    filters.colors.length +
    (filters.search ? 1 : 0);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-5 gap-4">
        <div className="flex flex-wrap gap-2 items-center font-archivo w-full md:w-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2.5 flex gap-2 items-center text-sm text-neutral-800 border border-neutral-800 whitespace-nowrap transition-colors duration-300 hover:bg-neutral-800 hover:text-white relative"
          >
            {t("filter")}
            {activeFiltersCount > 0 && (
              <span className="ml-1 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {categories.map((category) => {
            // Check if category slug is in the active filters (not name)
            const isActive = filters.categories.includes(category.slug || category.name);
            
            return (
              <button
                key={category.id}
                // Send category slug (or fallback to name if slug doesn't exist)
                onClick={() => handleCategoryClick(category.slug || category.name)}
                className={`p-2 py-2.5 flex items-center text-sm border whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? "bg-neutral-800 text-white border-neutral-800"
                    : "text-neutral-800 border-neutral-800 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {/* Still display the category name to user */}
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
              </button>
            );
          })}

          {activeFiltersCount > 0 && (
            <button
              onClick={onClearFilters}
              className="p-2.5 text-sm text-amber-900 whitespace-nowrap transition-colors duration-300 hover:text-amber-700"
            >
              {t("clear")}
            </button>
          )}
        </div>

        <div className="relative font-manrope w-full md:w-auto">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="border-b border-neutral-800 text-neutral-800 outline-none py-1 pr-8 focus:border-b-2 w-full"
            placeholder={t("search_placeholder")}
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
        filters={filters}
        onApplyFilters={onFilterChange}
      />
    </>
  );
}

export default Filter;