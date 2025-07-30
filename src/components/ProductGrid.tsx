"use client";
import React, { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { useProducts, transformStrapiProduct } from "@/hooks/useProducts";

interface ProductGridProps {
  selectedCategory: string;
  selectedSegment: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  selectedCategory,
  selectedSegment,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Updated to use segment as primary filter
  const { data, isLoading, error, refetch } = useProducts({
    page: currentPage,
    pageSize: productsPerPage,
    segment: selectedSegment, // Use segment instead of category
  });

  const transformedProducts = useMemo(() => {
    if (!data?.data) return [];
    return data.data.map(transformStrapiProduct);
  }, [data]);

  const totalPages = data?.meta?.pagination?.pageCount || 0;
  const totalProducts = data?.meta?.pagination?.total || 0;

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSegment]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex-1 relative">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex-1 relative">
        <div className="text-center py-12">
          <p className="text-lg text-red-600 mb-4">
            Error loading products: {(error as Error).message}
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 relative">
      {/* Scrollable Container */}
      <div
        className="h-[calc(100vh + 600px)] overflow-y-auto pr-4 mr-2"
        style={{
          scrollbarWidth: "inherit",
          scrollbarColor: "var(--textorange) #f3f4f6",
        }}
      >
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {transformedProducts.map((product) => (
            <ProductCard
              
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* No Products Message */}
        {transformedProducts.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: "var(--textcolour)" }}>
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 px-4 text-sm text-gray-700 font-monte">
          <button
            className="text-textblue font-semibold disabled:text-gray-700 disabled:opacity-50"
            onClick={handlePrevPage}
            disabled={currentPage === 1 || isLoading}
          >
            &lt; Previous Page
          </button>

          <span className="text-[#193055] font-medium">
            {currentPage} of {totalPages}
          </span>

          <button
            className="text-textblue font-semibold disabled:text-gray-700 disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages || isLoading}
          >
            Next Page &gt;
          </button>
        </div>
      )}

      {/* Product count info */}
      <div className="text-center mt-2 text-lg text-textblue font-monte">
        Showing {transformedProducts.length} of {totalProducts} products
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
