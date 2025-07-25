export interface StrapiImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  description: string;
  subtext: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover_images: StrapiImage[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  subtext: string;
  content: string;
  image1: string;
  image2: string;
  createdAt: string;
}

export interface StrapiProjectsResponse {
  data: StrapiProject[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
