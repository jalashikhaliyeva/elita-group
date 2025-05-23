// src/components/BlogPage/BlogGrid/index.jsx
import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard";

// Sample posts array (remove or replace with real data source as needed)
const mockPosts = [
  {
    id: 1,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img1.png",
    date: "May 20, 2025",
  },
  {
    id: 2,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img2.png",
    date: "May 20, 2025",
  },
  {
    id: 3,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img3.png",
    date: "May 20, 2025",
  },
  {
    id: 4,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img4.png",
    date: "May 20, 2025",
  },
  {
    id: 5,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img1.png",
    date: "May 20, 2025",
  },
  {
    id: 6,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img4.png",
    date: "May 20, 2025",
  },
  {
    id: 7,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img3.png",
    date: "May 20, 2025",
  },
  {
    id: 8,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img1.png",
    date: "May 20, 2025",
  },
  {
    id: 9,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img2.png",
    date: "May 20, 2025",
  },
  {
    id: 10,
    title: "Exploring the Mountains",
    excerpt: "A journey through the alpine trails and hidden valleys.",
    imageUrl: "/images/intro/img1.png",
    date: "May 20, 2025",
  },
];

const ITEMS_PER_PAGE = 6;

const BlogGrid = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - threshold;

      if (atBottom && !loading && visibleCount < mockPosts.length) {
        setLoading(true);
        // simulate load delay
        setTimeout(() => {
          setVisibleCount((prev) =>
            Math.min(prev + ITEMS_PER_PAGE, mockPosts.length)
          );
          setLoading(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, visibleCount]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-14">
      {mockPosts.slice(0, visibleCount).map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}

      {loading && (
        <div className="col-span-full flex justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-gray-600"></div>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
