"use client";
import React, { useState, useMemo } from "react";
import ProductCard from "@/components/SampleCard";
import { useProducts, transformStrapiProduct } from "@/hooks/useProducts";

interface ProductCategory {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  products: ProductSpec[];
  updatedAt: string;
  publishedAt: string;
}

interface ProductSpec {
  id: number;
  title: string;
  description: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
    };
  }[];
}

interface ProductGridProps {
  selectedCategory: string;
  selectedSegment: string;
  categories: ProductCategory[];
}

const ProductGrid: React.FC<ProductGridProps> = ({
  selectedCategory,
  selectedSegment,
  categories,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const { data, isLoading, error, refetch } = useProducts({
    page: currentPage,
    pageSize: productsPerPage,
    segment: selectedSegment,
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

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSegment]);

  // ✅ Get products from selected category if not "all"
  const selectedCategoryObj = useMemo(() => {
    return categories.find((cat) => cat.documentId === selectedSegment);
  }, [selectedSegment, categories]);

  // `useProducts` already filters by `selectedSegment` server-side and returns
  // fully-transformed products (with a resolved `image` url). The old branch
  // used `selectedCategoryObj.products` from the category join instead — but
  // that join returns each product's `images` as bare numeric IDs, not
  // populated objects, so ProductCard received an empty image src. Always use
  // the transformed, segment-filtered products.
  const categoryProducts = useMemo<any[]>(
    () => transformedProducts,
    [transformedProducts]
  );


  const getCurrentCategoryName = () => {
    if (selectedSegment === "all") {
      return "All Products";
    } else {
      return selectedCategoryObj?.name || "Products";
    }
  };

  if (isLoading) {
    return (
      <div className="flex-1 relative">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--textblue)]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 relative">
        <div className="text-center py-12">
          <p className="text-lg text-red-600 mb-4">
            Error loading products: {(error as Error).message}
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-[var(--textblue)] text-white rounded hover:bg-[var(--textorange)]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 relative">
      <div className="mb-6">
        <h2
          className="text-2xl font-semibold"
          style={{ color: "var(--textblue)" }}
        >
          {getCurrentCategoryName()}
        </h2>
      </div>

      <div
        className="h-[calc(100vh+250px)] overflow-y-auto pr-4 mr-2"
        style={{
          scrollbarWidth: "inherit",
          scrollbarColor: "var(--textorange) #f3f4f6",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: "var(--textcolour)" }}>
              No products found in {getCurrentCategoryName().toLowerCase()}.
            </p>
          </div>
        )}
      </div>

      {selectedSegment === "all" && totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 px-4 text-sm text-gray-700 font-monte">
          <button
            className="text-textblue font-semibold disabled:text-gray-700 disabled:opacity-50 text-lg"
            onClick={handlePrevPage}
            disabled={currentPage === 1 || isLoading}
          >
            &lt; Previous Page
          </button>

          <span className="text-[#193055] font-medium">
            {currentPage} of {totalPages}
          </span>

          <button
            className="text-textblue font-semibold disabled:text-gray-700 disabled:opacity-50 text-lg"
            onClick={handleNextPage}
            disabled={currentPage === totalPages || isLoading}
          >
            Next Page &gt;
          </button>
        </div>
      )}

      <div className="text-center mt-7 text-lg text-textblue font-monte">
        Showing {categoryProducts.length} of{" "}
        {selectedSegment === "all" ? totalProducts : categoryProducts.length}{" "}
        products
        {selectedSegment !== "all" && (
          <span
            className="text-sm block mt-1"
            style={{ color: "var(--textcolour)" }}
          >
            in {getCurrentCategoryName()}
          </span>
        )}
      </div>

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
