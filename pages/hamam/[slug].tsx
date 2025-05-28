import ProductSingle from "@/src/components/Bathroom/ProductSingle";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import React from "react";

function BathroomDetailed() {
  return (
    <>
      <Container>
        <Header activeItem="dizayn" />
      </Container>
      <Container>
        <Breadcrumb />
      </Container>
      <Container>
       <ProductSingle />
      </Container>

     
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default BathroomDetailed;
