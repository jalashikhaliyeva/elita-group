import Hero from "@/src/components/ProjectDetailed/Hero.tsx";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Filter from "@/src/components/Bathroom/Filter";
import Products from "@/src/components/Bathroom/Products";
import { BannerItem, Brand } from "@/src/types";
import { getBanner } from "../api/services/fetchBanner";
import Partners from "@/src/components/Bathroom/Partners";
import { fetchBrands } from "../api/services/fetchBrands";

interface BathroomProps {
  bannerData: BannerItem;
  brands: Brand[];
}

function Bathroom({ bannerData, brands }: BathroomProps) {
  return (
    <>
      <Container>
        <Header activeItem="hamam" />
      </Container>
      <Container>
        <Breadcrumb />
      </Container>
      <Hero
        title={bannerData.title}
        image={bannerData.image}
        short_description={bannerData.description}
      />
      <Partners brands={brands} />
      <Container>
        <Filter />
        <Products />
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const slug = "hamam";
    const [bannerData, brands] = await Promise.all([
      getBanner(slug),
      fetchBrands(),
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
