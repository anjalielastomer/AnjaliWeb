"use client"
import React from 'react';

interface ProductFilterProps {
  selectedCategory: string;
  selectedSegment: string;
  onCategoryChange: (category: string) => void;
  onSegmentChange: (segment: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedCategory,
  selectedSegment,
  onCategoryChange,
  onSegmentChange,
}) => {
  const segments = [
    'All Products',
    'Railway/Metro Coach Products',
    'Railway/Metro Track Products',
    'Brake Shoe/Brake Pad Products',
    'Steel-Casting Products',
    'Rolling Mill Products',
    'Other Products',
  ];

  const handleSegmentClick = (segment: string) => {
    if (segment === 'All Products') {
      onSegmentChange('all');
    } else {
      onSegmentChange(segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-'));
    }
  };

  return (
    <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit sticky top-8">
      <h2 className="text-xl font-semibold text-textorange mb-6">
        Our Product Segments
      </h2>

      <div className="space-y-4">
        {segments.map((segment, index) => (
          <div
            key={index}
            className={`text-base font-medium cursor-pointer transition-colors py-2 border-b border-gray-100 last:border-b-0 ${
              (segment === 'All Products' && selectedSegment === 'all') ||
              (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-'))
                ? 'text-textorange'
                : 'text-textblue hover:text-textorange'
            }`}
            onClick={() => handleSegmentClick(segment)}
          >
            {segment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
