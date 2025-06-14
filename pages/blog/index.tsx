// pages/blog/index.tsx
import React from "react";
import Hero from "@/src/components/BlogPage/Hero";
import BlogGrid from "@/src/components/BlogPage/BlogGrid";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import { BlogApiResponse, MetaTag } from "@/src/types";
import { getBlogsData } from "../api/services/blogsService";
import { getMetaByTitle } from "../api/services/fetchMeta";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface BlogPageProps {
  blogsData: BlogApiResponse;
  metaData: MetaTag | null;
}

export default function Blog({ blogsData, metaData }: BlogPageProps) {
  return (
    <>
      <Head>
        <title>{metaData?.meta_title || "Blog"}</title>
        <meta
          name="description"
          content={metaData?.meta_description || "Our latest articles"}
        />
        <meta name="keywords" content={metaData?.meta_keyword || "blog"} />
        <meta name="author" content="https://markup.az/" />
      </Head>

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

  try {
    const [blogsData, metaData] = await Promise.all([
      getBlogsData(lang),
      getMetaByTitle("Blog", lang),
    ]);

    return {
      props: {
        blogsData,
        metaData,
      },
    };
  } catch (error) {
    console.error("Error fetching Blog page data:", error);

    return {
      props: {
        blogsData: null,
        metaData: null,
      },
    };
  }
}
