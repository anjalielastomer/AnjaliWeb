"use client"
import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/products/page';

interface ProductCardProps {
  product: Product;
}

// Helper: Generate star rating icons with SVG
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-0.5">
      {[...Array(totalStars)].map((_, i) => {
        const fill =
          i + 1 <= rating
            ? 'currentColor'
            : i + 0.5 === rating
              ? 'url(#half)'
              : 'none';
        const isHalfStar = i + 0.5 === rating;
        return (
          <svg
            key={i}
            className="w-4 h-4 text-orange-500 flex-shrink-0"
            fill={fill}
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isHalfStar ? (
              <>
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half)"
                  d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z"
                />
              </>
            ) : (
              <path
                fill={i + 1 <= rating ? 'currentColor' : 'none'}
                stroke="currentColor"
                d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 
                  8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, image, rating, reviewCount, description } = product;

  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-center h-60 flex-col items-center relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={240}
          className="object-cover h-full w-full"
        />
        <h3 className="absolute bottom-1 left-6 font-semibold z-10 text-white px-2 py-1 rounded-sm w-full text-left">
          {name}
        </h3>
      </div>

      <div className="pt-4 flex flex-col flex-grow">
        <div className="px-4 flex items-center space-x-1 mb-2">
          <StarRating rating={rating} />
          <span className="text-gray-600 text-sm">({reviewCount})</span>
        </div>

        <p className="px-4 text-gray-700 flex-grow text-sm leading-relaxed mb-5">
          {description}
        </p>

        <button
          type="button"
          className="w-full mt-auto rounded-2xl border border-orange-500 px-4 py-3 font-semibold text-orange-600 active:bg-orange-100 transition-colors duration-600 hover:bg-orange-500 hover:text-white"
          aria-label={`Explore product ${name}`}
          onClick={() => alert(`Exploring product: ${name}`)}
        >
          Explore Product
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
