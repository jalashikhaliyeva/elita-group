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

export interface MissionData {
  title: string;
  description: string;
}

export interface MissionApiResponse {
  data: MissionData[];
}


export interface FaqData {
  question: string;
  answer: string;
}

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

export interface ContactFormData {
  name: string;
  surname: string;
  phone: string;
}

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


export interface ServiceImage {
  image: string;
  thumb_image: string;
}

export interface ServiceItem {
  title: string;
  image: string;
  thumb_image: string;
  tag: string | null;
  short_description: string;
  description: string;
  slug: string;
  video: string;
  images: ServiceImage[];
}

export interface SingleServiceApiResponse {
  data: ServiceItem;
}

export interface IntroServiceInformation {
  title: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  thumb_image_1: string;
  thumb_image_2: string;
  thumb_image_3: string;
}

export interface IntroServiceData {
  title: string;
  slug: string;
  description: string;
  video_intro: string;
  video: string;
  image: string;
  thumb_image: string;
  information: IntroServiceInformation[];
}

export interface IntroServicesApiResponse {
  data: IntroServiceData[];
}


export interface InformationItem {
  // Define the actual structure based on your data
  id?: string | number;
  title?: string;
  description?: string;
  // Add other properties as needed
}

// types.ts (add these types)
export interface BannerItem {
  title: string;
  slug: string;
  description: string;
  video_intro: string;
  video: string;
  image: string;
  thumb_image: string;
  information: InformationItem[]; // Replace any[] with proper type
}

export interface BannerApiResponse {
  timestamp: string;
  status: boolean;
  message: string;
  lang: string;
  data: BannerItem;
}

export interface Brand {
  name: string;
  image: string;
  thumb_image: string;
  slug: string;
}

export interface BrandsApiResponse {
  data: Brand[];
}
