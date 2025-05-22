import Image from "next/image";
import React from "react";

function ServicesSlider() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-11 pb-7 md:pb-14">
      {/* Card 1 */}
      <div className="group relative flex cursor-pointer flex-col gap-6 p-5 transition-all duration-700 hover:bg-elementSecondaryBg overflow-hidden">
        <div className="relative overflow-hidden h-[200px] md:h-[500px] ">
          <Image
            src="/images/intro/img2.png"
            alt="Modern kitchen and dining area with minimalist design"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <p className="text-textBase text-xl md:text-2xl font-normal font-archivo leading-6">
          Yasayış və qeyri yaşayış sahələrinin{" "}
          <span className="font-Moneta text-elementSecondary">dizaynı</span>
        </p>
      </div>

      {/* Card 2 */}
      <div className="group relative flex cursor-pointer flex-col gap-6 p-5 transition-all duration-700 hover:bg-elementSecondaryBg overflow-hidden">
        <div className="relative overflow-hidden h-[200px] md:h-[500px] ">
          <Image
            src="/images/intro/img1.png"
            alt="Modern kitchen and dining area with minimalist design"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <p className="text-textBase text-xl md:text-2xl font-normal font-archivo leading-6">
          Yasayış və qeyri yaşayış sahələrinin{" "}
          <span className="font-Moneta text-elementSecondary">dizaynı</span>
        </p>
      </div>

      {/* Card 3 */}
      <div className="group relative flex cursor-pointer flex-col gap-6 p-5 transition-all duration-700 hover:bg-elementSecondaryBg overflow-hidden">
        <div className="relative overflow-hidden h-[200px] md:h-[500px] ">
          <Image
            src="/images/intro/img4.png"
            alt="Modern kitchen and dining area with minimalist design"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <p className="text-textBase text-xl md:text-2xl font-normal font-archivo leading-6">
          Yasayış və qeyri yaşayış sahələrinin{" "}
          <span className="font-Moneta text-elementSecondary">dizaynı</span>
        </p>
      </div>
    </div>
  );
}

export default ServicesSlider;
