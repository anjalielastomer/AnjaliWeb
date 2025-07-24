
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { productsService } from "@/lib/productsService";
import { StrapiResponse, StrapiProduct, Product } from "@/types/product";

interface UseProductsParams {
  page?: number;
  pageSize?: number;
  category?: string;
  segment?: string;
}

interface UseProductsOptions
  extends Omit<UseQueryOptions<StrapiResponse>, "queryKey" | "queryFn"> {}

export const useProducts = (
  params?: UseProductsParams,
  options?: UseProductsOptions
) => {
  const queryKey = ["products", params];

  return useQuery<StrapiResponse>({
    queryKey,
    queryFn: () => {
      const filters: Record<string, any> = {};

      if (params?.category && params.category !== "all") {
        filters.category = params.category;
      }

      if (params?.segment && params.segment !== "all") {
        filters.segment = params.segment;
      }

      return productsService.getProducts({
        page: params?.page || 1,
        pageSize: params?.pageSize || 25,
        filters: Object.keys(filters).length > 0 ? filters : undefined,
      });
    },
    ...options,
  });
};

export const useProduct = (
  id: string,
  options?: Omit<
    UseQueryOptions<{ data: StrapiProduct }>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<{ data: StrapiProduct }>({
    queryKey: ["product", id],
    queryFn: () => productsService.getProductById(id),
    enabled: !!id,
    ...options,
  });
};

export const transformStrapiProduct = (
  strapiProduct: StrapiProduct
): Product => {
  return {
    id: strapiProduct.documentId,
    name: strapiProduct.title,
    description: strapiProduct.description,
    image: strapiProduct.images[0]?.url || "",
    rating: 4.5, 
    reviewCount: 0, 
    category: "default", 
    segment: "all", 
  };
};
