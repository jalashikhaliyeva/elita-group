// pages/about.tsx
import React from "react";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import { ContactData } from "@/src/types";
import { getContactInfo } from "./api/services/contactService";
import { GetServerSidePropsContext } from "next";

interface AboutPageProps {
  contactData: ContactData | null;
}

export default function About({ contactData }: AboutPageProps) {
  return (
    <>
      <Container>
        <Header />
      </Container>

      <ContactBanner contactData={contactData} />

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const lang = context.locale || "az";
  try {
    const [contactData] = await Promise.all([getContactInfo(lang)]);
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
