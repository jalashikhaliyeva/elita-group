// src/components/Bathroom/Products.tsx
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Product } from "@/src/types";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const defaultImage = product.image?.image;
  const [currentImage, setCurrentImage] = useState<string>(defaultImage);

  // Build a deduped list of color‐variants: one entry per unique hex
  const seen = new Set<string>();
  const colorVariants = product.images.reduce<
    { id: number; color: string; image: string }[]
  >((acc, img) => {
    if (!seen.has(img.hex)) {
      seen.add(img.hex);
      acc.push({ id: acc.length, color: img.hex, image: img.image });
    }
    return acc;
  }, []);

  return (
    // Wrap the entire card in a Link to /hamam/{slug}
    <Link href={`/hamam/${product.slug}`} passHref>
      <p className="flex flex-col gap-4 group hover:opacity-90 transition-opacity">
        <div className="relative aspect-square w-full bg-[#E9EDEA] overflow-hidden">
          <Image
            src={currentImage}
            alt={product.title}
            fill
            className="object-contain !h-[200px] mx-auto my-auto"
          />

          <div className="absolute left-3 top-3 flex gap-2 z-10">
            {colorVariants.map((variant) => (
              <button
                key={variant.id}
                className="w-5 h-5 border border-gray-300 hover:scale-110 transition-transform"
                style={{ backgroundColor: variant.color }}
                onMouseEnter={() => setCurrentImage(variant.image)}
                onMouseLeave={() => setCurrentImage(defaultImage)}
                aria-label={`Change color to ${variant.color}`}
              />
            ))}
          </div>
        </div>

        {/* Category and Title */}
        <p className="text-[#5A635C] font-manrope text-base">
          {product.category}
        </p>
        <h2 className="text-[#18181B] font-archivo font-medium text-xl">
          {product.title}
        </h2>
      </p>
    </Link>
  );
}

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </div>
  );
}
