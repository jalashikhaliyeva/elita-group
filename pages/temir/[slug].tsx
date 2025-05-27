import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import Hero from "@/src/components/ProjectDetailed/Hero.tsx";
import ProjectDetails from "@/src/components/ProjectDetailed/ProjectDetails";
import ProjectImages from "@/src/components/ProjectDetailed/ProjectImages";
import ProjectVideo from "@/src/components/ProjectDetailed/ProjectVideo";
import React from "react";

function ProjectDetailed() {
  return (
    <>
      <Container>
        <Header activeItem="dizayn" />
      </Container>
      <Container>
        <Breadcrumb />
      </Container>
      <Hero />
      <Container>
        <ProjectDetails />
        <ProjectVideo />
        <ProjectImages />
      </Container>

      <ContactBanner />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default ProjectDetailed;
