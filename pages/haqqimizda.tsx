import AboutDetails from "@/src/components/AboutPage/AboutDetails";
import Faq from "@/src/components/AboutPage/Faq";
import Hero from "@/src/components/AboutPage/Hero";
import MissionAndVision from "@/src/components/AboutPage/MissionAndVision";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import React from "react";

function About() {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumb />
      </Container>
      <Hero />
      <Container>
        <AboutDetails />
        <MissionAndVision />
        <Faq />
      </Container>
      <ContactBanner />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default About;
