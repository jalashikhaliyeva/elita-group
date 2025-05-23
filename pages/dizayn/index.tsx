import Hero from "@/src/components/DesignPage/Hero";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import AboutSection from "@/src/components/DesignPage/AboutSection";
import ServicesSection from "@/src/components/DesignPage/ServicesSection";
import ServicesSlider from "@/src/components/DesignPage/ServicesSlider";
import Footer from "@/src/components/layout/Footer";

function Design() {
  return (
    <>
      <Container>
        <Header activeItem="dizayn" />
      </Container>
      <Hero />

      <Container>
        <AboutSection />
      </Container>
      <Container>
        <ServicesSection />
        <ServicesSlider />
         <Footer />
      </Container>
     
    </>
  );
}

export default Design;
