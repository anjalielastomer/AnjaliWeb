"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import EnquiryModal from "@/components/EnquiryModal";
import BuyNowModal from "@/components/BuyNowModal";
import {
  useProduct,
  useProducts,
  transformStrapiProduct,
} from "@/hooks/useProducts";
import { specifications, reviews } from "@/lib/mockData";
import { transformStrapiProduct1, getSegmentDisplayName } from "@/lib/utlis";
import { StrapiProduct } from "@/types/product";
import { motion, Variants } from "framer-motion";

const transformStrapiProductForDetails = (strapiProduct: StrapiProduct) => {
  
  
  const baseProduct = transformStrapiProduct1(strapiProduct);
  console.log("Base produ",baseProduct);
  console.log("starpi page.tsx",strapiProduct);

  return {
    ...baseProduct,

    images: strapiProduct.images?.map((img) => img.url) || [baseProduct.image],
    longDescription: strapiProduct.description,
    inStock: true,
    price: "Contact for Price",
  };
};

const SingleProductPage: React.FC = () => {
  const params = useParams();
  const productId = params.id as string;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);

  const { data, isLoading, error, refetch } = useProduct(productId);
  const product = data?.data
    ? transformStrapiProductForDetails(data.data)
    : null;
  const {
    data: productsData,
    isLoading: isRelatedLoading,
    error: relatedError,
  } = useProducts({ category: product?.categories[0] });

  const transformedProducts1 = useMemo(() => {
    if (!productsData?.data) return [];
    return productsData.data.map(transformStrapiProduct1).slice(0, 4); // Show 4 related products
  }, [productsData]);
  const slideInFromLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const slideInFromRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen pt-20 font-monte flex items-center justify-center"
        style={{ backgroundColor: "var(--bgwhite)" }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-lg" style={{ color: "var(--textcolour)" }}>
            Loading product...
          </p>
        </div>
      </div>
    );
  }
  console.log("Product Data:", product);
  if (error || !product) {
    return (
      <div
        className="min-h-screen pt-20 font-monte flex items-center justify-center "
        style={{ backgroundColor: "var(--bgwhite)" }}
      >
        <div className="text-center">
          <p className="text-lg text-red-600 mb-4">
            {error
              ? `Error loading product: ${error.message}`
              : "Product not found"}
          </p>
          <div className="space-x-4">
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Try Again
            </button>
            <Link
              href="/products"
              className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-50"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className="min-h-screen pt-20 font-monte"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header with "Our Products" and Back Button */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-6 md:px-20">
            <Link
              href="/products"
              className="text-xl font-medium flex items-center transition-colors"
              style={{ color: "var(--textcolour)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--textorange)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--textcolour)")
              }
            >
              &lt;&lt; Previous Page
            </Link>
            <h1
              className="text-4xl font-bold"
              style={{ color: "var(--textblue)" }}
            >
              Our <span style={{ color: "var(--textorange)" }}>Products</span>
            </h1>
          </div>

          <div
            className="w-screen h-px mb-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            style={{ backgroundColor: "var(--textblue)", opacity: "0.3" }}
          ></div>
        </div>

        <div className="mb-8 md:px-20">
          <nav className="flex" aria-label="Breadcrumb">
            <ol
              className="flex items-center space-x-2 text-lg text-medium"
              style={{ color: "var(--textcolour)" }}
            >
              <li>
                <Link
                  href="/products"
                  className="transition-colors"
                  style={{ color: "var(--textcolour)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--textorange)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--textcolour)")
                  }
                >
                  Products
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">&gt;</span>
                <Link
                  href="/products"
                  className="transition-colors"
                  style={{ color: "var(--textcolour)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--textorange)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--textcolour)")
                  }
                >
                  {getSegmentDisplayName(product.categories[0] || "")}
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">&gt;</span>
                <span style={{ color: "var(--textblue)" }}>{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:px-20">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInFromLeft}
            >
              <div

                className="w-full aspect-square rounded-lg overflow-hidden border-2 border-gray-200"
              >
                <Image
                  src={product.images?.[selectedImageIndex] || product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover p-10"
                />
              </div>
            </motion.div>
            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-4 pt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImageIndex === index
                      ? "border-orange-500"
                      : "border-gray-200"
                      }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

            )}
          </div>

          {/* Product Info */}
          {/*<motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={slideInFromRight} className="space-y-6"> */}
            <div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "var(--textblue)" }}
              >
                {product.name}
              </h2>

              {/* Rating and Stock */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-2xl">
                    {renderStars(Math.round(product.rating))}
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "var(--textcolour)" }}
                  >
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                {product.inStock && (
                  <span
                    className="text-sm font-medium px-2 py-1 rounded"
                    style={{
                      color: "#16A34A",
                    }}
                  >
                    In Stock
                  </span>
                )}
              </div>
              <div
                className="w-full h-px mb-8"
                style={{ backgroundColor: "var(--textblue)", opacity: "0.3" }}
              ></div>
            </div>

            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: "var(--bgcolour)" }}
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--textblue)" }}
              >
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.keyFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>
                      <Image
                        src={"/tick.svg"}
                        height={8}
                        width={12}
                        alt="Tick Icon"
                      />
                    </span>
                    <span className="text-sm" style={{ color: "#4B5563" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="w-full py-3 px-6 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--textorange)" }}
              >
                Enquire Now
              </button>
              <button
                onClick={() => setIsBuyNowOpen(true)}
                className="w-full py-3 px-6 rounded-lg font-medium border transition-colors"
                style={{
                  color: "var(--textorange)",
                  borderColor: "var(--textorange)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--textorange)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--textorange)";
                }}
              >
                Order Now
              </button>
            </div>
          {/*</motion.div>*/}
        </div>
        {/* Product Description Tabs */}
        <div className="mb-16">
          <div className="flex space-x-8 mb-6 md:px-20">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 capitalize transition-colors ${activeTab === tab ? "border-b-2 font-medium" : ""
                  }`}
                style={{
                  color:
                    activeTab === tab
                      ? "var(--textorange)"
                      : "var(--textcolour)",
                  borderColor:
                    activeTab === tab ? "var(--textorange)" : "transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            className="w-screen h-px mb-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
            style={{ backgroundColor: "black", opacity: "1" }}
          ></div>

          <div className="prose max-w-none md:px-20">
            {activeTab === "description" && (
              <div className="space-y-4">
                {product.longDescription
                  ?.split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} style={{ color: "var(--textcolour)" }}>
                      {paragraph}
                    </p>
                  ))}
              </div>
            )}
            {activeTab === "specifications" && (
              <div>
                <div className="space-y-8">
                  
                      <p
                        className="text-base mb-4"
                        style={{ color: "var(--textblue)" }}
                      >
                        {product.specification}
                      </p>
                     {/* <div
                        className="rounded-lg p-4"
                        style={{ backgroundColor: "var(--bgcolour)" }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.items.map((spec, specIndex) => (
                            <div
                              key={specIndex}
                              className="flex justify-between items-start"
                            >
                              <span
                                className="font-medium text-sm"
                                style={{ color: "var(--textblue)" }}
                              >
                                {spec.label}:
                              </span>
                              <span
                                className="text-sm text-right ml-4"
                                style={{ color: "var(--textcolour)" }}
                              >
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div> Add a margin to the bottom of the section for spacing */}
                    </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "var(--textblue)" }}
                  >
                    Customer Reviews ({product.reviews.length})
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(Math.round(product.rating))}
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: "var(--textcolour)" }}
                    >
                      {product.rating.toFixed(1)} out of 5
                    </span>
                  </div>
                </div>

                <div
                  className=" overflow-y-auto pr-4"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "var(--textorange) transparent",
                  }}
                >
                  <div className="space-y-6">
                    {product.reviews.length > 0 ? (
                      product.reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b pb-6 last:border-b-0"
                          style={{ borderColor: "var(--bgcolour)" }}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4
                                className="font-semibold"
                                style={{ color: "var(--textblue)" }}
                              >
                                {review.customerName}
                              </h4>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-1 mb-1">
                                {renderStars(review.rating)}
                              </div>
                              <p
                                className="text-xs"
                                style={{
                                  color: "var(--textcolour)",
                                  opacity: "0.6",
                                }}
                              >
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--textcolour)" }}
                          >
                            {review.message}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p style={{ color: "var(--textcolour)" }}>
                        No reviews yet for this product.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:px-20">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--textblue)" }}
          >
            Related <span style={{ color: "var(--textorange)" }}>Products</span>
          </h2>
          {isRelatedLoading && (
            <p style={{ color: "var(--textcolour)" }}>
              Loading related products…
            </p>
          )}

          {relatedError && (
            <p className="text-red-600">Error loading related products.</p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformedProducts1
              .filter((p) => p.documentId !== product.documentId) 
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productName={product.name}
      />

      {/* Buy Now Modal */}
      <BuyNowModal
        isOpen={isBuyNowOpen}
        onClose={() => setIsBuyNowOpen(false)}
        productName={product.name}
        productPrice={product.price}
      />
    </div>
  );
};

export default SingleProductPage;
