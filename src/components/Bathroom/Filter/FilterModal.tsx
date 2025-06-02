// src/components/Bathroom/FilterModal.tsx
import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Category, Brand, Color } from "@/src/types";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  brands: Brand[];
  colors: Color[];
}

interface SelectedFilters {
  type: string[];
  price: string[];
  brand: string[];
  color: string[];
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  categories,
  brands,
  colors,
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    type: [],
    price: [],
    brand: [],
    color: [],
  });

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleFilterChange = (
    section: keyof SelectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const list = prev[section].includes(value)
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value];
      return { ...prev, [section]: list };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      type: [],
      price: [],
      brand: [],
      color: [],
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal content */}
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10 font-archivo">
        <div
          className={`relative w-screen max-w-md transform transition-all duration-300 ease-in-out ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-neutral-200">
              <h2 className="text-lg text-neutral-800">Filterlər</h2>
              <button onClick={handleClose}>
                <IoClose className="h-6 w-6" />
              </button>
            </div>

            {/* Filter sections */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              {/* Product Type Section */}
              <div className="border-b border-neutral-200 py-4">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => toggleSection("type")}
                >
                  <div>
                    <h3 className="text-md text-neutral-800">Məhsul növü</h3>
                    {selectedFilters.type.length > 0 && (
                      <p className="mt-1 text-xs text-neutral-500">
                        Seçildi: {selectedFilters.type.join(", ")}
                      </p>
                    )}
                  </div>
                  {openSection === "type" ? (
                    <IoIosArrowUp className="h-5 w-5 text-neutral-400" />
                  ) : (
                    <IoIosArrowDown className="h-5 w-5 text-neutral-400" />
                  )}
                </button>

                <div
                  className={`mt-4 pl-2 space-y-3 transition-all duration-300 ${
                    openSection === "type" ? "block" : "hidden"
                  }`}
                >
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.type.includes(category.name)}
                        onChange={() =>
                          handleFilterChange("type", category.name)
                        }
                        className="h-4 w-4 rounded border-neutral-300"
                      />
                      <span className="ml-3 text-sm text-neutral-800">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-neutral-200 py-4">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => toggleSection("brand")}
                >
                  <div>
                    <h3 className="text-md text-neutral-800">Brend</h3>
                    {selectedFilters.brand.length > 0 && (
                      <p className="mt-1 text-xs text-neutral-500">
                        Seçildi: {selectedFilters.brand.join(", ")}
                      </p>
                    )}
                  </div>
                  {openSection === "brand" ? (
                    <IoIosArrowUp className="h-5 w-5 text-neutral-400" />
                  ) : (
                    <IoIosArrowDown className="h-5 w-5 text-neutral-400" />
                  )}
                </button>

                <div
                  className={`mt-4 pl-2 space-y-3 transition-all duration-300 ${
                    openSection === "brand" ? "block" : "hidden"
                  }`}
                >
                  {brands.map((brand) => (
                    <label key={brand.slug} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.brand.includes(brand.name)}
                        onChange={() => handleFilterChange("brand", brand.name)}
                        className="h-4 w-4 rounded border-neutral-300"
                      />
                      <span className="ml-3 text-sm text-neutral-800">{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-neutral-200 py-4">
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() => toggleSection("color")}
                >
                  <div>
                    <h3 className="text-md text-neutral-800">Rəng</h3>
                    {selectedFilters.color.length > 0 && (
                      <p className="mt-1 text-xs text-neutral-500">
                        Seçildi: {selectedFilters.color.join(", ")}
                      </p>
                    )}
                  </div>
                  {openSection === "color" ? (
                    <IoIosArrowUp className="h-5 w-5 text-neutral-400" />
                  ) : (
                    <IoIosArrowDown className="h-5 w-5 text-neutral-400" />
                  )}
                </button>

                <div
                  className={`mt-4 pl-2 grid grid-cols-2 gap-3 transition-all duration-300 ${
                    openSection === "color" ? "block" : "hidden"
                  }`}
                >
                  {(colors || []).map((color) => (
                    <label key={color.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.color.includes(color.name)}
                        onChange={() => handleFilterChange("color", color.name)}
                        className="h-4 w-4 rounded border-neutral-300"
                      />
                      <div className="ml-3 flex items-center">
                        <div
                          className="w-4 h-4 rounded-sm mr-2 border border-neutral-300"
                          style={{ backgroundColor: color.color }}
                        />
                        <span className="text-sm text-neutral-800">{color.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="flex flex-col gap-2 border-t border-neutral-200 px-4 py-4">
              <button
                onClick={handleClose}
                className="bg-neutral-800 px-4 py-2 text-sm text-white"
              >
                Tətbiq et
              </button>
              <button
                onClick={clearAllFilters}
                className="border border-neutral-800 px-4 py-2 text-sm text-neutral-800"
              >
                Hamısını təmizlə
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
