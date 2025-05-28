import React from "react";
import ProductSlider from "./ProductSlider";
import DetailedInfo from "./DetailedInfo";

function ProductSingle() {
  return (
    <div className="flex flex-col  md:flex-row gap-5 justify-between">
      <div className="w-full md:w-1/2">
        <ProductSlider />
      </div>
      <div className="w-full md:w-1/2">
        <DetailedInfo />
      </div>
    </div>
  );
}

export default ProductSingle;
