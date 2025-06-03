// pages/blog/index.tsx
import Hero from "@/src/components/BlogPage/Hero";
import BlogGrid from "@/src/components/BlogPage/BlogGrid";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import { BlogApiResponse } from "@/src/types";
import { getBlogsData } from "../api/services/blogsService";
import { GetServerSidePropsContext } from "next";

interface BlogPageProps {
  blogsData: BlogApiResponse;
}

function Blog({ blogsData }: BlogPageProps) {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumb />
      </Container>
      <Hero />
      <Container>
        <BlogGrid blogsData={blogsData} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
   const lang = context.locale || "az";
  const blogsData = await getBlogsData(lang);
  return {
    props: {
      blogsData,
    },
  };
}

export default Blog;
