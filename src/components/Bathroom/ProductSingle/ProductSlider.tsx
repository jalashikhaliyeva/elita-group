// src/components/Bathroom/ProductSlider.tsx
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImageVariant } from "@/src/types"; // Adjust this import to match your actual type path

interface ProductSliderProps {
  /** 
   * The “main” image object from the API (has fields: color_name, hex, image, thumb_image).
   * e.g. { color_name: "White", hex: "#fcfcfc", image: "https://.../image.webp", thumb_image: "https://.../thumb.webp" }
   */
  mainImage: ImageVariant;

  /**
   * All color variants returned by the API (array of objects with color_name, hex, image, thumb_image).
   */
  images: ImageVariant[];
}

function ProductSlider({ images, mainImage }: ProductSliderProps) {
  // Combine the “main image” first, then the rest of `images`.
  const deduped: ImageVariant[] = [];

  // 1. Always show mainImage first:
  deduped.push(mainImage);

  // 2. Then push any other variants that are not exactly the same URL
  images.forEach((img) => {
    if (img.image !== mainImage.image) {
      deduped.push(img);
    }
  });

  // Transform into array of { id, src, thumbSrc } (optional)
  const productImages = deduped.map((img, idx) => ({
    id: idx,
    src: img.image,
    thumb: img.thumb_image,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Dragging functionality for thumbnails
  const startDrag = (e: React.MouseEvent) => {
    if (!thumbnailsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - thumbnailsRef.current.offsetLeft);
    setScrollLeft(thumbnailsRef.current.scrollLeft);
  };

  const duringDrag = (e: React.MouseEvent) => {
    if (!isDragging || !thumbnailsRef.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    thumbnailsRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  // Auto-center the active thumbnail
  useEffect(() => {
    if (thumbnailsRef.current) {
      const thumbWidth = 100; // Make sure this matches your CSS width for each thumbnail
      thumbnailsRef.current.scrollTo({
        left:
          currentIndex * thumbWidth -
          thumbnailsRef.current.offsetWidth / 2 +
          thumbWidth / 2,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="product-slider">
      {/* Main Image with Navigation Arrows */}
      <div className="relative w-full h-[300px] md:h-[450px] bg-[#E9EDEA] rounded-lg overflow-hidden mb-4">
        <Image
          src={productImages[currentIndex].src}
          alt={`Product ${currentIndex + 1}`}
          fill
          className="object-contain"
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#E9EDEA] hover:bg-white border border-neutral-700 text-gray-800 rounded-lg p-2 shadow-md transition-all"
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E9EDEA] hover:bg-white border border-neutral-700 text-gray-800 rounded-lg p-2 shadow-md transition-all"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        ref={thumbnailsRef}
        className="w-full h-32 flex gap-2 overflow-x-auto scrollbar-hide cursor-grab select-none snap-x snap-mandatory"
        onMouseDown={startDrag}
        onMouseMove={duringDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        {productImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden border-2 transition-all snap-center ${
              currentIndex === index ? "border-neutral-200" : "border-transparent"
            }`}
          >
            <Image
              src={image.thumb || image.src}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
