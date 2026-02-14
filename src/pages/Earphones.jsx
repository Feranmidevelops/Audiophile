
// pages/Earphones.jsx
import React from 'react';
import Layout from '../components/Layout';
import CategoryNav from '../components/CategoryNav';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Earphones = () => {
  const products = [
    {
      id: 1,
      title: 'YX1 WIRELESS EARPHONES',
      description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
      isNew: true,
      image: 'bg-gray-300'
    }
  ];

  return (
    <Layout>
      {/* Header Banner */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-[40px] font-bold leading-[44px] tracking-[1.5px] text-center">
            EARPHONES
          </h1>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-6 py-24">
        <div className="space-y-32">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-24">
              {/* Product Image */}
              <div className="w-1/2 h-[560px] ${product.image} rounded-lg"></div>
              
              {/* Product Info */}
              <div className="w-1/2 max-w-md">
                <p className="text-[#D0BDA4] text-[14px] tracking-[10px] mb-4">
                  NEW PRODUCT
                </p>
                <h2 className="text-[40px] font-bold leading-[44px] tracking-[1.5px] mb-8">
                  {product.title}
                </h2>
                <p className="text-black/50 mb-8">
                  {product.description}
                </p>
                <button className="bg-[#D0BDA4] hover:bg-[#F8AF85] text-white px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors">
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

export default Earphones;