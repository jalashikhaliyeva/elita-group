// src/components/BlogPage/BlogDetailed.tsx
import Image from "next/image";
import React from "react";
import { BlogItem } from "@/src/types";

interface BlogDetailsProps {
  blog: BlogItem;
}

function BlogDetails({ blog }: BlogDetailsProps) {
  const dateString = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-6 font-manrope pb-10">
      <h1 className="text-textBase text-xl md:text-2xl font-medium text-center">
        {blog.title}
      </h1>

      <Image
        src={blog.image}
        alt={blog.title}
        width={1000}
        height={500}
        className="w-full h-[240px] md:h-[440px] object-cover rounded-lg"
        priority
      />

      <p className="text-elementSecondaryDate text-base font-normal leading-6 text-right">
        {dateString}
      </p>

      <div
        className="text-elementSecondaryDate text-base font-normal leading-6"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
}

export default BlogDetails;
