import Hero from "@/src/components/ProjectDetailed/Hero.tsx";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React from "react";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Filter from "@/src/components/Bathroom/Filter";
import Products from "@/src/components/Bathroom/Products";
import { BannerItem, Brand, Category, Color, Product } from "@/src/types";
import { getBanner } from "../api/services/fetchBanner";
import Partners from "@/src/components/Bathroom/Partners";
import { fetchBrands } from "../api/services/fetchBrands";
import { fetchCategories } from "../api/services/fetchCategories";
import { fetchColors } from "../api/services/fetchColors";
import { fetchProducts } from "../api/services/fetchProducts";
import { GetServerSidePropsContext } from "next";

interface BathroomProps {
  bannerData: BannerItem | null;
  brands: Brand[];
  categories: Category[];
  colors: Color[];
  products: Product[];
}

function Bathroom({
  bannerData,
  brands,
  categories,
  colors,
  products,
}: BathroomProps) {
  return (
    <>
      <Container>
        <Header activeItem="hamam" />
      </Container>

      <Container>
        <Breadcrumb />
      </Container>

      <Hero
        title={bannerData?.title || ""}
        image={bannerData?.image || ""}
        short_description={bannerData?.description || ""}
      />

      <Partners brands={brands} />

      <Container>
        <Filter categories={categories} brands={brands} colors={colors} />
        {/* Pass the fetched products into your Products component */}
        <Products products={products} />
      </Container>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const lang = context.locale || "az";
  try {
    const slug = "hamam";

    // Fetch banner, brands, categories, colors, + products in parallel
    const [bannerData, brands, categories, colors, products] =
      await Promise.all([
        getBanner(slug, lang),
        fetchBrands(lang),
        fetchCategories(lang),
        fetchColors(lang),
        fetchProducts(lang),
      ]);

    return {
      props: {
        bannerData,
        brands,
        categories,
        colors,
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        bannerData: null,
        brands: [],
        categories: [],
        colors: [],
        products: [],
      },
    };
  }
}

export default Bathroom;
