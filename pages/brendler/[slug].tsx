import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import React, { useState, useEffect } from "react";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import Filter from "@/src/components/Bathroom/Filter";
import Products from "@/src/components/Bathroom/Products";
import { GetServerSidePropsContext } from "next";
import { BannerItem, Brand, Category, Color, Product } from "@/src/types";
import {
  fetchFilteredProducts,
  FilterParams,
} from "../api/services/fetchProducts";
import { getBanner } from "../api/services/fetchBanner";
import { fetchBrands } from "../api/services/fetchBrands";
import { fetchCategories } from "../api/services/fetchCategories";
import { fetchColors } from "../api/services/fetchColors";
import Head from "next/head";

interface BrandPageProps {
  bannerData: BannerItem | null;
  brands: Brand[];
  categories: Category[];
  colors: Color[];
  initialProducts: Product[];
  selectedBrand: Brand | null;
  brandSlug: string;
}

export interface FilterState {
  categories: string[];
  brands: string[];
  colors: string[];
  search: string;
}

function BrandPage({
  brands,
  categories,
  colors,
  initialProducts,
  selectedBrand,
}: BrandPageProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: selectedBrand ? [selectedBrand.slug] : [],
    colors: [],
    search: "",
  });

  const applyFilters = async (newFilters: FilterState) => {
    setLoading(true);

    try {
      const isSearchOnly =
        newFilters.search.trim() &&
        newFilters.categories.length === 0 &&
        newFilters.brands.length === 1 && 
        newFilters.colors.length === 0;

      if (isSearchOnly) {
        setHasSearched(true);
        const filterParams: FilterParams = {
          brands: newFilters.brands,
          search: newFilters.search.trim(),
        };
        const response = await fetchFilteredProducts(filterParams);
        setProducts(response.data);
      } else {
        // Use fetchFilteredProducts for complex filtering
        if (newFilters.search.trim()) {
          setHasSearched(true);
        }

        const filterParams: FilterParams = {
          categories:
            newFilters.categories.length > 0
              ? newFilters.categories
              : undefined,
          brands: newFilters.brands.length > 0 ? newFilters.brands : undefined,
          colors: newFilters.colors.length > 0 ? newFilters.colors : undefined,
          search: newFilters.search.trim() || undefined,
        };

        const response = await fetchFilteredProducts(filterParams);
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error applying filters:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: FilterState) => {
    const filtersWithBrand = {
      ...newFilters,
      brands: selectedBrand
        ? [...new Set([selectedBrand.slug, ...newFilters.brands])]
        : newFilters.brands,
    };

    setFilters(filtersWithBrand);
    applyFilters(filtersWithBrand);
  };

  const handleSearchChange = (searchTerm: string) => {
    if (searchTerm.trim()) {
      setHasSearched(true);
    }
    const newFilters = {
      ...filters,
      search: searchTerm,
      brands: selectedBrand ? [selectedBrand.slug] : [],
    };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const clearAllFilters = () => {
    const emptyFilters: FilterState = {
      categories: [],
      brands: selectedBrand ? [selectedBrand.slug] : [], // Keep the selected brand
      colors: [],
      search: "",
    };
    setFilters(emptyFilters);
    setHasSearched(false);
    applyFilters(emptyFilters);
  };

  // Update filters when brand changes (if navigating between brand pages)
  useEffect(() => {
    if (selectedBrand) {
      const newFilters = {
        ...filters,
        brands: [selectedBrand.slug],
      };
      setFilters(newFilters);
      applyFilters(newFilters);
    }
  }, [selectedBrand?.slug]);

  const brandTitle = selectedBrand
    ? `${selectedBrand.name}`
    : "Brend Məhsulları";
  

  return (
    <>
       <Head>
        <meta name="author" content="https://markup.az/" />
      </Head>
      <Container>
        <Header />
      </Container>

      <Container>
        <Breadcrumb />
      </Container>

      <Container>
        <h1 className="text-2xl md:text-4xl text-neutral-700 font-medium font-archivo">
          {brandTitle}
        </h1>
        <Filter
          categories={categories}
          brands={brands}
          colors={colors}
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          onClearFilters={clearAllFilters}
          // selectedBrand={selectedBrand}
        />
        <Products
          products={products}
          loading={loading}
          searchTerm={filters.search}
          hasSearched={hasSearched}
        />
      </Container>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const lang = context.locale || "az";
  const { slug } = context.params!;
  const brandSlug = slug as string;

  try {
    const [bannerData, brands, categories, colors] = await Promise.all([
      getBanner("hamam", lang),
      fetchBrands(lang),
      fetchCategories(lang),
      fetchColors(lang),
    ]);

    // Find the selected brand
    const selectedBrand =
      brands.find((brand) => brand.slug === brandSlug) || null;

    // Fetch products filtered by the selected brand
    let initialProducts: Product[] = [];
    if (selectedBrand) {
      const filterParams: FilterParams = {
        brands: [selectedBrand.slug],
      };
      const response = await fetchFilteredProducts(filterParams, lang);
      initialProducts = response.data;
    }

    return {
      props: {
        bannerData,
        brands,
        categories,
        colors,
        initialProducts,
        selectedBrand,
        brandSlug,
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
        initialProducts: [],
        selectedBrand: null,
        brandSlug,
      },
    };
  }
}

export default BrandPage;
