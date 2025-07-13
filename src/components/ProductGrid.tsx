"use client"
import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/app/products/page';

interface ProductGridProps {
  selectedCategory: string;
  selectedSegment: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  selectedSegment,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Air Spring',
      description: 'Enclosed pressurised air in a predefined chamber called air spring, made up of rubber and textile',
      image: '/featuredproductsimg1.png',
      rating: 5,
      reviewCount: 156,
      category: 'suspension',
      segment: 'railway-metro-coach-products',
    },
    {
      id: 2,
      name: 'Axile Brake Disc',
      description: 'The brake pad or shoe with the friction lining is pushed against the rotating drill.',
      image: '/featuredproductsimg2.png',
      rating: 4,
      reviewCount: 174,
      category: 'brake',
      segment: 'brake-shoe-brake-pad-products',
    },
    {
      id: 3,
      name: 'Bolts & Nuts',
      description: 'A fastener is used for joining, holding or assembling of a single or multiple components.',
      image: '/featuredproductsimg3.png',
      rating: 3,
      reviewCount: 43,
      category: 'fasteners',
      segment: 'other-products',
    },
    {
      id: 4,
      name: 'Brake Shoe Pad',
      description: 'Found in disc brake systems, brake pads are a flat piece of steel with a thick friction material.',
      image: '/featuredproductsimg4.png',
      rating: 5,
      reviewCount: 193,
      category: 'brake',
      segment: 'brake-shoe-brake-pad-products',
    },
    {
      id: 5,
      name: 'Railway Coupling',
      description: 'Heavy-duty coupling system for railway coaches and metro systems.',
      image: '/featuredproductsimg1.png',
      rating: 4.5,
      reviewCount: 89,
      category: 'fasteners',
      segment: 'railway-metro-coach-products',
    },
    {
      id: 6,
      name: 'Track Fastener',
      description: 'Specialized fastening system for railway track maintenance and installation.',
      image: '/featuredproductsimg3.png',
      rating: 4,
      reviewCount: 67,
      category: 'fasteners',
      segment: 'railway-metro-track-products',
    },
    {
      id: 7,
      name: 'Steel Cast Bearing',
      description: 'High-quality steel cast bearing for industrial applications.',
      image: '/featuredproductsimg2.png',
      rating: 5,
      reviewCount: 234,
      category: 'engine',
      segment: 'steel-casting-products',
    },
    {
      id: 8,
      name: 'Rolling Mill Roller',
      description: 'Precision-engineered roller for rolling mill operations.',
      image: '/featuredproductsimg4.png',
      rating: 4.5,
      reviewCount: 145,
      category: 'transmission',
      segment: 'rolling-mill-products',
    },
    {
      id: 9,
      name: 'Metro Suspension System',
      description: 'Advanced suspension system for metro coach applications.',
      image: '/featuredproductsimg1.png',
      rating: 4,
      reviewCount: 98,
      category: 'suspension',
      segment: 'railway-metro-coach-products',
    },
    {
      id: 10,
      name: 'Track Rail Clamp',
      description: 'Heavy-duty rail clamp for track installation and maintenance.',
      image: '/featuredproductsimg2.png',
      rating: 5,
      reviewCount: 287,
      category: 'track',
      segment: 'railway-metro-track-products',
    },
    {
      id: 11,
      name: 'Steel Cast Wheel',
      description: 'Precision steel cast wheel for railway applications.',
      image: '/featuredproductsimg3.png',
      rating: 4,
      reviewCount: 156,
      category: 'wheel',
      segment: 'steel-casting-products',
    },
    {
      id: 12,
      name: 'Rolling Mill Guide',
      description: 'Guide system for rolling mill operations and maintenance.',
      image: '/featuredproductsimg4.png',
      rating: 4.5,
      reviewCount: 123,
      category: 'guide',
      segment: 'rolling-mill-products',
    },
  ];

  // Filter products based on selected segment only
  const filteredProducts = useMemo(() => {
    if (selectedSegment === 'all') {
      return allProducts;
    }
    return allProducts.filter((product) => product.segment === selectedSegment);
  }, [selectedSegment]);

  // For scrollable version, show all products without pagination
  const currentProducts = filteredProducts;

  return (
    <div className="flex-1 relative">
      {/* Custom Scrollable Container */}
      <div 
        className="h-[calc(100vh-300px)] overflow-y-auto pr-4 mr-2"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--textorange) #f3f4f6'
        }}
      >
          

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: 'var(--textcolour)' }}>
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Custom CSS for webkit scrollbar styling */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        
        div::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: var(--textorange);
          border-radius: 3px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: var(--textorange);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;
