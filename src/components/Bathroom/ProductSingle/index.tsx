// src/components/Bathroom/ProductSingle.tsx
import React from "react";
import ProductSlider from "./ProductSlider";
import DetailedInfo from "./DetailedInfo";
import { ImageVariant, Product } from "@/src/types";

interface ProductSingleProps {
  product: Product;
}

function ProductSingle({ product }: ProductSingleProps) {
  const mainVariant: ImageVariant = product.images[0]; 
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between">
      {/* Slider column */}
      <div className="w-full md:w-1/2">
        {/* Pass down the entire images array. */}
        <ProductSlider images={product.images}  mainImage={mainVariant}/>
      </div>

      {/* Info column */}
      <div className="w-full md:w-1/2">
        <DetailedInfo product={product} />
      </div>
    </div>
  );
}

export default ProductSingle;
