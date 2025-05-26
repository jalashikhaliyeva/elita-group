import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import React from "react";
import BlogDetails from "@/src/components/BlogPage/BlogDetailed";

function BlogDetailed() {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumb />
        <BlogDetails />
        <Footer />
      </Container>
    </>
  );
}

export default BlogDetailed;
