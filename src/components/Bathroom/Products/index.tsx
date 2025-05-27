import Image from "next/image";
import React, { useState } from "react";

function Products() {
  const colorVariants = [
    { id: 1, color: "#92400E", image: "/images/bath/item3.png" },
    { id: 2, color: "#000", image: "/images/bath/item2.png" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
      {[...Array(5)].map((_, index) => {
        const [currentImage, setCurrentImage] = useState(
          "/images/bath/item2.png"
        );

        return (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative aspect-square w-full bg-[#E9EDEA] overflow-hidden">
              {/* Main product image */}
              <Image
                src={currentImage}
                alt={`Bathroom Item ${index + 1}`}
                fill
                className="object-contain !h-[200px] mx-auto my-auto"
              />

              {/* Color swatches container - positioned absolutely */}
              <div className="absolute left-3 top-3 flex gap-2 z-10 ">
                {colorVariants.map((variant) => (
                  <button
                    key={variant.id}
                    className="w-5 h-5 border border-gray-300  hover:scale-110 transition-transform"
                    style={{ backgroundColor: variant.color }}
                    onMouseEnter={() => setCurrentImage(variant.image)}
                    onMouseLeave={() =>
                      setCurrentImage("/images/bath/item2.png")
                    }
                    aria-label={`Change color to ${variant.color}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[#5A635C] font-manrope text-base">Kateqoriya</p>
            <h2 className="text-[#18181B] font-archivo font-medium text-xl">
              Məhsul adı {index + 1}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
