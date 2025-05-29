import { BlogApiResponse, BlogItem } from "@/src/types";
import { API_ENDPOINTS } from "../endpoints";

export async function getBlogsData(): Promise<BlogApiResponse> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.BLOG.LIST}`;

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
    console.error("[getBlogsData] fetch failed:", res.status, txt);
    throw new Error(`Blog data fetch failed (${res.status})`);
  }

  const json = (await res.json()) as BlogApiResponse;
  return json;
}

export async function getSingleBlogData(slug: string): Promise<BlogItem> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const url = `${base}${API_ENDPOINTS.BLOG.DETAIL(slug)}`;

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
    console.error("[getSingleBlogData] fetch failed:", res.status, txt);
    throw new Error(`Blog data fetch failed (${res.status})`);
  }

  const json = (await res.json()) as { data: BlogItem };
  return json.data;
}
