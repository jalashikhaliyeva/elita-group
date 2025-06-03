// pages/bathroom/[slug].tsx

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import ProductSingle from "@/src/components/Bathroom/ProductSingle";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import { Product } from "@/src/types";
import { fetchProductBySlug } from "../api/services/fetchProducts";
import Head from "next/head";

interface BathroomDetailedProps {
  product: Product;
}

const BathroomDetailed = ({ product }: BathroomDetailedProps) => {
  return (
    <>
       <Head>
        <meta name="author" content="https://markup.az/" />
      </Head>
      <Container>
        <Header activeItem="hamam" />
      </Container>

      <Container>
        <Breadcrumb />
      </Container>

      <Container>
        <ProductSingle product={product} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default BathroomDetailed;

export const getServerSideProps: GetServerSideProps<
  BathroomDetailedProps
> = async (context: GetServerSidePropsContext) => {
  const slugParam = context.params?.slug;
  const lang = context.locale || "az"; 
  if (typeof slugParam !== "string") {
    return { notFound: true };
  }

  try {
    const product = await fetchProductBySlug(slugParam, lang);
    return {
      props: {
        product,
      },
    };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
};
