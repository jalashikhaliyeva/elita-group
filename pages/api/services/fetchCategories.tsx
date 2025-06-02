// src/api/services/categoryServices.ts
import { Category, CategoriesApiResponse } from "@/src/types";
import { API_ENDPOINTS } from "../endpoints";

export async function fetchCategories(): Promise<Category[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.CATEGORIES.LIST}`;

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
    console.error("[fetchCategories] fetch failed:", res.status, txt);
    throw new Error(`Categories fetch failed (${res.status})`);
  }

  const json = (await res.json()) as CategoriesApiResponse;
  return json.data;
}