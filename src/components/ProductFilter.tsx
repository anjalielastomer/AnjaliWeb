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
      {/* Mobile Filter Button - positioned at bottom center */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <button
          onClick={() => {
            console.log('Button clicked! Current state:', isExpanded);
            setIsExpanded(!isExpanded);
          }}
          className="rounded-lg shadow-sm p-3 flex items-center gap-2 border border-gray-200 relative z-10"
          style={{ backgroundColor: 'var(--bgwhite)' }}
          type="button"
        >
          <svg
            className="w-5 h-5"
            style={{ color: 'var(--textorange)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="text-sm font-medium" style={{ color: 'var(--textblue)' }}>
            Filter by
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            style={{ color: 'var(--textblue)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile Dropdown - positioned above the button */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 w-80 rounded-lg shadow-lg border border-gray-200 bottom-full mb-2 p-4 transition-all duration-200 ${
            isExpanded ? 'opacity-100 visible transform -translate-x-1/2 scale-100' : 'opacity-0 invisible transform -translate-x-1/2 scale-105'
          }`}
          style={{ 
            backgroundColor: 'var(--bgwhite)',
            maxWidth: 'calc(100vw - 2rem)'
          }}
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
