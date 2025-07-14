"use client"
import React, { useState, useEffect } from 'react';

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productPrice?: string;
}

const BuyNowModal: React.FC<BuyNowModalProps> = ({ isOpen, onClose, productName, productPrice }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    quantity: '',
    units: 'pieces'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle form submission here
      console.log('Purchase order submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        contactNo: '',
        email: '',
        quantity: '',
        units: 'pieces'
      });
      
      // Show success message or close modal
      alert('Purchase order sent successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting purchase order:', error);
      alert('Error sending purchase order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-transparent backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="relative w-full max-w-lg transform overflow-hidden rounded-2xl shadow-xl transition-all"
          style={{ backgroundColor: 'var(--bgwhite)' }}
        >
          {/* Header */}
          <div className="relative px-6 pt-6 pb-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full transition-colors hover:bg-gray-100"
              type="button"
            >
              <svg
                className="w-6 h-6"
                style={{ color: 'var(--textcolour)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 
              className="text-2xl font-bold text-center"
              style={{ color: 'var(--textorange)' }}
            >
              Enter Details Below
            </h2>
            
            {productName && (
              <p 
                className="text-center mt-2 text-sm"
                style={{ color: 'var(--textcolour)' }}
              >
                Purchase order for: <span style={{ color: 'var(--textblue)' }}>{productName}</span>
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-6">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--textblue)' }}
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-colors enquiry-input"
                  style={{ backgroundColor: 'var(--bgwhite)' }}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label 
                  htmlFor="contactNo" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--textblue)' }}
                >
                  Contact No.*
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-colors enquiry-input"
                  style={{ backgroundColor: 'var(--bgwhite)' }}
                  placeholder="Enter your contact number"
                />
              </div>

              {/* Email Address */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--textblue)' }}
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-colors enquiry-input"
                  style={{ backgroundColor: 'var(--bgwhite)' }}
                  placeholder="Enter your email address"
                />
              </div>

              {/* Quantity and Units Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Quantity Field */}
                <div>
                  <label 
                    htmlFor="quantity" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--textblue)' }}
                  >
                    Quantity*
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-colors enquiry-input"
                    style={{ backgroundColor: 'var(--bgwhite)' }}
                    placeholder="0"
                  />
                </div>

                {/* Units Field */}
                <div>
                  <label 
                    htmlFor="units" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--textblue)' }}
                  >
                    Units*
                  </label>
                  <select
                    id="units"
                    name="units"
                    value={formData.units}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-colors enquiry-input"
                    style={{ backgroundColor: 'var(--bgwhite)', color: 'var(--textblue)' }}
                  >
                    <option value="pieces">Pieces</option>
                    <option value="sets">Sets</option>
                    <option value="units">Units</option>
                    <option value="pairs">Pairs</option>
                    <option value="meters">Meters</option>
                    <option value="kilograms">Kilograms</option>
                    <option value="tons">Tons</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg font-medium border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  color: 'var(--textorange)', 
                  borderColor: 'var(--textorange)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'var(--textorange)';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--textorange)';
                  }
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Purchase Order'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
