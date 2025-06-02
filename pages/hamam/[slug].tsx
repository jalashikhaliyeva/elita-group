// pages/bathroom/[slug].tsx

import { GetServerSideProps } from "next";
import ProductSingle from "@/src/components/Bathroom/ProductSingle";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Container from "@/src/components/layout/Container";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import { Product } from "@/src/types";
import { fetchProductBySlug } from "../api/services/fetchProducts";

interface BathroomDetailedProps {
  product: Product;
}

const BathroomDetailed = ({ product }: BathroomDetailedProps) => {
  return (
    <>
      <Container>
        <Header activeItem="dizayn" />
      </Container>

      <Container>
        <Breadcrumb />
      </Container>

      <Container>
        {/* Now pass the fetched `product` object into ProductSingle */}
        <ProductSingle product={product} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default BathroomDetailed;

// ----------------------------------------------------------------
// This getServerSideProps will run on every request to /bathroom/[slug]
// It extracts `slug` from the URL, calls fetchProductBySlug, and
// either returns the product data as props or a 404 if not found.
// ----------------------------------------------------------------
export const getServerSideProps: GetServerSideProps<
  BathroomDetailedProps
> = async (context) => {
  const slugParam = context.params?.slug;
  if (typeof slugParam !== "string") {
    return { notFound: true };
  }

  try {
    const product = await fetchProductBySlug(slugParam);
    return {
      props: {
        product,
      },
    };
  } catch (err) {
    console.error(err);
    // If the fetch fails (e.g. product not found), return 404
    return { notFound: true };
  }
};
