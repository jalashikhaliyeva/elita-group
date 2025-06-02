export const API_ENDPOINTS = {
  INTRO: {
    LIST: "/categories",
  },
  BANNER: {
    DETAIL: (slug: string) => `/category/${slug}`,
  },
  ABOUT: {
    LIST: "/about",
  },
  BRANDS: {
    LIST: "/brands",
  },
  BLOG: {
    LIST: "/blogs",
    DETAIL: (slug: string) => `/blog/${slug}`,
  },
  FAQ: {
    LIST: "/faq",
  },
  PRODUCTS: {
    LIST: "/products",
    DETAIL: (slug: string) => `/product/${slug}`,
  },
  COLOR: {
    LIST: "/color",
  },
  CATEGORIES: {
    LIST: "/product-categories",
  },
  MISSION: {
    LIST: "/our-mission",
  },
  SERVICES: {
    LIST: "/services",
    DETAIL: (slug: string) => `/service/${slug}`,
  },
  CONTACT: {
    LIST: "/contact",
    POST: "/contact-form",
  },
};
