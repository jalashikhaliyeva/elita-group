// src/api/services.ts
import {
  ServiceData,
  ServicesApiResponse,
  ServiceItem,
  SingleServiceApiResponse,
} from "@/src/types";
import { API_ENDPOINTS } from "../endpoints";

export async function fetchServices(): Promise<ServiceData[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.SERVICES.LIST}`;

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
    console.error("[fetchServices] fetch failed:", res.status, txt);
    throw new Error(`Services data fetch failed (${res.status})`);
  }

  const json = (await res.json()) as ServicesApiResponse;
  return json.data;
}

export async function getSingleService(slug: string): Promise<ServiceItem> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.SERVICES.DETAIL(slug)}`;

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
    console.error("[getSingleService] fetch failed:", res.status, txt);
    throw new Error(`Service data fetch failed (${res.status})`);
  }

  const json = (await res.json()) as SingleServiceApiResponse;
  return json.data;
}
