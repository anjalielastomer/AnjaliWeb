import { ApiResponse } from "@/types/article";
import { payloadGet } from "@/lib/payload";

export const articlesApi = {
  getAll: async (): Promise<ApiResponse> => {
    return payloadGet<ApiResponse>("/articles?populate=*");
  },

  getById: async (id: string): Promise<any> => {
    return payloadGet<any>(`/articles/${id}?populate=*`);
  },
};
