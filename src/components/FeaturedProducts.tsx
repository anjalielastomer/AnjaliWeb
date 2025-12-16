"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFeaturedProducts } from "@/hooks/use-featured-products";
import Link from "next/link";

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
  <div className="bg-white w-48 sm:w-80 rounded-xl md:rounded-2xl shadow-sm overflow-hidden flex-shrink-0 flex flex-col animate-pulse">
    <div className="h-40 md:h-60 bg-gray-200"></div>
    <div className="pt-2 md:pt-4 flex flex-col flex-grow">
      <div className="px-2 md:px-4 flex items-center space-x-1 mb-1 md:mb-2">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-10"></div>
      </div>
      <div className="px-2 md:px-4 mb-3 md:mb-5">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="px-2 md:px-4 pb-2 md:pb-4">
        <div className="h-8 md:h-12 bg-gray-200 rounded-xl md:rounded-2xl"></div>
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
  const [isHovering, setIsHovering] = useState(false);
  const CARD_WIDTH_MOBILE = 192; // w-48 (12rem * 16px = 192px)
  const CARD_WIDTH_SM = 320; // sm:w-80 (20rem * 16px = 320px)
  const CARD_GAP = 24; // gap-6 (1.5rem * 16px = 24px)
  const feature = data?.data ?? [];
  const NUM_UNIQUE_PRODUCTS = feature.length;

  // Use mobile card width for calculations
  const SCROLL_DISTANCE = -(CARD_WIDTH_MOBILE + CARD_GAP) * NUM_UNIQUE_PRODUCTS;
  const TOTAL_CONTAINER_WIDTH = (CARD_WIDTH_MOBILE + CARD_GAP) * NUM_UNIQUE_PRODUCTS * 3;

  if (isLoading) {
    return (
      <section className="max-w-[1440px] bg-white mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
        <h1 className="text-4xl font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
          Featured <span className="text-textorange">Products</span>
        </h1>
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-6 py-2">
            {[...Array(1)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-full bg-white mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
        <h1 className="text-4xl font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
          Featured <span className="text-textorange">Products</span>
        </h1>
        <ErrorState error={error} onRetry={refetch} />
      </section>
    );
  }

  const featuredProducts = data?.data ?? [];

  return (
    <section className="max-w-full bg-white mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
      <h1 className="text-4xl pb-10 justify-center font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
        Featured <span className='text-textorange'>Products</span>
      </h1>

      <div className="relative overflow-hidden w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex gap-6 py-2 animate-scroll-infinite"
          style={{
            animationPlayState: isHovering ? 'paused' : 'running',
            '--scroll-distance': `${SCROLL_DISTANCE}px`,
            '--scroll-duration': '25s',
            width: `${TOTAL_CONTAINER_WIDTH}px`
          } as React.CSSProperties}
        >
          {[...featuredProducts, ...featuredProducts, ...featuredProducts].map(
            (item, index) => {
              const { product } = item;
              if (!product) {
                return null;
              }
              const productImage = product.images?.[0] || { url: './rail-track.png', name: 'dummy data' };
              return (
                <article
                  key={`${item.documentId}-${index}`}
                  className="bg-white w-48 sm:w-80 rounded-xl md:rounded-2xl shadow-sm overflow-hidden flex-shrink-0 flex flex-col"
                >
                  <div className="flex justify-center h-40 md:h-60 relative">
                    <Image
                      src={productImage.url}
                      alt={productImage.name}
                      width={400}
                      height={240}
                      className="object-cover h-full w-full"
                    />
                    <h3 className="absolute text-sm md:text-lg font-bold bottom-1 left-2 z-10 text-white px-1 md:px-2 py-1 rounded-sm w-full text-left">
                      {product.title}
                    </h3>
                  </div>
                  <div className="pt-2 md:pt-4 flex flex-col flex-grow">
                    <div className="px-2 md:px-4 flex items-center space-x-1 mb-1 md:mb-2">
                      <StarRating rating={5} />
                      <span className="text-textblue text-xs md:text-sm">(0)</span>
                    </div>
                    <p className="px-2 md:px-4 text-textblue flex-grow text-xs md:text-sm font-medium leading-relaxed mb-3 md:mb-5 line-clamp-2 md:line-clamp-3">
                      {product.description}
                    </p>
                    <button
                      type="button"
                      className="w-full mt-auto rounded-xl md:rounded-2xl border px-2 md:px-4 py-2 md:py-3 font-bold text-sm md:text-lg transition-colors duration-600 hover:text-white"
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
          ).filter(Boolean)}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10">
        <Link href='/products'>
          <button className="group text-textblue transition-colors px-14 py-3 rounded-2xl text-[28px] font-normal flex items-center gap-2 font-raleway">
            <span className="text-[var(--textorange)] group-hover:text-[var(--textblue)]">Explore</span>
            <span className="text-[var(--textblue)] group-hover:text-[var(--textorange)]"> All</span>
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
        </Link>
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
          animation: scroll-infinite 7s linear infinite;
          width: calc((192px + 24px) * ${featuredProducts.length * 3});
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;