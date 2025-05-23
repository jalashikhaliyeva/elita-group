import Image from "next/image";
import { useRouter } from "next/router";  // ①
import React from "react";

type Service = {
  name: string;
  slug: string;    // slug for the URL
  img: string;
};

const services: Service[] = [
  {
    name: "dizaynı",
    slug: "dizayn",         
    img: "/images/intro/img2.png",
  },
  {
    name: "3D render",
    slug: "3d-render",    
    img: "/images/intro/img1.png",
  },
  {
    name: "landşaft",
    slug: "landschaft",    
    img: "/images/intro/img4.png",
  },
];

function ServicesSlider() {
  const router = useRouter();            // ②

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-11 pb-7 md:pb-14">
      {services.map(({ name, slug, img }) => (
        <div
          key={slug}
          onClick={() => router.push(`/dizayn/${slug}`)}   // ③
          className="group relative flex cursor-pointer flex-col gap-6 p-5 transition-all duration-700 hover:bg-elementSecondaryBg overflow-hidden"
        >
          <div className="relative overflow-hidden h-[200px] md:h-[500px]">
            <Image
              src={img}
              alt={name}
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <p className="text-textBase text-xl md:text-2xl font-normal font-archivo leading-6">
            Yasayış və qeyri-yaşayış sahələrinin{" "}
            <span className="font-Moneta text-elementSecondary">{name}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ServicesSlider;
