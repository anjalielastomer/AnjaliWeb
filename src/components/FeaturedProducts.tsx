"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import products from '@/comstants/duumyProduct.json'; // Assuming this path is correct
import Link from 'next/link'; // Make sure Link is imported

interface Product {
  id: number;
  name: string; // Assuming 'name' matches your JSON for product title
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  // If your JSON has 'documentId' and 'title' for the button/link, adjust accordingly
  // For now, assuming 'id' for link and 'name' for title/alt text
}


const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
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

// --- ProductSkeleton and ErrorState are not directly part of the error, but included for completeness ---
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
// --- End of ProductSkeleton and ErrorState ---


const FeaturedProducts: React.FC = () => {
  const router = useRouter();

const [isExploreAllHovered, setIsExploreAllHovered] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Define CSS variables in JS based on your data
  const CARD_WIDTH_SM = 320; // Corresponds to sm:w-80
  const CARD_GAP = 24; // Corresponds to gap-6 (0.5rem * 6 = 24px if 1rem=16px)
  const NUM_UNIQUE_PRODUCTS = products.length;
  const SCROLL_DISTANCE = -(CARD_WIDTH_SM + CARD_GAP) * NUM_UNIQUE_PRODUCTS; // Negative for left scroll
  const TOTAL_CONTAINER_WIDTH = (CARD_WIDTH_SM + CARD_GAP) * NUM_UNIQUE_PRODUCTS * 3; // 3 repetitions

  return (
    <section className="bg-bgcolour mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
      <h1 className="text-4xl pb-10 justify-center font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
        Featured <span className='text-textorange'>Products</span>
      </h1>

      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="flex gap-6 py-2 animate-scroll-infinite"
          style={{
            animationPlayState: isHovering ? 'paused' : 'running',
            '--scroll-distance': `${SCROLL_DISTANCE}px`, // Pass dynamic value as CSS variable
            '--scroll-duration': '25s', // Or calculate dynamically if needed
            width: `${TOTAL_CONTAINER_WIDTH}px` // Set dynamic width here
          } as React.CSSProperties} // Type assertion needed for custom CSS variables
        >
          {/* Repeat products twice for seamless effect */}
          {[...products, ...products, ...products].map(
            (product, index) => ( // Use 'product' as the item name for clarity
              <article
                key={`${product.id}-${index}`} // Use product.id for key, add index for duplicates
                className="bg-white w-96 sm:w-80 rounded-2xl shadow-sm overflow-hidden flex-shrink-0 flex flex-col"
              >
                <div className="flex justify-center h-80 md:h-60 flex-col items-center relative">
                  <Image
                    src={product.image} // Use product.image
                    alt={product.name} // Use product.name
                    width={400}
                    height={240}
                    className="object-cover h-full"
                  />
                  <h3 className="absolute bottom-1 font-bold text-lg z-10 text-white px-4 py-1 rounded-sm w-full text-left">
                    {product.name} {/* Use product.name */}
                  </h3>
                </div>

                <div className="pt-4 flex flex-col flex-grow">
                  <div className="px-4 flex items-center space-x-1 mb-2">
                    <StarRating rating={product.rating} /> {/* Use product.rating */}
                    <span className="text-textblue text-sm">({product.reviewCount})</span> {/* Use product.reviewCount */}
                  </div>

                  <p className="px-4 text-textblue flex-grow text-sm font-medium leading-relaxed mb-5">
                    {product.description} {/* Use product.description */}
                  </p>

                  <button
                    type="button"
                    className="w-full mt-auto rounded-2xl border px-4 py-3 font-bold text-lg transition-colors duration-600 hover:text-white"
                    style={{
                      color: "var(--textorange)",
                      borderColor: "var(--textorange)",
                    }}
                    aria-label={`Explore product ${product.name}`} // Use product.name
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
                      router.push(`/products/${product.id}`) // Use product.id
                    }
                  >
                    Explore Product
                  </button>
                </div>
              </article>
            )
          )}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-15 ">
        <Link
          href='/products'
          className="group transition-colors px-14 py-3 rounded-2xl text-[28px] font-normal flex items-center gap-2 font-raleway"
          onMouseEnter={() => setIsExploreAllHovered(true)} // Set state on hover
          onMouseLeave={() => setIsExploreAllHovered(false)} // Reset state on mouse leave
        >
          <span
            className="transition-colors duration-300" // Keep transition for smoothness
            style={{
              // If hovered, 'Explore' becomes --textblue, else --textorange
              color: isExploreAllHovered ? 'var(--textblue)' : 'var(--textorange)'
            } as React.CSSProperties}
          >
            Explore
          </span>
          <span
            className="transition-colors duration-300" // Keep transition for smoothness
            style={{
              // If hovered, 'All' becomes --textorange, else --textblue
              color: isExploreAllHovered ? 'var(--textorange)' : 'var(--textblue)'
            } as React.CSSProperties}
          >
            All
          </span>
          <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
          <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
        </Link>
      </div>

      {/* The style jsx block remains for the animation keyframe and class */}
      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--scroll-distance)); /* Uses the CSS variable */
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite var(--scroll-duration) linear infinite;
          width: var(--calculated-width); /* Uses the CSS variable */
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;