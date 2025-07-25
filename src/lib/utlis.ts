import { StrapiProduct, Product , ProductReview } from "@/types/product";
export const transformStrapiProduct1 = (
  strapiProduct: StrapiProduct
): Product => {
  // 1) compute avg rating
  const reviewCount = strapiProduct.customer_reviews?.length ?? 0;
  const avgRating =
    reviewCount > 0
      ? strapiProduct.customer_reviews!.reduce((sum, r) => sum + r.rating, 0) /
        reviewCount
      : 0;

  // 2) grab all category names
  const categories = strapiProduct.product_categories?.map((c) => c.name) ?? [];

  // 3) map Strapi’s customer_reviews into your ProductReview[]
  const reviews: ProductReview[] =
    strapiProduct.customer_reviews?.map((r) => ({
      id: r.id,
      customerName: r.customer_name,
      rating: r.rating,
      message: r.review,
      createdAt: r.createdAt,
    })) ?? [];

  return {
    id: strapiProduct.id,
    documentId: strapiProduct.documentId,
    name: strapiProduct.title,
    description: strapiProduct.description,
    image: strapiProduct.images[0]?.url ?? "",
    rating: avgRating,
    reviewCount,
    categories,
    keyFeatures: strapiProduct.key_features?.map((f) => f.text) ?? [],
    reviews, // <-- NEW
  };
};


export const getSegmentDisplayName = (segment: string) => {
    const segmentMap: Record<string, string> = {
      "railway-metro-coach-products": "Railway/Metro Coach",
      "railway-metro-track-products": "Railway/Metro Track",
      "brake-shoe-brake-pad-products": "Brake Shoe/Brake Pad",
      "steel-casting-products": "Steel-Casting",
      "rolling-mill-products": "Rolling Mill",
      "other-products": "Other Products",
    };
    return segmentMap[segment] || "Products";
  };