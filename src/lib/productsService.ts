import { apiClient } from "@/lib/api";
import { StrapiResponse, StrapiProduct } from "@/types/product";

type Filters = Record<string, any>;

export const productsService = {
  getProducts: async (params?: {
    page?: number;
    pageSize?: number;
    filters?: Filters;
  }): Promise<StrapiResponse> => {
    const queryParams: Record<string, string> = {
      populate: "*",
    };

    if (params?.page) queryParams["pagination[page]"] = String(params.page);
    if (params?.pageSize)
      queryParams["pagination[pageSize]"] = String(params.pageSize);

    if (params?.filters) {
      for (const [rawKey, rawValue] of Object.entries(params.filters)) {
        if (
          rawValue === undefined ||
          rawValue === null ||
          rawValue === "" ||
          rawValue === "all"
        ) {
          continue;
        }
        const value = String(rawValue);
        const parts = rawKey.split(".");
        let bracketPath = parts.reduce((acc, curr) => `${acc}[${curr}]`, "");
        if (!rawKey.endsWith(".$eq")) {
          bracketPath += "[$eq]";
        }
        queryParams[`filters${bracketPath}`] = value;
      }
    }

    return apiClient.get<StrapiResponse>("/products", queryParams);
  },

  getProductById: async (
    documentId: string
  ): Promise<{ data: StrapiProduct }> => {
    
    return apiClient.get<{ data: StrapiProduct }>(`/products/${documentId}`, {
      populate: "*",
    });
  },
};
