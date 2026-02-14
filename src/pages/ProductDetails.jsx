
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryNav from '../components/CategoryNav';
import AboutSection from '../components/AboutSection';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="font-manrope">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Go Back button */}
        <button
          onClick={() => navigate(-1)}
          className="text-black/50 hover:text-[#D0BDA4] text-[15px] mb-16"
        >
          Go Back
        </button>

        {/* Product main section */}
        <div className="flex items-start gap-24 mb-32">
          {/* Image */}
          <div className={`w-1/2 h-[560px] ${product.image} rounded-lg relative overflow-hidden`}>
            {product.slug === 'zx9-speaker' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-black/20 rounded-full"></div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="w-1/2 max-w-md">
            {product.isNew && (
              <p className="text-[#D0BDA4] text-[14px] tracking-[10px] mb-4">
                NEW PRODUCT
              </p>
            )}
            <h2 className="text-[40px] font-bold leading-[44px] tracking-[1.5px] mb-8">
              {product.name}
            </h2>
            <p className="text-black/50 mb-8">
              {product.description}
            </p>
            <p className="text-[18px] font-bold tracking-[1.3px] mb-8">
              ${product.price.toLocaleString()}
            </p>

            {/* Add to Cart / Quantity selector */}
            <div className="flex items-center gap-4">
              {product.slug === 'zx9-speaker' ? (
                <>
                  <div className="flex items-center bg-[#F1F1F1]">
                    <button className="px-5 py-4 text-black/50 hover:text-[#D0BDA4]">-</button>
                    <span className="px-4 py-4 font-bold">1</span>
                    <button className="px-5 py-4 text-black/50 hover:text-[#D0BDA4]">+</button>
                  </div>
                  <button className="bg-[#D0BDA4] hover:bg-[#F8AF85] text-white px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors">
                    AUDIO TO CART
                  </button>
                </>
              ) : (
                <button className="bg-[#D0BDA4] hover:bg-[#F8AF85] text-white px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors">
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Features & In the box */}
        <div className="flex gap-24 mb-32">
          <div className="w-2/3">
            <h3 className="text-[32px] font-bold leading-[36px] tracking-[1.5px] mb-8">
              FEATURES
            </h3>
            <p className="text-black/50 whitespace-pre-line">
              {product.features}
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-[32px] font-bold leading-[36px] tracking-[1.5px] mb-8">
              IN THE BOX
            </h3>
            <ul className="space-y-3">
              {product.includes.map((item, index) => (
                <li key={index} className="flex items-baseline">
                  <span className="text-[#D0BDA4] font-bold w-8">{item.quantity}x</span>
                  <span className="text-black/50">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mb-32">
          <h3 className="text-[32px] font-bold leading-[36px] tracking-[1.5px] text-center mb-16">
            YOU MAY ALSO LIKE
          </h3>
          <div className="grid grid-cols-3 gap-8">
            {product.others.map((other) => (
              <div key={other.slug} className="text-center">
                <div className="bg-[#F1F1F1] h-80 rounded-lg mb-8"></div>
                <h4 className="text-[24px] font-bold leading-[33px] tracking-[1.7px] mb-8">
                  {other.name}
                </h4>
                <Link
                  to={`/product/${other.slug}`}
                  className="inline-block bg-[#D0BDA4] hover:bg-[#F8AF85] text-white px-8 py-4 text-[13px] font-bold tracking-[1px] transition-colors"
                >
                  SEE PRODUCT
                </Link>
              </div>
            ))}
          </div>
        </div>

        <CategoryNav />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;