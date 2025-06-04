// src/components/Bathroom/ProductSingle.tsx
import React from "react";
import ProductSlider from "./ProductSlider";
import DetailedInfo from "./DetailedInfo";
import { ImageVariant, Product } from "@/src/types";

interface ProductSingleProps {
  product: Product;
  phone: string;
}

function ProductSingle({ product, phone }: ProductSingleProps) {
  const mainVariant: ImageVariant = product.images[0];
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between">
      <div className="w-full md:w-1/2">
        <ProductSlider images={product.images} mainImage={mainVariant} />
      </div>

      <div className="w-full md:w-1/2">
        <DetailedInfo product={product} phone={phone} />
      </div>
    </div>
  );
}

export default ProductSingle;
