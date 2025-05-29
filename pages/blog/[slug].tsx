// pages/blog/[slug].tsx
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import BlogDetails from "@/src/components/BlogPage/BlogDetailed";
import { GetServerSideProps } from "next";
import { BlogItem } from "@/src/types";
import { getSingleBlogData } from "../api/services/blogsService";

interface BlogDetailedProps {
  blog: BlogItem;
}

function BlogDetailed({ blog }: BlogDetailedProps) {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumb />
        <BlogDetails blog={blog} />
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  
  try {
    const blog = await getSingleBlogData(slug);
    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return {
      notFound: true,
    };
  }
};

export default BlogDetailed;