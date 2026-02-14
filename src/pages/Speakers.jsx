
// pages/Speakers.jsx
import React from 'react';
import Layout from '../components/Layout';
import CategoryNav from '../components/CategoryNav';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Speakers = () => {
  const products = [
    {
      id: 1,
      title: 'ZX9 SPEAKER',
      description: 'Upgrade your sound system with the all new ZX9 active speaker. It\'s a bookshelf speaker system that offers truly wireless connectivity – creating new possibilities for more pleasing and practical audio setups.',
      isNew: true,
      image: 'bg-[#D0BDA4]'
    },
    {
      id: 2,
      title: 'ZX7 SPEAKER',
      description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      isNew: false,
      image: 'bg-gray-300'
    }
  ];

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
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`flex items-center gap-24 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`w-1/2 h-[560px] ${product.image} rounded-lg relative overflow-hidden`}>
                {product.id === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 bg-black/20 rounded-full"></div>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="w-1/2 max-w-md">
                {product.isNew && (
                  <p className="text-[#D0BDA4] text-[14px] tracking-[10px] mb-4">
                    NEW PRODUCT
                  </p>
                )}
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

export default Speakers;