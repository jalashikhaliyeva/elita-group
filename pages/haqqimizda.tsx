// pages/about.tsx
import React from "react";
import AboutDetails from "@/src/components/AboutPage/AboutDetails";
import Faq from "@/src/components/AboutPage/Faq";
import Hero from "@/src/components/AboutPage/Hero";
import MissionAndVision from "@/src/components/AboutPage/MissionAndVision";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import ContactBanner from "@/src/components/ProjectDetailed/ContactBanner";
import { getAboutData } from "./api/services/aboutServices";
import { getMissionData } from "./api/services/servicesService";
import { getFaqData } from "./api/services/faqService";
import { AboutData, MissionData, FaqData, ContactData } from "@/src/types";
import { getContactInfo } from "./api/services/contactService";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface AboutPageProps {
  aboutData: AboutData | null;
  missionData: MissionData[] | null;
  faqData: FaqData[] | null;
  contactData: ContactData | null;
}

export default function About({
  aboutData,
  missionData,
  faqData,
  contactData,
}: AboutPageProps) {
  return (
    <>
       <Head>
        <meta name="author" content="https://markup.az/" />
      </Head>
      <Container>
        <Header />
        <Breadcrumb />
      </Container>

      <Hero data={aboutData} />

      <Container>
        {aboutData && <AboutDetails data={aboutData} />}

        {aboutData && (
          <MissionAndVision aboutData={aboutData} data={missionData} />
        )}

        {faqData && <Faq data={faqData} />}
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
    const [aboutData, missionData, faqData, contactData] = await Promise.all([
      getAboutData(lang),
      getMissionData(lang),
      getFaqData(lang),
      getContactInfo(lang),
    ]);
    if (!contactData) {
      return { notFound: true };
    }

    return {
      props: {
        aboutData: aboutData || null,
        missionData: missionData || null,
        faqData: faqData || null,
        contactData: contactData || null,
      },
    };
  } catch (error) {
    console.error("Error fetching About page data:", error);
    return {
      props: {
        aboutData: null,
        missionData: null,
        faqData: null,
        contactData: null,
      },
    };
  }
}
