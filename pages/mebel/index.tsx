import Hero from "@/src/components/DesignPage/Hero";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import AboutSection from "@/src/components/DesignPage/AboutSection";
import Footer from "@/src/components/layout/Footer";

function Construction() {
  return (
    <>
      <Container>
        <Header activeItem="mebel" />
      </Container>
      <Hero />

      <Container>
        <AboutSection />
      <Footer />

      </Container>

    </>
  );
}

export default Construction;
