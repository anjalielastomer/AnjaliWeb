"use client"
import React, { useState, useMemo } from 'react';
import ProductGrid from '@/components/ProductGrid';
import ProductFilter from '@/components/ProductFilter';
import Link from 'next/link';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  segment: string;
}

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSegment, setSelectedSegment] = useState<string>('all');

  // Function to get display name for breadcrumb
  const getSegmentDisplayName = (segment: string) => {
    const segmentMap: Record<string, string> = {
      'all': 'All Products',
      'railway-metro-coach-products': 'Railway/Metro Coach',
      'railway-metro-track-products': 'Railway/Metro Track',
      'brake-shoe-brake-pad-products': 'Brake Shoe/Brake Pad',
      'steel-casting-products': 'Steel-Casting',
      'rolling-mill-products': 'Rolling Mill',
      'other-products': 'Other Products',
    };
    return segmentMap[segment] || 'Products';
  };

  // Get product count for selected segment
  const getProductCount = useMemo(() => {
    // This would normally come from your product data
    const productCounts: Record<string, number> = {
      'all': 12,
      'railway-metro-coach-products': 3,
      'railway-metro-track-products': 2,
      'brake-shoe-brake-pad-products': 2,
      'steel-casting-products': 2,
      'rolling-mill-products': 2,
      'other-products': 1,
    };
    return productCounts[selectedSegment] || 0;
  }, [selectedSegment]);

  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Main Header */}
        <div className="mb-4">
          <div className="flex lg:justify-end justify-center px-15 mb-6">
            <h1
              className="text-4xl font-bold"
              style={{ color: "var(--textblue)" }}
            >
              Our <span style={{ color: "var(--textorange)" }}>Products</span>
            </h1>
          </div>
          {/* Horizontal Bar */}
          <div
            className="w-full h-px mb-8"
            style={{ backgroundColor: "var(--textblue)", opacity: "0.1" }}
          ></div>
        </div>

        {/* Breadcrumb and Product Count Section */}
        <div className='flex justify-center gap-10 flex-wrap'>
          <ProductFilter
            selectedCategory={selectedCategory}
            selectedSegment={selectedSegment}
            onCategoryChange={setSelectedCategory}
            onSegmentChange={setSelectedSegment}
          />
          <div className="flex gap- flex-col w-auto lg:w-[65%] ">
            <div className="flex justify-between items-center mb-8">
              <div>
                {/* Dynamic Breadcrumb */}
                <nav className="flex" aria-label="Breadcrumb">
                  <ol
                    className="flex items-center space-x-2 text-[18px] font-[500] font-monte"
                    style={{ color: "var(--textcolour)" }}
                  >
                    <li>
                      <Link
                        href="/"
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
                      <span style={{ color: "var(--textblue)" }}>
                        {getSegmentDisplayName(selectedSegment)}
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>

              <div
                className="text-[18px] font-[500] font-monte text-[#19305540] "
                style={{ color: "var(--textcolour)" }}
              >
                {getProductCount} Products
              </div>
            </div>
            <ProductGrid
              selectedCategory={selectedCategory}
              selectedSegment={selectedSegment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
