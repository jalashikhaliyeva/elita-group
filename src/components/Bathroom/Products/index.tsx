import Image from "next/image";
import React, { useState } from "react";

function ProductItem({ id }: { id: number }) {
  const [currentImage, setCurrentImage] = useState("/images/bath/item2.png");
  
  const colorVariants = [
    { id: 1, color: "#92400E", image: "/images/bath/item3.png" },
    { id: 2, color: "#000", image: "/images/bath/item2.png" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full bg-[#E9EDEA] overflow-hidden">
        <Image
          src={currentImage}
          alt={`Bathroom Item ${id + 1}`}
          fill
          className="object-contain !h-[200px] mx-auto my-auto"
        />
        <div className="absolute left-3 top-3 flex gap-2 z-10 ">
          {colorVariants.map((variant) => (
            <button
              key={variant.id}
              className="w-5 h-5 border border-gray-300 hover:scale-110 transition-transform"
              style={{ backgroundColor: variant.color }}
              onMouseEnter={() => setCurrentImage(variant.image)}
              onMouseLeave={() => setCurrentImage("/images/bath/item2.png")}
              aria-label={`Change color to ${variant.color}`}
            />
          ))}
        </div>
      </div>
      <p className="text-[#5A635C] font-manrope text-base">Kateqoriya</p>
      <h2 className="text-[#18181B] font-archivo font-medium text-xl">
        Məhsul adı {id + 1}
      </h2>
    </div>
  );
}

function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
      {[...Array(5)].map((_, index) => (
        <ProductItem key={index} id={index} />
      ))}
    </div>
  );
}

export default Products;