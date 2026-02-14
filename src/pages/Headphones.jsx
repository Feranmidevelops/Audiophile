
import React from 'react';
import Layout from '../components/Layout';
import CategoryNav from '../components/CategoryNav';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Headphones = () => {
  const products = [
    {
      id: 1,
      title: 'XX99 MARK II HEADPHONES',
      description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      isNew: false,
      image: 'bg-gray-300'
    },
    {
      id: 2,
      title: 'XX99 MARK I HEADPHONES',
      description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      isNew: false,
      image: 'bg-gray-300'
    },
    {
      id: 3,
      title: 'XX59 HEADPHONES',
      description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
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
            HEADPHONES
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
              <div className={`w-1/2 h-[560px] ${product.image} rounded-lg`}></div>
              
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

export default Headphones;