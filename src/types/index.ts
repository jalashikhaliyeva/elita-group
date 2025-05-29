// types/index.ts
export interface IntroItem {
  title: string;
  description: string;
  image: string;
  video?: string;
}

export interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

// next
export interface HeroItem {
  button_url: string;
  image: string;
}

export type HeroData = HeroItem[];

export interface HeroProps {
  data: HeroData;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
  image: string;
  image_redirect_url: string | null;
}

export type ServiceFeatureData = ServiceFeature[];
export interface ServicesProps {
  data: ServiceFeatureData;
}

export interface Product {
  id: number;
  product_code: number;
  name: string;
  slug: string;
  price: number;
  discount: string;
  discounted_price: number;
  perMonth: {
    month: number;
    price: number;
  };
  quantity: number;
  reviewCount: number;
  rate: number;
  image: string;
  campaign_widgets: unknown[];
  gift_widgets: unknown[];
  is_online: boolean;
  is_basket: boolean;
  is_favorite: boolean;
  is_compare: boolean;
}

export interface ProductCategory {
  title: string;
  products: Product[];
}

export type ProductsData = ProductCategory[];
export interface ProductsProps {
  products: Product[];
}

export interface OfferedProductsProps {
  data: ProductCategory[];
}

export interface CategoryNavigationProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export interface CartContextType {
  cartCount: number;
  favoritesCount: number;
  cartItems: Product[];
  favoriteItems: Product[];
  addToCart: (product: Product) => void;
  addToFavorites: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
  removeFromFavorites: (productId: string | number) => void;
}

export interface CustomToastProps {
  show: boolean;
  onClose: () => void;
  product: { image: string; name: string };
  message?: string;
  linkText?: string;
  linkHref?: string;
}

export interface HomeProps {
  heroData: HeroData;
  serviceFeatures: ServiceFeatureData;
  products: ProductsData;
}

export interface TopToolBarProps {
  isFixed?: boolean;
}

// types/about.ts
export type AboutData = {
  title: string;
  description: string;
  image_1: string;
  thumb_image_1: string;
  image_2: string;
  thumb_image_2: string;
};

export type AboutApiResponse = {
  data: AboutData;
};

// In your types file
export interface MissionData {
  title: string;
  description: string;
}

export interface MissionApiResponse {
  data: MissionData[];
}

// src/types.ts

/** One FAQ item */
export interface FaqData {
  question: string;
  answer: string;
}

/** API response wrapper for FAQ list */
export interface FaqApiResponse {
  data: FaqData[];
}

export interface ContactData {
  phone: string;
  email: string;
}

export interface ContactApiResponse {
  data: ContactData;
}

// src/types/index.ts (or create a new file for contact types)
export interface ContactFormData {
  name: string;
  surname: string;
  phone: string;
}



// types.ts
export interface BlogItem {
  title: string;
  description: string;
  image: string;
  thumb_image: string;
  slug: string;
}

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface BlogApiResponse {
  data: BlogItem[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

// src/types/services.ts
export type ServiceImage = {
  image: string;
  thumb_image: string;
};

export type ServiceData = {
  title: string;
  image: string;
  thumb_image: string;
  tag: string | null;
  short_description: string;
  description: string;
  slug: string;
  video: string;
  images: ServiceImage[];
};

export type ServicesApiResponse = {
  data: ServiceData[];
};