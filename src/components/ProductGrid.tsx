"use client"
import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/app/products/page';
import dummyProducts from '@/comstants/duumyProduct.json';

interface ProductGridProps {
  selectedCategory: string;
  selectedSegment: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  selectedSegment,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const allProducts: Product[] = dummyProducts;

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
