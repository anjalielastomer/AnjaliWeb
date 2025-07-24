import { StrapiProduct, Product } from "@/types/product";
export const transformStrapiProductForDetails = (
  strapiProduct: StrapiProduct
): Product & {
  price?: string;
  inStock?: boolean;
  keyFeatures?: string[];
  longDescription?: string;
  images?: string[];
} => {
  return {
    id: strapiProduct.id.toString(),
    name: strapiProduct.title,
    description: strapiProduct.description,
    image: strapiProduct.images[0]?.url || "",
    rating: 4.5,
    reviewCount: 127,
    category: "default",
    segment: "railway-metro-coach-products",
    price: "$999",
    inStock: true,
    keyFeatures: strapiProduct.key_features?.map((feature) => feature.text) || [
      "High-quality construction",
      "Durable materials",
      "Easy installation",
      "Cost-effective solution",
      "Reliable performance",
    ],
    longDescription:
      strapiProduct.description +
      "\n\nThis product represents quality engineering and reliable performance. Designed to meet industry standards and provide long-lasting service in demanding environments.",
    images: strapiProduct.images?.map((img) => img.url) || [
      strapiProduct.images[0]?.url || "",
    ],
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