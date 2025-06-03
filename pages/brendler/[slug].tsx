import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
// import Filter from "@/src/components/Bathroom/Filter";
// import Products from "@/src/components/Bathroom/Products";
import { getBanner } from "../api/services/fetchBanner";
import { fetchBrands } from "../api/services/fetchBrands";
import { GetServerSidePropsContext } from "next";



function Bathroom() {
  return (
    <>
      <Container>
        <Header activeItem="hamam" />
      </Container>
      <Container>
        <Breadcrumb />
      </Container>

      {/* <Container>
        <Filter />
        <Products />
      </Container> */}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const lang = context.locale || "az";
  try {
    const slug = "hamam";
    const [bannerData, brands] = await Promise.all([
      getBanner(slug ,lang),
      fetchBrands(lang),
    ]);

    return {
      props: {
        bannerData,
        brands,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        bannerData: null,
        brands: [],
      },
    };
  }
}

export default Bathroom;
