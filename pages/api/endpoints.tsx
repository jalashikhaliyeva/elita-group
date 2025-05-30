export const API_ENDPOINTS = {
  ABOUT: {
    LIST: "/about",
  },
  BLOG: {
    LIST: "/blogs",
    DETAIL: (slug: string) => `/blog/${slug}`,
  },

  FAQ: {
    LIST: "/faq",
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
