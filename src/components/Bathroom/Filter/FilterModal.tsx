import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SelectedFilters {
  type: string[];
  price: string[];
  brand: string[];
  color: string[];
}

interface ColorOption {
  name: string;
  hex: string;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    type: [],
    price: [],
    brand: [],
    color: [],
  });

  const colorOptions: ColorOption[] = [
    { name: "Qırmızı", hex: "#FF0000" },
    { name: "Sarı", hex: "#FFFF00" },
    { name: "Göy", hex: "#0000FF" },
    { name: "Yaşıl", hex: "#00FF00" },
    { name: "Qara", hex: "#000000" },
    { name: "Ağ", hex: "#FFFFFF" },
  ];

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

  const filterOptions = {
    type: [
      "Hamam mebeli",
      "Vanna və duş kabinlər",
      "Santexnika",
      "Su quraşdırıcıları",
      "Aksessuarlar",
    ],
    brand: ["Roca", "Vitra", "Kolo", "Geberit", "Hansgrohe"],
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
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10 font-archivo">
        <div
          className={`relative w-screen max-w-md transform transition-all duration-300 ease-in-out ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ willChange: "transform" }}
        >
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-5 border-b border-neutral-200">
              <h2 className="text-lg text-neutral-800">Filterlər</h2>
              <button
                onClick={handleClose}
                className="text-neutral-400 hover:text-neutral-500 transition-colors duration-200"
              >
                <span className="sr-only">Close</span>
                <IoClose className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4">
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
                  <div className="transition-transform duration-200 ease-in-out">
                    {openSection === "type" ? (
                      <IoIosArrowUp className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <IoIosArrowDown className="h-5 w-5 text-neutral-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`
                    mt-4 pl-2 space-y-3 overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${
                      openSection === "type"
                        ? "max-h-60 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }
                  `}
                  style={{ willChange: "transform, opacity, max-height" }}
                >
                  {filterOptions.type.map((option) => (
                    <label
                      key={option}
                      className="flex items-center text-neutral-600"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-300 text-neutral-800 focus:ring-neutral-800"
                        checked={selectedFilters.type.includes(option)}
                        onChange={() => handleFilterChange("type", option)}
                      />
                      <span className="ml-3 text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Section */}
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
                  <div className="transition-transform duration-200 ease-in-out">
                    {openSection === "brand" ? (
                      <IoIosArrowUp className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <IoIosArrowDown className="h-5 w-5 text-neutral-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`
                    mt-4 pl-2 space-y-3 overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${
                      openSection === "brand"
                        ? "max-h-60 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }
                  `}
                  style={{ willChange: "transform, opacity, max-height" }}
                >
                  {filterOptions.brand.map((option) => (
                    <label
                      key={option}
                      className="flex items-center text-neutral-600"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-300 text-neutral-800 focus:ring-neutral-800"
                        checked={selectedFilters.brand.includes(option)}
                        onChange={() => handleFilterChange("brand", option)}
                      />
                      <span className="ml-3 text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Section */}
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
                  <div className="transition-transform duration-200 ease-in-out">
                    {openSection === "color" ? (
                      <IoIosArrowUp className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <IoIosArrowDown className="h-5 w-5 text-neutral-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`
                    mt-4 pl-2 space-y-3 overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${
                      openSection === "color"
                        ? "max-h-60 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }
                  `}
                  style={{ willChange: "transform, opacity, max-height" }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {colorOptions.map((color) => (
                      <label
                        key={color.name}
                        className="flex items-center text-neutral-600"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-neutral-300 text-neutral-800 focus:ring-neutral-800"
                          checked={selectedFilters.color.includes(color.name)}
                          onChange={() =>
                            handleFilterChange("color", color.name)
                          }
                        />
                        <div className="ml-3 flex items-center">
                          <div
                            className="w-4 h-4 rounded-sm mr-2 border border-neutral-300"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-sm">{color.name}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-2 border-t border-neutral-200 px-4 py-4">
              <button
                onClick={handleClose}
                className="bg-neutral-800 px-4 py-2 text-sm text-white hover:bg-neutral-700 transition-colors duration-200"
              >
                Tətbiq et
              </button>
              <button
                onClick={clearAllFilters}
                className="border border-neutral-800 px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50 transition-colors duration-200"
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
