"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFeaturedProducts } from "@/hooks/use-featured-products";

const StarRating: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-0.5">
      {[...Array(totalStars)].map((_, i) => {
        const isFilled = i + 1 <= rating;
        return (
          <svg
            key={i}
            className="w-4 h-4 text-textorange flex-shrink-0"
            fill={isFilled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 17.27L18.18 21 16.54 13.97 
                 22 9.24 14.81 8.63 12 2 9.19 8.63 
                 2 9.24 7.45 13.97 5.82 21z"
            />
          </svg>
        );
      })}
    </div>
  );
};

const ProductSkeleton: React.FC = () => (
  <div className="bg-white w-96 sm:w-80 rounded-2xl shadow-sm overflow-hidden flex-shrink-0 flex flex-col animate-pulse">
    <div className="h-80 md:h-60 bg-gray-200"></div>
    <div className="pt-4 flex flex-col flex-grow">
      <div className="px-4 flex items-center space-x-1 mb-2">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-10"></div>
      </div>
      <div className="px-4 mb-5">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="px-4 pb-4">
        <div className="h-12 bg-gray-200 rounded-2xl"></div>
      </div>
    </div>
  </div>
);

const ErrorState: React.FC<{ error: Error; onRetry: () => void }> = ({
  error,
  onRetry,
}) => (
  <div className="w-full flex flex-col items-center justify-center py-20">
    <div className="text-center">
      <h3 className="text-lg font-semibold text-red-600 mb-2">
        Failed to load featured products
      </h3>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-textorange text-white rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

const FeaturedProducts: React.FC = () => {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFeaturedProducts();

  if (isLoading) {
    return (
      <section className="max-w-[1440px] bg-bgcolour mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
        <h1 className="text-4xl font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
          Featured <span className="text-textorange">Products</span>
        </h1>
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-6 py-2">
            {[...Array(3)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-[1440px] bg-bgcolour mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
        <h1 className="text-4xl font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
          Featured <span className="text-textorange">Products</span>
        </h1>
        <ErrorState error={error} onRetry={refetch} />
      </section>
    );
  }

  const featuredProducts = data?.data ?? [];

  return (
    <section className="max-w-[1440px] bg-bgcolour mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
      <h1 className="text-4xl font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
        Featured <span className="text-textorange">Products</span>
      </h1>

      <div className="relative overflow-hidden w-full">
        <div className="flex gap-6 py-2 animate-scroll-infinite">
          {[...featuredProducts, ...featuredProducts, ...featuredProducts].map(
            (item, index) => {
              const { product } = item;
              const productImage = product.images?.[0];

              return (
                <article
                  key={`${item.documentId}-${index}`}
                  className="bg-white w-96 sm:w-80 rounded-2xl shadow-sm overflow-hidden flex-shrink-0 flex flex-col"
                >
                  <div className="flex justify-center h-80 md:h-60 relative bg-gray-100">
                    {productImage ? (
                      <Image
                        src={productImage.url}
                        alt={productImage.name}
                      
                        width={400}
                        height={240}
                        className="object-cover h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-textorange/10 to-textblue/10">
                        <span className="text-6xl text-gray-300">📦</span>
                      </div>
                    )}
                    <h3 className="absolute bottom-1 font-bold text-lg z-10 text-white px-4 py-1 rounded-sm w-full text-left bg-gradient-to-r from-black/70 to-transparent">
                      {product.title}
                    </h3>
                  </div>

                  <div className="pt-4 flex flex-col flex-grow">
                    <div className="px-4 flex items-center space-x-1 mb-2">
                      <StarRating rating={5} />
                      <span className="text-textblue text-sm">(0)</span>
                    </div>

                    <p className="px-4 text-textblue flex-grow text-sm font-medium leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <button
                      type="button"
                      className="w-full mt-auto rounded-2xl border px-4 py-3 font-bold text-lg transition-colors duration-600 hover:text-white"
                      style={{
                        color: "var(--textorange)",
                        borderColor: "var(--textorange)",
                      }}
                      aria-label={`Explore product ${product.title}`}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--textorange)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "var(--textorange)";
                      }}
                      onClick={() =>
                        router.push(`/products/${product.documentId}`)
                      }
                    >
                      Explore Product
                    </button>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10">
        <button className="group text-textblue transition-colors px-14 py-3 rounded-2xl text-[28px] font-normal flex items-center gap-2 font-raleway">
          <span className="text-textorange">Explore</span>
          <span className="text-textblue"> All</span>
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={27}
            height={27}
            className="group-hover:hidden"
          />
          <Image
            src="/send.svg"
            alt="arrow"
            width={27}
            height={27}
            className="hidden group-hover:block"
          />
        </button>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
          width: calc((320px + 24px) * ${featuredProducts.length * 3});
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
