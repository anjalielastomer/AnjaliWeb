import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { productsService } from "@/lib/productsService";
import { DEFAULT_LIMIT, payloadGet } from "@/lib/payload";
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

      // Page size must be the same on both branches. The unfiltered branch
      // used to ignore it entirely and fall back to DEFAULT_LIMIT, so "All
      // products" listed everything while a category silently truncated to
      // whatever the caller asked for.
      const page = params?.page || 1;
      const pageSize = params?.pageSize || DEFAULT_LIMIT;

      // ✅ All products, images only
      if (params?.segment == "all") {
        return payloadGet<StrapiResponse>("/products", {
          populate: "images",
          "pagination[page]": String(page),
          "pagination[pageSize]": String(pageSize),
        });
      }

      // ✅ Use internal API if specific category/segment
      if (params?.segment && params.segment !== "all") {
        filters["product_categories.documentId.$eq"] = params.segment;
      }

      return productsService.getProducts({
        page,
        pageSize,
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
