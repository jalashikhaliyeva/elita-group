import React from "react";

function Breadcrumb() {
  return (
    <div className="flex gap-2 py-4">
      <p className="font-manrope text-base font-normal leading-6 text-textBase">
        Dizayn
      </p>

      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#18181B"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <p className="font-manrope text-base font-normal leading-6 text-amber-700">
        Layihə
      </p>
    </div>
  );
}

export default Breadcrumb;
