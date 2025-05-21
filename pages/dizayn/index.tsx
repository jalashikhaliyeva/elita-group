import Hero from "@/src/components/DesignPage/Hero";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";

function Design() {
  return (
    <div>
      <Container>
        <Header activeItem="dizayn" />
      </Container>
      <Hero />
    </div>
  );
}

export default Design;
