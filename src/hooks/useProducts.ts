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
    queryFn: async () => {
      const filters: Record<string, any> = {};

      // ✅ Use external API if segment is "all"
      if (params?.segment == "all") {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products?populate=images`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products from external source.");
        }

        const json = await res.json();
        
        return json;
      }

      // ✅ Use internal API if specific category/segment
      if (params?.segment && params.segment !== "all") {
        filters["product_categories.documentId.$eq"] = params.segment;
      }

      return productsService.getProducts({
        page: params?.page || 1,
        pageSize: params?.pageSize || 25,
        filters,
      });
    },
    ...options,
  });
};

// ✅ Single product fetch (no changes needed)
export const useProduct = (
  documentId: string,
  options?: Omit<
    UseQueryOptions<{ data: StrapiProduct }>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<{ data: StrapiProduct }>({
    queryKey: ["product", documentId],
    queryFn: () => productsService.getProductById(documentId),
    enabled: !!documentId,
    ...options,
  });
};

// ✅ Transform function (no changes needed)
export const transformStrapiProduct = (
  strapiProduct: StrapiProduct
): Product => {
  const avgRating =
    strapiProduct.customer_reviews?.length > 0
      ? strapiProduct.customer_reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        ) / strapiProduct.customer_reviews.length
      : 0;

  const categories =
    strapiProduct.product_categories?.map((cat) => cat.name) || [];

  const reviews =
    strapiProduct.customer_reviews?.map((review) => ({
      id: review.id,
      customerName: review.customer_name,
      rating: review.rating,
      message: review.review,
      createdAt: review.createdAt,
    })) || [];

  return {
    id: strapiProduct.id,
    documentId: strapiProduct.documentId,
    name: strapiProduct.title,
    description: strapiProduct.description,
    image: strapiProduct.images[0]?.url || "",
    rating: avgRating,
    reviewCount: strapiProduct.customer_reviews?.length || 0,
    categories: categories,
    keyFeatures:
      strapiProduct.key_features?.map((feature) => feature.text) || [],
    reviews: reviews,
    specification: strapiProduct.specification || "",
  };
};
