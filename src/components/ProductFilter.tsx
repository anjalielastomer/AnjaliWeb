"use client";
import React, { useState } from "react";

interface ProductCategory {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  products:ProductSpec[];
  updatedAt: string;
  publishedAt: string;
  
}
 interface ProductSpec {
  id: number;
  title: string;
  description: string;
  specification: string;
  documentId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}
interface ProductFilterProps {
  selectedCategory: string;
  selectedSegment: string;
  onCategoryChange: (category: string) => void;
  onSegmentChange: (segment: string) => void;
  categories: ProductCategory[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedCategory,
  selectedSegment,
  onCategoryChange,
  onSegmentChange,
  categories,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Segments = categories list
  const segments = [
    { name: "All Products", value: "all" },
    ...categories.map((category) => ({
      name: category.name,
      value: category.documentId,
      product:category.products,
    })),
  ];
// console.log("Segment Data: ",segments);
  const handleSegmentClick = (segmentValue: string) => {
    onSegmentChange(segmentValue);
    if (window.innerWidth < 768) setIsExpanded(false);
  };
  const handleCategoryClick = (categoryValue: string) => {
    onCategoryChange(categoryValue);
    if (window.innerWidth < 768) setIsExpanded(false);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="xl:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-lg shadow-sm p-3 flex items-center gap-2 border border-gray-200 relative z-10"
          style={{ backgroundColor: "var(--bgwhite)" }}
          type="button"
        >
          {/* ...SVG and label... */}
          <span
            className="text-sm font-medium"
            style={{ color: "var(--textblue)" }}
          >
            Filter by
          </span>
        </button>
        {/* Dropdown */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-80 rounded-lg shadow-lg border border-gray-200 bottom-full mb-2 p-4 transition-all duration-200 ${
            isExpanded
              ? "opacity-100 visible scale-100"
              : "opacity-0 invisible scale-105"
          }`}
          style={{
            backgroundColor: "var(--bgwhite)",
            maxWidth: "calc(100vw - 2rem)",
          }}
        >
          <h3
            className="text-lg font-semibold mb-4 text-center"
            style={{ color: "var(--textorange)" }}
          >
            Our Product Categories
          </h3>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="text-base font-medium cursor-pointer transition-colors py-2 px-2 rounded-md text-center  "
                style={{
                  color:
                    selectedSegment === segment.value
                      ? "var(--textorange)"
                      : "var(--textblue)",
                  backgroundColor:
                    selectedSegment === segment.value
                      ? "var(--bgcolour)"
                      : "transparent",
                }}
                onClick={() => handleSegmentClick(segment.value)}
              >
                {segment.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop Filter Sidebar */}
      <div
        className="hidden xl:block w-72 lg:w-80 rounded-[20px] shadow-xl p-4 lg:p-6 h-fit sticky top-8"
        style={{ backgroundColor: "var(--bgwhite)" }}
      >
        <h2
          className="text-[22px] leading-[28px] font-[500] font-monte mb-6 "
          style={{ color: "var(--textorange)" }}
        >
          Our Product Categories
        </h2>
        <div className="space-y-2 text-[18px] font-[500] font-monte leading-[28px]">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="text-base font-medium cursor-pointer transition-colors py-1 border-b border-gray-100 last:border-b-0"
              style={{
                color:
                  selectedSegment === segment.value
                    ? "var(--textorange)"
                    : "var(--textblue)",
              }}
              onClick={() => handleSegmentClick(segment.value)}
            >
              {segment.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
