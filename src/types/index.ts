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
