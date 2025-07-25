"use client"
import React, { useState } from 'react'; // Import useState
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import products from '@/comstants/duumyProduct.json';

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
            fill={isFilled ? 'currentColor' : 'none'}
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

const FeaturedProducts: React.FC = () => {
  const router = useRouter();
  // State to track if any card is being hovered, for smooth animation pause
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="max-w-[1440px] bg-bgcolour mx-auto my-20 px-5 md:px-0 flex flex-col items-center font-monte">
      <h1 className="text-4xl font-bold text-textblue mb-6 flex gap-3 w-full font-raleway">
        Featured <span className='text-textorange'>Products</span>
      </h1>

      <div
        className="relative overflow-hidden w-full"
        // Add onMouseEnter and onMouseLeave to the container
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="flex gap-6 py-2 animate-scroll-infinite"
          // Conditionally set animationPlayState based on hover state
          style={{ animationPlayState: isHovering ? 'paused' : 'running' }}
        >
          {/* Repeat 3x for seamless effect with proper calculation */}
          {[...products, ...products, ...products].map(
            ({ id, name, image, rating, reviewCount, description }, index) => (
              <article
                key={`${id}-${index}`}
                className="bg-white w-96 sm:w-80 rounded-2xl shadow-sm overflow-hidden flex-shrink-0 flex flex-col"
              >
                <div className="flex justify-center h-80 md:h-60 flex-col items-center relative">
                  <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={240}
                    className="object-cover h-full"
                  />
                  <h3 className="absolute bottom-1 font-bold text-lg z-10 text-white px-4 py-1 rounded-sm w-full text-left">
                    {name}
                  </h3>
                </div>

                <div className="pt-4 flex flex-col flex-grow">
                  <div className="px-4 flex items-center space-x-1 mb-2">
                    <StarRating rating={rating} />
                    <span className="text-textblue text-sm">({reviewCount})</span>
                  </div>

                  <p className="px-4 text-textblue flex-grow text-sm font-medium leading-relaxed mb-5">
                    {description}
                  </p>

                  <button
                    type="button"
                    className="w-full mt-auto rounded-2xl border px-4 py-3 font-bold text-lg transition-colors duration-600 hover:text-white"
                    style={{
                      color: 'var(--textorange)',
                      borderColor: 'var(--textorange)'
                    }}
                    aria-label={`Explore product ${name}`}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'var(--textorange)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--textorange)';
                    }}
                    onClick={() => {
                      const productId = id || 1;
                      router.push(`/products/${productId}`);
                    }}
                  >
                    Explore Product
                  </button>
                </div>
              </article>
            )
          )}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10">
        <button className="group text-textblue transition-colors px-14 py-3 rounded-2xl text-[28px] font-normal flex items-center gap-2 font-raleway">
          <span className="text-textorange">Explore</span>
          <span className="text-textblue"> All</span>
          <Image src='/arrow.svg' alt='arrow' width={27} height={27} className="group-hover:hidden" />
          <Image src='/send.svg' alt='arrow' width={27} height={27} className="hidden group-hover:block" />
        </button>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            /* The width of one set of products (6 products * (width + gap)) */
            /* For sm:w-80 (320px) and gap-6 (24px) -> (320 + 24) * 6 = 344 * 6 = 2064px */
            /* For w-96 (384px) and gap-6 (24px) -> (384 + 24) * 6 = 408 * 6 = 2448px */
            /* Using a static pixel value that accommodates both or calculating dynamically is key */
            /* Let's adjust based on the sm:w-80 as the base for calculation */
            transform: translateX(calc(-1 * (var(--card-width) + var(--card-gap)) * ${products.length}));
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
          /* Adjusted width calculation for a more robust approach if card widths vary by breakpoint */
          /* Using CSS variables for width and gap for better maintainability */
          --card-width: 320px; /* Corresponds to sm:w-80 */
          --card-gap: 24px; /* Corresponds to gap-6 */

          /* If you consistently use w-96, update --card-width to 384px */
          /* If you need more precise responsive calculation, JS might be needed,
             but for now, assuming one fixed width for animation calculation. */
          width: calc((var(--card-width) + var(--card-gap)) * ${products.length} * 3);
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;