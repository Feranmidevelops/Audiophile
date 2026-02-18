import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CategoryNav from '../components/CategoryNav';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { products } from '../data/Products';
import { useCart } from '../cart/CartContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, openCart } = useCart();

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <section className="max-w-[1110px] mx-auto px-6 py-20 text-center">
          <h2 className="text-[32px] font-bold mb-8 uppercase tracking-[1.14px]">Product Not Found</h2>
          <p className="text-[15px] leading-[25px] text-black/50 mb-12">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </section>
      </Layout>
    );
  }

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    openCart();
    setQuantity(1);
  };

  return (
    <Layout>
      <section className="max-w-[1110px] mx-auto px-6 tablet:px-10 desktop:px-0 py-20 tablet:py-[120px]">
        {/* Go Back button */}
        <button
          onClick={() => navigate(-1)}
          className="text-[15px] leading-[25px] text-black/50 hover:text-[#D87D4A] mb-14 tablet:mb-[56px] transition-colors"
        >
          Go Back
        </button>

        {/* Product Info */}
        <div className="flex flex-col desktop:flex-row items-center gap-[69px] desktop:gap-[125px] mb-[88px] desktop:mb-[160px]">
          {/* Product Image */}
          <div className="w-full desktop:w-1/2">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden h-[327px] tablet:h-[480px] desktop:h-[560px] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full desktop:w-1/2 text-center desktop:text-left flex flex-col items-center desktop:items-start">
            {product.isNew && (
              <p className="text-[14px] tracking-[10px] text-[#D87D4A] uppercase mb-4 tablet:mb-4">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-[28px] tablet:text-[40px] font-bold leading-[1.1] uppercase mb-6 tablet:mb-8 tracking-[1px] tablet:tracking-[1.43px] max-w-[400px]">
              {product.name}
            </h1>
            <p className="text-[15px] leading-[25px] text-black/50 mb-6 tablet:mb-8 max-w-[445px]">
              {product.description}
            </p>
            <p className="text-[18px] font-bold tracking-[1.29px] mb-8 tablet:mb-[47px]">
              $ {product.price.toLocaleString()}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 w-full tablet:w-auto">
              <div className="bg-[#F1F1F1] flex items-center">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="px-[15.5px] py-[15px] text-[13px] tracking-[1px] text-black/25 hover:text-[#D87D4A] transition-colors font-bold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-4 text-[13px] tracking-[1px] font-bold min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="px-[15.5px] py-[15px] text-[13px] tracking-[1px] text-black/25 hover:text-[#D87D4A] transition-colors font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <Button 
                className="!bg-[#D87D4A] hover:!bg-[#FBAF85]" 
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>

        {/* Features & In the Box */}
        <div className="flex flex-col desktop:flex-row gap-[88px] desktop:gap-[125px] mb-[88px] desktop:mb-[160px]">
          <div className="desktop:w-[635px]">
            <h2 className="text-[24px] tablet:text-[32px] font-bold leading-[1.125] uppercase mb-6 tablet:mb-8 tracking-[0.86px] tablet:tracking-[1.14px]">FEATURES</h2>
            <div className="text-[15px] leading-[25px] text-black/50 space-y-6">
              {product.features.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="desktop:w-[350px]">
            <h2 className="text-[24px] tablet:text-[32px] font-bold leading-[1.125] uppercase mb-6 tablet:mb-8 tracking-[0.86px] tablet:tracking-[1.14px]">IN THE BOX</h2>
            <ul className="space-y-2">
              {product.inBox.map((item, index) => (
                <li key={index} className="flex items-start gap-6">
                  <span className="text-[15px] leading-[25px] text-[#D87D4A] font-bold min-w-[20px]">
                    {item.quantity}x
                  </span>
                  <span className="text-[15px] leading-[25px] text-black/50">
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 tablet:grid-cols-[40%_60%] desktop:grid-cols-[445px_1fr] gap-5 tablet:gap-[18px] desktop:gap-[30px] mb-[120px] desktop:mb-[160px]">
          <div className="space-y-5 tablet:space-y-[18px] desktop:space-y-[30px]">
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden h-[174px] tablet:h-[174px] desktop:h-[280px]">
              <img
                src={product.gallery[0]}
                alt="Gallery image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#F1F1F1] rounded-lg overflow-hidden h-[174px] tablet:h-[174px] desktop:h-[280px]">
              <img
                src={product.gallery[1]}
                alt="Gallery image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-[#F1F1F1] rounded-lg overflow-hidden h-[368px] tablet:h-[368px] desktop:h-[592px]">
            <img
              src={product.gallery[2]}
              alt="Gallery image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* You May Also Like */}
        <div className="text-center mb-[120px] desktop:mb-[60px]">
          <h2 className="text-[24px] tablet:text-[32px] font-bold leading-[1.125] uppercase mb-10 tablet:mb-[56px] desktop:mb-[64px] tracking-[0.86px] tablet:tracking-[1.14px]">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-[56px] tablet:gap-[11px] desktop:gap-[30px]">
            {product.relatedProducts.map((related) => (
              <div key={related.slug} className="text-center">
                <div className="bg-[#F1F1F1] rounded-lg overflow-hidden h-[120px] tablet:h-[318px] mb-8 tablet:mb-10 flex items-center justify-center">
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <h3 className="text-[24px] font-bold leading-[1.125] uppercase mb-8 tracking-[1.71px]">{related.name}</h3>
                <Link to={`/product/${related.slug}`}>
                  <Button className='!bg-[#D87D4A] hover:!bg-[#FBAF85]'>SEE PRODUCT</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoryNav />
      <AboutSection />
      <Footer />
    </Layout>
  );
};

export default ProductDetail;