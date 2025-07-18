"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import EnquiryModal from '@/components/EnquiryModal';
import BuyNowModal from '@/components/BuyNowModal';
import dummyProducts from '@/comstants/duumyProduct.json';

// Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  segment: string;
  price?: string;
  inStock?: boolean;
  keyFeatures?: string[];
  longDescription?: string;
  images?: string[];
}

const SingleProductPage: React.FC = () => {
  const params = useParams();
  const productId = params.id as string;
  
  // State for selected image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);

  // Find the product from dummy data based on ID
  const product = dummyProducts.find(p => p.id === parseInt(productId)) || dummyProducts[0];
  
  // Fallback data for products without extended information
  const fallbackProduct = {
    ...product,
    price: product.price || '$999',
    inStock: product.inStock !== undefined ? product.inStock : true,
    keyFeatures: product.keyFeatures || [
      'High-quality construction',
      'Durable materials',
      'Easy installation',
      'Cost-effective solution',
      'Reliable performance'
    ],
    longDescription: product.longDescription || `${product.description}\n\nThis product represents quality engineering and reliable performance in ${product.category} applications. Designed to meet industry standards and provide long-lasting service in demanding environments.`,
    images: product.images || [product.image, product.image, product.image]
  };

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Delhi Metro Rail Corporation',
      rating: 5,
      date: '2024-12-15',
      comment: 'Excellent air spring system! We have been using these for our metro coaches for over 2 years now. The build quality is outstanding and they have significantly improved ride comfort for passengers. Highly recommended for metro applications.'
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      company: 'Indian Railways',
      rating: 4,
      date: '2024-11-28',
      comment: 'Good quality product from AKTAS Turkey. Installation was straightforward and the performance has been reliable. The only minor issue was the delivery time which was slightly longer than expected, but overall satisfied with the purchase.'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      company: 'Mumbai Metro One',
      rating: 5,
      date: '2024-11-10',
      comment: 'Outstanding performance in our metro systems. The air springs have shown excellent durability even under heavy usage. Customer support was also very responsive when we had technical queries during installation.'
    },
    {
      id: 4,
      name: 'David Chen',
      company: 'Kolkata Metro Railway',
      rating: 4,
      date: '2024-10-22',
      comment: 'These air springs have been performing well in our fleet. The ride quality improvement is noticeable and maintenance requirements are minimal. Good value for money considering the quality and performance.'
    },
    {
      id: 5,
      name: 'Amit Patel',
      company: 'Chennai Metro Rail',
      rating: 5,
      date: '2024-10-05',
      comment: 'Exceptional product quality! We have installed these in multiple coaches and the consistency in performance is remarkable. The technical specifications match exactly what was promised. Will definitely order more for our expansion project.'
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      company: 'Bangalore Metro',
      rating: 4,
      date: '2024-09-18',
      comment: 'Solid air spring system with good build quality. The installation process was smooth with the provided documentation. Performance has been stable over the past 8 months of operation.'
    },
    {
      id: 7,
      name: 'Vikram Singh',
      company: 'Noida Metro Rail',
      rating: 5,
      date: '2024-09-03',
      comment: 'Impressed with the quality and performance. These air springs have exceeded our expectations in terms of durability and passenger comfort. The technical team at AKTAS was very helpful during the procurement process.'
    },
    {
      id: 8,
      name: 'Lisa Wang',
      company: 'Hyderabad Metro',
      rating: 4,
      date: '2024-08-20',
      comment: 'Good quality air springs that deliver on their promises. The comfort level for passengers has definitely improved since installation. Minor feedback would be to improve the packaging for international shipments.'
    }
  ];

  // Mock specifications data
  const specifications = [
    {
      category: 'Technical Specifications',
      items: [
        { label: 'Operating Temperature Range', value: '-40°C to +70°C (-40°F to +158°F)' },
        { label: 'Maximum Load Capacity', value: '12,000 kg (26,455 lbs) per unit' },
        { label: 'Working Pressure Range', value: '2.5 - 8.5 bar (36 - 123 psi)' },
        { label: 'Deflection Range', value: '80 - 180 mm (3.15 - 7.09 inches)' },
        { label: 'Natural Frequency', value: '1.2 - 2.8 Hz' },
        { label: 'Service Life', value: '2,000,000+ cycles minimum' }
      ]
    },
    {
      category: 'Material Construction',
      items: [
        { label: 'Rubber Material', value: 'High-grade Natural/Synthetic Rubber Blend' },
        { label: 'Textile Reinforcement', value: 'Multi-layer Polyester/Nylon Cord Fabric' },
        { label: 'End Plates', value: 'Forged Steel, Zinc-plated' },
        { label: 'Sealing Elements', value: 'Weather-resistant EPDM Rubber' },
        { label: 'Hardware', value: 'Stainless Steel Grade 316L' }
      ]
    },
    {
      category: 'Performance Characteristics',
      items: [
        { label: 'Vibration Isolation', value: '≥95% at resonance frequency' },
        { label: 'Lateral Stability', value: '±15mm displacement tolerance' },
        { label: 'Vertical Stiffness', value: '150-800 N/mm (variable)' },
        { label: 'Lateral Stiffness', value: '50-200 N/mm (variable)' },
        { label: 'Damping Coefficient', value: '0.05 - 0.15' },
        { label: 'Fatigue Resistance', value: 'Class A (per EN 13913 standard)' }
      ]
    },
    {
      category: 'Installation & Compatibility',
      items: [
        { label: 'Mounting Configuration', value: 'Horizontal/Vertical orientation' },
        { label: 'Coach Types', value: 'Metro, LRT, Heavy Rail, Tram' },
        { label: 'Installation Time', value: '2-4 hours per bogie' },
        { label: 'Maintenance Interval', value: '100,000 km or 12 months' },
        { label: 'Replacement Parts', value: 'Available with 48-hour delivery' }
      ]
    },
    {
      category: 'Quality & Compliance',
      items: [
        { label: 'Quality Standards', value: 'ISO 9001:2015, ISO 14001:2015' },
        { label: 'Railway Standards', value: 'EN 13913, UIC 518, AAR M-976' },
        { label: 'Fire Safety', value: 'EN 45545-2 HL3 compliant' },
        { label: 'Environmental', value: 'RoHS compliant, Recyclable materials' },
        { label: 'Testing', value: 'Factory acceptance testing included' },
        { label: 'Warranty', value: '24 months or 200,000 km operation' }
      ]
    }
  ];

  // Related products data - exclude current product
  const relatedProducts: Product[] = dummyProducts
    .filter(p => p.id !== parseInt(productId) && p.segment === fallbackProduct.segment)
    .slice(0, 4);

  // Function to get segment display name for breadcrumb
  const getSegmentDisplayName = (segment: string) => {
    const segmentMap: Record<string, string> = {
      'railway-metro-coach-products': 'Railway/Metro Coach',
      'railway-metro-track-products': 'Railway/Metro Track',
      'brake-shoe-brake-pad-products': 'Brake Shoe/Brake Pad',
      'steel-casting-products': 'Steel-Casting',
      'rolling-mill-products': 'Rolling Mill',
      'other-products': 'Other Products',
    };
    return segmentMap[segment] || 'Products';
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: 'var(--bgwhite)' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header with "Our Products" and Back Button */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-6">
            <Link 
              href="/products" 
              className="text-sm flex items-center transition-colors"
              style={{ color: 'var(--textcolour)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--textorange)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--textcolour)'}
            >
              &lt;&lt; Previous Page
            </Link>
            <h1 className="text-4xl font-bold" style={{ color: 'var(--textblue)' }}>
              Our <span style={{ color: 'var(--textorange)' }}>Products</span>
            </h1>
          </div>
          {/* Horizontal Bar */}
          <div className="w-full h-px mb-8" style={{ backgroundColor: 'var(--textblue)', opacity: '0.3' }}></div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm" style={{ color: 'var(--textcolour)' }}>
              <li>
                <Link 
                  href="/products" 
                  className="transition-colors"
                  style={{ color: 'var(--textcolour)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--textorange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--textcolour)'}
                >
                  Products
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">&gt;</span>
                <Link 
                  href="/products" 
                  className="transition-colors"
                  style={{ color: 'var(--textcolour)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--textorange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--textcolour)'}
                >
                  {getSegmentDisplayName(fallbackProduct.segment)}
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">&gt;</span>
                <span style={{ color: 'var(--textblue)' }}>
                  {fallbackProduct.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="w-full aspect-square rounded-lg overflow-hidden"
              style={{ backgroundColor: 'var(--textorange)' }}
            >
              <Image
                src={fallbackProduct.images?.[selectedImageIndex] || fallbackProduct.image}
                alt={fallbackProduct.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {fallbackProduct.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index 
                      ? 'border-orange-500' 
                      : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: 'var(--textorange)' }}
                >
                  <Image
                    src={image}
                    alt={`${fallbackProduct.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--textblue)' }}>
                {fallbackProduct.name}
              </h2>
              
              {/* Rating and Stock */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {renderStars(fallbackProduct.rating)}
                  </div>
                  <span className="text-sm" style={{ color: 'var(--textcolour)' }}>
                    ({fallbackProduct.reviewCount} reviews)
                  </span>
                </div>
                {fallbackProduct.inStock && (
                  <span className="text-sm px-2 py-1 rounded" style={{ 
                    backgroundColor: 'var(--bgcolour)', 
                    color: 'var(--textorange)' 
                  }}>
                    In Stock
                  </span>
                )}
              </div>
            </div>            {/* Key Features */}
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--bgcolour)' }}
            >
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--textblue)' }}>
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {fallbackProduct.keyFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span style={{ color: 'var(--textorange)' }}>✓</span>
                    <span className="text-sm" style={{ color: 'var(--textcolour)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                            <button 
                onClick={() => setIsEnquiryOpen(true)}
                className="w-full py-3 px-6 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--textorange)' }}
              >
                Enquire Now
              </button>
              <button 
                onClick={() => setIsBuyNowOpen(true)}
                className="w-full py-3 px-6 rounded-lg font-medium border transition-colors"
                style={{ 
                  color: 'var(--textorange)', 
                  borderColor: 'var(--textorange)' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--textorange)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--textorange)';
                }}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="mb-16">
          <div className="flex space-x-8 border-b mb-6">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 capitalize transition-colors ${
                  activeTab === tab 
                    ? 'border-b-2 font-medium' 
                    : ''
                }`}
                style={{
                  color: activeTab === tab ? 'var(--textorange)' : 'var(--textcolour)',
                  borderColor: activeTab === tab ? 'var(--textorange)' : 'transparent'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="prose max-w-none">
            {activeTab === 'description' && (
              <div className="space-y-4">
                {fallbackProduct.longDescription?.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ color: 'var(--textcolour)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            {activeTab === 'specifications' && (
              <div>
                <div className="space-y-8">
                  {specifications.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--textblue)' }}>
                        {section.category}
                      </h3>
                      <div 
                        className="rounded-lg p-4"
                        style={{ backgroundColor: 'var(--bgcolour)' }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.items.map((spec, specIndex) => (
                            <div key={specIndex} className="flex justify-between items-start">
                              <span className="font-medium text-sm" style={{ color: 'var(--textblue)' }}>
                                {spec.label}:
                              </span>
                              <span className="text-sm text-right ml-4" style={{ color: 'var(--textcolour)' }}>
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--textblue)' }}>
                    Customer Reviews ({reviews.length})
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm" style={{ color: 'var(--textcolour)' }}>
                      {product.rating} out of 5
                    </span>
                  </div>
                </div>
                
                <div 
                  className="max-h-96 overflow-y-auto pr-4"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'var(--textorange) transparent'
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      width: 8px;
                    }
                    div::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    div::-webkit-scrollbar-thumb {
                      background-color: var(--textorange);
                      border-radius: 4px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                      background-color: var(--textorange);
                      opacity: 0.8;
                    }
                  `}</style>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div 
                        key={review.id}
                        className="border-b pb-6 last:border-b-0"
                        style={{ borderColor: 'var(--bgcolour)' }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold" style={{ color: 'var(--textblue)' }}>
                              {review.name}
                            </h4>
                            <p className="text-sm" style={{ color: 'var(--textcolour)', opacity: '0.7' }}>
                              {review.company}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-xs" style={{ color: 'var(--textcolour)', opacity: '0.6' }}>
                              {new Date(review.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--textcolour)' }}>
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Carousel */}
        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--textblue)' }}>
            Related <span style={{ color: 'var(--textorange)' }}>Products</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                href={`/products/${relatedProduct.id}`}
                className="block h-full"
              >
                <div className="h-full">
                  <ProductCard product={relatedProduct} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productName={fallbackProduct.name}
      />

      {/* Buy Now Modal */}
      <BuyNowModal 
        isOpen={isBuyNowOpen}
        onClose={() => setIsBuyNowOpen(false)}
        productName={fallbackProduct.name}
        productPrice={fallbackProduct.price}
      />
    </div>
  );
};

export default SingleProductPage;
