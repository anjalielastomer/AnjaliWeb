
import { apiClient } from "@/lib/api";
import { StrapiResponse , StrapiProduct } from "@/types/product";

export const productsService = {
  getProducts: async (params?: {
    page?: number;
    pageSize?: number;
    filters?: Record<string, any>;
  }): Promise<StrapiResponse> => {
    const queryParams: Record<string, string> = {
      populate: "*",
    };

    if (params?.page) {
      queryParams["pagination[page]"] = params.page.toString();
    }

    if (params?.pageSize) {
      queryParams["pagination[pageSize]"] = params.pageSize.toString();
    }


    if (params?.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        if (value && value !== "all") {
          queryParams[`filters[${key}][$eq]`] = value;
        }
      });
    }

    return apiClient.get<StrapiResponse>("/products", queryParams);
  },

  getProductById: async (id: string): Promise<{ data: StrapiProduct }> => {
    return apiClient.get<{ data: StrapiProduct }>(`/products/${id}`, {
      populate: "*",
    });
  },
};
