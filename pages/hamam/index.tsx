import Hero from "@/src/components/ProjectDetailed/Hero.tsx";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Filter from "@/src/components/Bathroom/Filter";
import Products from "@/src/components/Bathroom/Products";

function Bathroom() {
  return (
    <>
      <Container>
        <Header activeItem="hamam" />
      </Container>
      <Container>
        <Breadcrumb />
      </Container>
      <Hero />
      <Container>
        <Filter />
        <Products />
      </Container>

      <Footer />
    </>
  );
}

export default Bathroom;
