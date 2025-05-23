// src/components/BlogCard.tsx
import React from "react";
import Image from "next/image";

export interface BlogCardProps {
  id?: number; // optional if not used in BlogCard directly
  imageUrl: string;
  date: string;
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  date,
  title,
  excerpt,
}) => {
  return (
    <div className="overflow-hidden  font-manrope">
      <div className="relative w-full h-[360px]">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black/20 " />
      </div>

      <div className="flex flex-col gap-1 pt-4">
        <p className="text-gray-500 text-base md:text-lg mb-1">{date}</p>
        <h3 className="text-gray-800 font-semibold text-lg md:text-2xl mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-base md:text-lg line-clamp-3">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
