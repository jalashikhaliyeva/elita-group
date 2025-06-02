// src/api/services/fetchProducts.ts
import { Product, ProductsApiResponse, ProductSingleApiResponse } from "@/src/types";
import { API_ENDPOINTS } from "../endpoints";

export async function fetchProducts(): Promise<Product[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.PRODUCTS.LIST}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": "az",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("[fetchProducts] fetch failed:", res.status, text);
    throw new Error(`Products fetch failed (${res.status})`);
  }

  const json = (await res.json()) as ProductsApiResponse;
  return json.data;
}



export async function fetchProductBySlug(slug: string): Promise<Product> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.PRODUCTS.DETAIL(slug)}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": "az",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(
      `[fetchProductBySlug] fetch failed for slug=${slug}:`,
      res.status,
      text
    );
    throw new Error(`Product fetch failed (${res.status})`);
  }

  // The API’s `detail` response is shaped like { status: true, data: { …Product… } }
  const json = (await res.json()) as ProductSingleApiResponse;
  return json.data;
}