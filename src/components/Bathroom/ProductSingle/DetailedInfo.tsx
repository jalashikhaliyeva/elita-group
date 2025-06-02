// src/components/Bathroom/DetailedInfo.tsx
import React from "react";
import { Product, ImageVariant, Attribute } from "@/src/types";

interface DetailedInfoProps {
  product: Product;
}

function DetailedInfo({ product }: DetailedInfoProps) {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h1 className="text-textBase text-3xl font-semibold font-archivo pb-5 md:pb-10">
          {product.title}
        </h1>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-xl text-textBase font-medium font-archivo leading-5">
            Ümumi məlumat
          </p>
          <p className="text-base text-elementSecondary font-manrope">
            {product.description}
          </p>
        </div>

        {/* Detailed attributes */}
        <div className="flex flex-col gap-4">
          <p className="text-textBase font-archivo text-xl leading-5 font-medium">
            Detallı
          </p>

          <div className="flex flex-col gap-3">
            {/* Category */}
            <div className="flex justify-between items-center">
              <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                Kateqoriya:
              </p>
              <p className="text-textBase font-manrope font-semibold leading-6 text-base">
                {product.category}
              </p>
            </div>

            {/* Brand */}
            <div className="flex justify-between items-center">
              <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                Brend:
              </p>
              <p className="text-textBase font-manrope font-semibold leading-6 text-base">
                {product.brand}
              </p>
            </div>

            {/* Attributes (array of key/value) */}
            {product.attribute.length > 0 && (
              <div className="flex flex-col gap-1">
                {product.attribute.map((attr: Attribute, idx: number) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center"
                  >
                    <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                      {attr.key}:
                    </p>
                    <p className="text-textBase font-manrope font-semibold leading-6 text-base">
                      {attr.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Color Availability */}
            <div className="flex justify-between items-center">
              <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                Rəng mövcudluğu:
              </p>

              {/* If there are any variants with unique hex codes, list them here */}
              <div className="flex gap-2">
                {[
                  // Dedupe by `hex` so we only show one swatch per color
                  ...new Map(
                    product.images.map((img: ImageVariant) => [
                      img.hex,
                      img.hex,
                    ])
                  ).values(),
                ].map((hexValue) => (
                  <span
                    key={hexValue}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: hexValue }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* “Contact Us” button at the bottom */}
      <div className="mt-20">
        <button className="text-textBase border border-textBase py-2 font-archivo font-base w-full flex items-center justify-center leading-5">
          Bizimlə əlaqə
        </button>
      </div>
    </div>
  );
}

export default DetailedInfo;
