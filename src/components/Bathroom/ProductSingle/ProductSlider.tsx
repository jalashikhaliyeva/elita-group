import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Sample product images - replace with your actual images
  const productImages = [
    { id: 1, src: "/images/bath/item1.png" },
    { id: 2, src: "/images/bath/item2.png" },
    { id: 3, src: "/images/bath/item3.png" },
  ];

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
      const thumbWidth = 100; // Adjust based on your thumbnail width
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
          width={400}
          height={400}
          src={productImages[currentIndex].src}
          alt={`Product ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-[#E9EDEA] hover:bg-white border border-neutral-700 text-gray-800 rounded-lg p-2 shadow-md transition-all"
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-[#E9EDEA] border border-neutral-700 hover:bg-white text-gray-800 rounded-lg p-2 shadow-md transition-all"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

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
            className={`flex-shrink-0 w-32 h-32 overflow-hidden border-2 transition-all snap-center ${
              currentIndex === index
                ? "border-neutral-200"
                : "border-transparent"
            }`}
          >
            <Image
              width={500}
              height={500}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
