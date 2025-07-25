export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: string | null;
      size: number;
      width: number;
      height: number;
      sizeInBytes: number;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface KeyFeature {
  id: number;
  text: string;
}

export interface CustomerReview {
  id: number;
  documentId: string;
  customer_name: string;
  rating: number;
  review: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductCategory {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiProduct {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: StrapiImage[];
  key_features: KeyFeature[];
  customer_reviews: CustomerReview[];
  product_categories: ProductCategory[];
}

export interface StrapiResponse {
  data: StrapiProduct[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ProductReview {
  id: number;
  customerName: string;
  rating: number;
  message: string;
  createdAt: string;
}

export interface Product {
  id: number;
  documentId: string; // Add this
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  categories: string[];
  keyFeatures: string[];
  reviews: ProductReview[];
}
