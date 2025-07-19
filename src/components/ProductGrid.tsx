"use client";
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

  const filteredProducts = useMemo(() => {
    if (selectedSegment === 'all') {
      return allProducts;
    }
    return allProducts.filter((product) => product.segment === selectedSegment);
  }, [selectedSegment]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex-1 relative">
      {/* Scrollable Container */}
      <div 
        className="h-[calc(100vh-300px)] overflow-y-auto pr-4 mr-2"
        style={{
          scrollbarWidth: 'inherit',
          scrollbarColor: 'var(--textorange) #f3f4f6'
        }}
      >
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: 'var(--textcolour)' }}>
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 px-4 text-sm text-gray-700 font-monte">
        <button 
          className="text-textblue font-semibold disabled:text-gray-700 disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt; Previous Page
        </button>

        <span className="text-[#193055] font-medium">
          {currentPage}
        </span>

        <button 
          className="text-textblue font-semibold disabled:text-gray-700 disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next Page &gt;
        </button>
      </div>

      {/* Custom Scrollbar */}
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
