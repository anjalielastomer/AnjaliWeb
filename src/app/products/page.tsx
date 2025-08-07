"use client";
import React, { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import ProductFilter from "@/components/ProductFilter";
import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";
import { useCategory } from "@/hooks/useCategory";

interface ProductCategory {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSegment, setSelectedSegment] = useState<string>("all");
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState<boolean>(false);

  const { categories, loading } = useCategory();
  const { data: productsData } = useProducts({
    segment: selectedSegment,
    pageSize: 1000,
  });

  const getSegmentDisplayName = (segment: string) => {
    if (segment === "all") return "All Products";
    const category = categories.find(
      (cat) =>
        cat.documentId === segment ||
        cat.name.toLowerCase().replace(/\s+/g, "-") === segment
    );
    return category ? category.name : "Products";
  };

  const productCount = productsData?.meta?.pagination?.total || 0;

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-2xl" style={{ color: "var(--textblue)" }}>
          Loading products...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "var(--bgwhite)" }}>
      <div className="container mx-auto px-4 py-8 mb-3">
        <div className="mb-4">
          <div className="flex lg:justify-end mb-6">
            <h1 className="text-4xl font-bold font-raleway" style={{ color: "var(--textblue)" }}>
              Our <span style={{ color: "var(--textorange)" }}>Products</span>
            </h1>
          </div>

          <div
            className="w-screen h-px mb-8 relative left-1/2 right-1/2 -translate-x-1/2"
            style={{ backgroundColor: "var(--textblue)", opacity: "0.1" }}
          ></div>
        </div>

        <div className="flex justify-center gap-10 flex-wrap">
          {/* Sidebar for Desktop */}
          <ProductFilter
            selectedCategory={selectedCategory}
            selectedSegment={selectedSegment}
            onCategoryChange={setSelectedCategory}
            onSegmentChange={setSelectedSegment}
            categories={categories}
            isVisible={true} // always visible for desktop sidebar
            mode="sidebar"
          />

          {/* Main Content */}
          <div className="flex flex-col w-full lg:w-[65%]">
            {/* Breadcrumb */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <nav className="flex" aria-label="Breadcrumb">
                  <ol
                    className="flex items-center space-x-2 text-[18px] font-[500] font-monte"
                    style={{ color: "var(--textcolour)" }}
                  >
                    <li>
                      <span
                        className="cursor-pointer transition-colors"
                        style={{ color: "var(--textcolour)" }}
                        onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--textorange)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--textcolour)")
                        }
                      >
                        Products
                      </span>
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
                className="text-[18px] font-[500] font-monte text-[#19305540]"
                style={{ color: "var(--textcolour)" }}
              >
                {productCount} Products
              </div>
            </div>

            {/* Filter above products only on mobile */}
            <div className="block xl:hidden mb-4">
              {isMobileFilterVisible && (
                <ProductFilter
                  selectedCategory={selectedCategory}
                  selectedSegment={selectedSegment}
                  onCategoryChange={setSelectedCategory}
                  onSegmentChange={setSelectedSegment}
                  categories={categories}
                  isVisible={true}
                  mode="mobile"
                />
              )}
            </div>

            {/* Product Grid */}
            <ProductGrid
              selectedCategory={selectedCategory}
              selectedSegment={selectedSegment}
              categories={categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
