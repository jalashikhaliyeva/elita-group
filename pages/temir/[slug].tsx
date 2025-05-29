import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import Hero from "@/src/components/ProjectDetailed/Hero.tsx";
import ProjectDetails from "@/src/components/ProjectDetailed/ProjectDetails";
import ProjectImages from "@/src/components/ProjectDetailed/ProjectImages";
import ProjectVideo from "@/src/components/ProjectDetailed/ProjectVideo";
import { ContactData } from "@/src/types";
import React from "react";
import { getContactInfo } from "../api/services/contactService";
interface AboutPageProps {
  contactData: ContactData | null;
}
export default function ProjectDetailed({ contactData }: AboutPageProps) {
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



export async function getServerSideProps() {
  try {
    const [contactData] = await Promise.all([getContactInfo()]);
    if (!contactData) {
      return { notFound: true };
    }

    return {
      props: {
        contactData: contactData || null,
      },
    };
  } catch (error) {
    console.error("Error fetching About page data:", error);
    return {
      props: {
        contactData: null,
      },
    };
  }
}