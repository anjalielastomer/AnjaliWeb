"use client"
import React, { useState } from 'react';

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
  const [isExpanded, setIsExpanded] = useState(false);

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
    // Close the filter on mobile after selection
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  };

  const getSelectedSegmentName = () => {
    const segmentMap: Record<string, string> = {
      'all': 'All Products',
      'railway-metro-coach-products': 'Railway/Metro Coach',
      'railway-metro-track-products': 'Railway/Metro Track',
      'brake-shoe-brake-pad-products': 'Brake Shoe/Brake Pad',
      'steel-casting-products': 'Steel-Casting',
      'rolling-mill-products': 'Rolling Mill',
      'other-products': 'Other Products',
    };
    return segmentMap[selectedSegment] || 'All Products';
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full rounded-lg shadow-sm p-4 flex justify-between items-center border border-gray-200"
          style={{ backgroundColor: 'var(--bgwhite)' }}
        >
          <div>
            <span className="text-sm text-gray-500">Filter by:</span>
            <div className="font-medium" style={{ color: 'var(--textblue)' }}>
              {getSelectedSegmentName()}
            </div>
          </div>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        {isExpanded && (
          <div 
            className="absolute z-50 w-full rounded-lg shadow-lg border border-gray-200 mt-2 p-4"
            style={{ backgroundColor: 'var(--bgwhite)' }}
          >
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--textorange)' }}
            >
              Our Product Segments
            </h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="text-base font-medium cursor-pointer transition-colors py-2 px-2 rounded-md"
                  style={{
                    color: (segment === 'All Products' && selectedSegment === 'all') ||
                           (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-'))
                      ? 'var(--textorange)'
                      : 'var(--textblue)',
                    backgroundColor: (segment === 'All Products' && selectedSegment === 'all') ||
                                   (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-'))
                      ? 'var(--bgcolour)'
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!((segment === 'All Products' && selectedSegment === 'all') ||
                          (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-')))) {
                      e.currentTarget.style.color = 'var(--textorange)';
                      e.currentTarget.style.backgroundColor = 'var(--bgcolour)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!((segment === 'All Products' && selectedSegment === 'all') ||
                          (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-')))) {
                      e.currentTarget.style.color = 'var(--textblue)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                  onClick={() => handleSegmentClick(segment)}
                >
                  {segment}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Filter Sidebar */}
      <div 
        className="hidden md:block w-72 lg:w-80 rounded-lg shadow-sm p-4 lg:p-6 h-fit sticky top-8"
        style={{ backgroundColor: 'var(--bgwhite)' }}
      >
        <h2 
          className="text-xl font-semibold mb-6"
          style={{ color: 'var(--textorange)' }}
        >
          Our Product Segments
        </h2>

        <div className="space-y-4">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="text-base font-medium cursor-pointer transition-colors py-2 border-b border-gray-100 last:border-b-0"
              style={{
                color: (segment === 'All Products' && selectedSegment === 'all') ||
                       (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-'))
                  ? 'var(--textorange)'
                  : 'var(--textblue)'
              }}
              onMouseEnter={(e) => {
                if (!((segment === 'All Products' && selectedSegment === 'all') ||
                      (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-')))) {
                  e.currentTarget.style.color = 'var(--textorange)';
                }
              }}
              onMouseLeave={(e) => {
                if (!((segment === 'All Products' && selectedSegment === 'all') ||
                      (segment !== 'All Products' && selectedSegment === segment.toLowerCase().replace(/\s+/g, '-').replace('/', '-')))) {
                  e.currentTarget.style.color = 'var(--textblue)';
                }
              }}
              onClick={() => handleSegmentClick(segment)}
            >
              {segment}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
