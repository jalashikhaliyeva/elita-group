import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import FilterModal from "./FilterModal";

function Filter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-5 gap-4">
        <div className="flex flex-wrap gap-2 items-center font-archivo w-full md:w-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2.5 flex gap-2 items-center text-sm text-neutral-800 border border-neutral-800 whitespace-nowrap transition-colors duration-300 hover:bg-neutral-800 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                d="M3 6H21M7 12H17M10 18H14"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter
          </button>

          {[
            "Hamam mebeli",
            "Vanna və duş kabinlər",
            "Santexnika",
            "Su quraşdırıcıları",
            "Aksessuarlar",
          ].map((item) => (
            <div
              key={item}
              className="p-2 py-2.5 flex items-center text-sm text-neutral-800 border border-neutral-800 whitespace-nowrap transition-colors duration-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
            >
              {item.length > 12 ? (
                <>
                  <span className="hidden sm:inline">{item}</span>
                  <span className="sm:hidden">{item.split(" ")[0]}</span>
                </>
              ) : (
                item
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

      <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Filter;
