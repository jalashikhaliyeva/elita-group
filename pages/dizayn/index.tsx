// pages/design.tsx
import Hero from "@/src/components/DesignPage/Hero";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import AboutSection from "@/src/components/DesignPage/AboutSection";
import ServicesSection from "@/src/components/DesignPage/ServicesSection";
import ServicesSlider from "@/src/components/DesignPage/ServicesSlider";
import Footer from "@/src/components/layout/Footer";
import { ServiceData } from "@/src/types";
import { fetchServices } from "../api/services/fetchServices";
interface DesignPageProps {
  services: ServiceData[];
}

function Design({ services }: DesignPageProps) {
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
        <ServicesSlider services={services} />
        <Footer />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const services = await fetchServices();
    return {
      props: {
        services,
      },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: {
        services: [],
      },
    };
  }
}

export default Design;
