import { IntroServicesApiResponse, IntroServiceData } from "@/src/types";
import { API_ENDPOINTS } from "../endpoints";

export async function fetchIntroServices(): Promise<IntroServiceData[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.INTRO.LIST}`;

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
    console.error("[fetchIntroServices] fetch failed:", res.status, txt);
    throw new Error(`Intro services data fetch failed (${res.status})`);
  }

  const json = (await res.json()) as IntroServicesApiResponse;
  return json.data;
}