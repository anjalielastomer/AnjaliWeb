import { ApiResponse } from "@/types/article";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://lovable-gift-31985371d0.strapiapp.com/api";

export const articlesApi = {
  getAll: async (): Promise<ApiResponse> => {
    const response = await fetch(`${BASE_URL}/articles?populate=*`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  getById: async (id: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}/articles/${id}?populate=*`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};
