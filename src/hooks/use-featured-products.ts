import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { FeaturedProductsResponse } from "@/types/featured-products";

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: () =>
      apiClient.get<FeaturedProductsResponse>(
        "/featured-products?populate[product][populate]=*"
      ),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
};
