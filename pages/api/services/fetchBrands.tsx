// src/api/services/brandServices.ts
import { Brand, BrandsApiResponse } from "@/src/types";
import { API_ENDPOINTS } from "../endpoints";


export async function fetchBrands(): Promise<Brand[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.BRANDS.LIST}`;

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
    const txt = await res.text();
    console.error("[fetchBrands] fetch failed:", res.status, txt);
    throw new Error(`Brands fetch failed (${res.status})`);
  }

  const json = (await res.json()) as BrandsApiResponse;
  return json.data;
}
