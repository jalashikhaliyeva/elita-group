// pages/about.tsx

import React from "react";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import { getContactInfo } from "./api/services/contactService";
import { getMetaByTitle } from "./api/services/fetchMeta";
import { ContactData, MetaTag } from "@/src/types";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
interface AboutPageProps {
  contactData: ContactData | null;
  metaData: MetaTag | null;
}

export default function About({ contactData, metaData }: AboutPageProps) {
  return (
    <>
      <Head>
        <title>{metaData?.meta_title || "Contact"}</title>
        <meta
          name="description"
          content={metaData?.meta_description || "Contact page"}
        />
        <meta name="keywords" content={metaData?.meta_keyword || "about"} />
        <meta name="author" content="https://markup.az/" />
      </Head>
      <Container>
        <Header />
        <Breadcrumb />
      </Container>
      <ContactBanner contactData={contactData} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8431324185617!2d49.858116411590224!3d40.41232577132124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d19b69f1c19%3A0x463ae90eb750b8ac!2smarkup%20agency!5e0!3m2!1str!2saz!4v1718193436272!5m2!1str!2saz"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[250px] md:h-[400px] mt-4"
      >
      </iframe>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const lang = context.locale || "az";
  try {
    const [contactData, metaData] = await Promise.all([
      getContactInfo(lang),
      getMetaByTitle("Contact", lang),
    ]);
    if (!contactData) {
      return { notFound: true };
    }
    return {
      props: {
        contactData,
        metaData,
      },
    };
  } catch (error) {
    console.error("Error fetching About page data:", error);
    return {
      props: {
        contactData: null,
        metaData: null,
      },
    };
  }
}
