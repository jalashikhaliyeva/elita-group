// pages/design.tsx
import Hero from "@/src/components/DesignPage/Hero";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import AboutSection from "@/src/components/DesignPage/AboutSection";
import ServicesSection from "@/src/components/DesignPage/ServicesSection";
import ServicesSlider from "@/src/components/DesignPage/ServicesSlider";
import Footer from "@/src/components/layout/Footer";
import { BannerItem, ServiceData } from "@/src/types";
import { fetchServices } from "../api/services/fetchServices";
import { getBanner } from "../api/services/fetchBanner";

interface InformationItem {
  title: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  thumb_image_1: string;
  thumb_image_2: string;
  thumb_image_3: string;
}

interface DesignPageProps {
  services: ServiceData[];
  bannerData: BannerItem & {
    information: InformationItem[];
  };
}

function Design({ services, bannerData }: DesignPageProps) {
  return (
    <>
      <Container>
        <Header activeItem="dizayn" />
      </Container>
      <Hero
        title={bannerData.title}
        image={bannerData.image}
        video={bannerData.video}
        // description={bannerData.description}
      />

      <Container>
        <AboutSection information={bannerData.information} />
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
    const slug = "dizayn";
    const services = await fetchServices();
    const bannerData = await getBanner(slug);
    return {
      props: {
        services,
        bannerData,
      },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: {
        services: [],
        bannerData: {
          title: "",
          image: "",
          video: "",
          description: "",
          information: [],
        }, // Default empty state
      },
    };
  }
}

export default Design;
