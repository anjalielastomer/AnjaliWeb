"use client";
import React from "react";

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
  isVisible?: boolean;
  mode?: "mobile" | "sidebar";
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedCategory,
  selectedSegment,
  onCategoryChange,
  onSegmentChange,
  categories,
  isVisible = false,
  mode = "sidebar",
}) => {
  const segments = [
    { name: "All Products", value: "all" },
    ...categories.map((category) => ({
      name: category.name,
      value: category.documentId,
      product:category.products,
    })),
  ];
  const [isExpanded, setIsExpanded] = React.useState(true);
// console.log("Segment Data: ",segments);
  const handleSegmentClick = (segmentValue: string) => {
    onSegmentChange(segmentValue);
  };
  const handleCategoryClick = (categoryValue: string) => {
    onCategoryChange(categoryValue);
    if (window.innerWidth < 768) setIsExpanded(false);
  };

  if (mode === "mobile") {
    return (
      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="rounded-lg shadow-md p-4"
          style={{ backgroundColor: "var(--bgwhite)" }}
        >
          <h3
            className="text-lg font-semibold mb-4 text-center"
            style={{ color: "var(--textorange)" }}
          >
            Our Product Categories
          </h3>
          <div className="space-y-3 max-h-60 overflow-y-auto text-center">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="text-base font-medium cursor-pointer transition-colors py-2 px-2 rounded-md"
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
    );
  }

  // Sidebar (desktop)
  return (
    <div
      className="hidden xl:block w-72 lg:w-80 rounded-[20px] shadow-xl p-4 lg:p-6 h-fit sticky top-8"
      style={{ backgroundColor: "var(--bgwhite)" }}
    >
      <h2
        className="text-[22px] leading-[28px] font-[500] font-monte mb-6"
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
  );
};

export default ProductFilter;
