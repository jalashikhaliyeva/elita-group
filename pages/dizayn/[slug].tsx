import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import ProjectDetails from "@/src/components/ProjectDetailed/ProjectDetails";
import ProjectImages from "@/src/components/ProjectDetailed/ProjectImages";
import ProjectVideo from "@/src/components/ProjectDetailed/ProjectVideo";
import React from "react";
import { getContactInfo } from "../api/services/contactService";
import { ContactData, ServiceItem } from "@/src/types";
import Hero from "@/src/components/ProjectDetailed/Hero.tsx";
import { getSingleService } from "../api/services/fetchServices";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface ProjectDetailedProps {
  contactData: ContactData | null;
  serviceData: ServiceItem | null;
}

export default function ProjectDetailed({
  contactData,
  serviceData,
}: ProjectDetailedProps) {
  if (!serviceData) {
    return <div>Loading...</div>; // Or handle the error state appropriately
  }

  return (
    <>
      <Container>
        <Header activeItem="dizayn" />
      </Container>
      <Container>
        <Breadcrumb />
      </Container>
      <Hero
        title={serviceData.title}
        image={serviceData.image}
        short_description={serviceData.short_description}
      />
      <Container>
        <ProjectDetails
          // title={serviceData.title}
          description={serviceData.description}
          // shortDescription={serviceData.short_description}
        />
        <ProjectVideo videoUrl={serviceData.video} />
        <ProjectImages images={serviceData.images} />
      </Container>

      <ContactBanner contactData={contactData} />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const { slug } = context.params as { slug: string };
    const [contactData, serviceData] = await Promise.all([
      getContactInfo(),
      getSingleService(slug),
    ]);

    if (!contactData || !serviceData) {
      return { notFound: true };
    }

    return {
      props: {
        contactData: contactData || null,
        serviceData: serviceData || null,
      },
    };
  } catch (error) {
    console.error("Error fetching ProjectDetailed page data:", error);
    return {
      notFound: true,
    };
  }
};