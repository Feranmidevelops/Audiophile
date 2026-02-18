// pages/Speakers.jsx
import React from 'react';
import Layout from '../components/Layout';
import CategoryNav from '../components/CategoryNav';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/Products';

const Speakers = () => {
  const navigate = useNavigate();

  // Filter products by category
  const speakers = products.filter(p => p.category === 'speakers');

  return (
    <Layout>
      {/* Header Banner */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-[40px] font-bold leading-[44px] tracking-[1.5px] text-center">
            SPEAKERS
          </h1>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-6 py-24">
        <div className="space-y-32">
          {speakers.map((product, index) => (
            <div 
              key={product.slug}
              className={`flex items-center gap-24 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Product Image */}
              <div className="w-1/2 h-[560px] rounded-lg relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-contain bg-no-repeat bg-gray-100 bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </div>
              
              {/* Product Info */}
              <div className="w-1/2 max-w-md">
                {product.isNew && (
                  <p className="text-[#D87D4A] text-[14px] tracking-[10px] mb-4">
                    NEW PRODUCT
                  </p>
                )}
                <h2 className="text-[40px] font-bold leading-[44px] tracking-[1.5px] mb-8">
                  {product.name}
                </h2>
                <p className="text-black/50 mb-8">
                  {product.description}
                </p>
                <button
                  onClick={() => navigate(`/product/${product.slug}`)}
                  className="bg-[#D87D4A] hover:bg-[#F8AF85] text-white px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors"
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CategoryNav />
      <AboutSection />
      <Footer />
    </Layout>
  );
};

export default Speakers;