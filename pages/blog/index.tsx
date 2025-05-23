import AboutDetails from "@/src/components/AboutPage/AboutDetails";
import Faq from "@/src/components/AboutPage/Faq";
import Hero from "@/src/components/BlogPage/Hero";
import BlogGrid from "@/src/components/BlogPage/BlogGrid";
import MissionAndVision from "@/src/components/AboutPage/MissionAndVision";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import React from "react";

function Blog() {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumb />
      </Container>
      <Hero />
         <Container>
      <BlogGrid />

         </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default Blog;
