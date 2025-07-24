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
  cover_image: {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: string;
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
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  subtext: string;
  content: string;
  coverImage: string;
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
