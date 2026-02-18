import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../cart/CartContext';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('e-money');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    eMoneyNumber: '',
    eMoneyPin: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2); // 20% VAT
  const grandTotal = subtotal + shipping + vat;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleOrderSuccess = () => {
    clearCart();
    setShowSuccessModal(false);
    navigate('/');
  };

  return (
    <Layout>
      <div className="bg-[#F2F2F2] min-h-screen">
        <div className="max-w-[1110px] mx-auto px-6 tablet:px-10 desktop:px-0 py-20 tablet:py-[79px]">
          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="text-[15px] leading-[25px] text-black/50 hover:text-[#D87D4A] mb-6 tablet:mb-[38px] transition-colors"
          >
            Go Back
          </button>

          <div className="flex flex-col desktop:flex-row gap-8">
            {/* Checkout Form */}
            <div className="flex-1 bg-white rounded-lg p-6 tablet:p-12">
              <h1 className="text-[28px] tablet:text-[32px] font-bold tracking-[1px] tablet:tracking-[1.14px] uppercase mb-8 tablet:mb-[41px]">
                CHECKOUT
              </h1>

              <form onSubmit={handleSubmit}>
                {/* Billing Details */}
                <div className="mb-8 tablet:mb-[53px]">
                  <h2 className="text-[13px] font-bold tracking-[0.93px] text-[#D87D4A] uppercase mb-4">
                    BILLING DETAILS
                  </h2>
                  
                  <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alexei Ward"
                        className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alexei@mail.com"
                        className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 202-555-0136"
                        className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mb-8 tablet:mb-[53px]">
                  <h2 className="text-[13px] font-bold tracking-[0.93px] text-[#D87D4A] uppercase mb-4">
                    SHIPPING INFO
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="1137 Williams Avenue"
                        className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="10001"
                          className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="New York"
                          className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="United States"
                        className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h2 className="text-[13px] font-bold tracking-[0.93px] text-[#D87D4A] uppercase mb-4">
                    PAYMENT DETAILS
                  </h2>
                  
                  <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 mb-6">
                    <label className="block text-[12px] font-bold tracking-[-0.21px]">
                      Payment Method
                    </label>
                    <div className="space-y-4">
                      <label className="flex items-center gap-4 px-6 py-[18px] border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A] transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="e-money"
                          checked={paymentMethod === 'e-money'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 accent-[#D87D4A]"
                        />
                        <span className="text-[14px] font-bold tracking-[-0.25px]">
                          e-Money
                        </span>
                      </label>

                      <label className="flex items-center gap-4 px-6 py-[18px] border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A] transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={paymentMethod === 'cash'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 accent-[#D87D4A]"
                        />
                        <span className="text-[14px] font-bold tracking-[-0.25px]">
                          Cash on Delivery
                        </span>
                      </label>
                    </div>
                  </div>

                  {paymentMethod === 'e-money' && (
                    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          name="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={handleInputChange}
                          placeholder="238521993"
                          className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[12px] font-bold tracking-[-0.21px] mb-2">
                          e-Money PIN
                        </label>
                        <input
                          type="text"
                          name="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={handleInputChange}
                          placeholder="6891"
                          className="w-full px-6 py-[18px] border border-[#CFCFCF] rounded-lg text-[14px] font-bold tracking-[-0.25px] focus:border-[#D87D4A] focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Summary Sidebar */}
            <div className="desktop:w-[350px]">
              <div className="bg-white rounded-lg p-6 tablet:p-8">
                <h2 className="text-[18px] font-bold tracking-[1.29px] uppercase mb-8">
                  SUMMARY
                </h2>

                {/* Cart Items */}
                <div className="space-y-6 mb-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#F1F1F1] rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[15px] font-bold leading-[25px] uppercase">
                          {item.shortName || item.name}
                        </h3>
                        <p className="text-[14px] font-bold text-black/50">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-[15px] font-bold text-black/50">
                        x{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                      TOTAL
                    </span>
                    <span className="text-[18px] font-bold">
                      $ {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                      SHIPPING
                    </span>
                    <span className="text-[18px] font-bold">
                      $ {shipping}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                      VAT (INCLUDED)
                    </span>
                    <span className="text-[18px] font-bold">
                      $ {vat.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-[15px] leading-[25px] text-black/50 uppercase">
                    GRAND TOTAL
                  </span>
                  <span className="text-[18px] font-bold text-[#D87D4A]">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-[15px] text-[13px] font-bold tracking-[1px] uppercase transition-colors"
                >
                  CONTINUE & PAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <OrderSuccessModal 
          cartItems={cartItems}
          grandTotal={grandTotal}
          onClose={handleOrderSuccess}
        />
      )}

      <Footer />
    </Layout>
  );
};

// Order Success Modal Component
const OrderSuccessModal = ({ cartItems, grandTotal, onClose }) => {
  const firstItem = cartItems[0];
  const remainingCount = cartItems.length - 1;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6">
        {/* Modal */}
        <div className="bg-white rounded-lg max-w-[540px] w-full p-8 tablet:p-12">
          {/* Checkmark Icon */}
          <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
              <path d="M1 7.5L7 13.5L19 1.5" stroke="white" strokeWidth="3"/>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-[24px] tablet:text-[32px] font-bold leading-[1.125] tracking-[0.86px] tablet:tracking-[1.14px] uppercase mb-4 tablet:mb-6">
            THANK YOU<br />FOR YOUR ORDER
          </h2>

          <p className="text-[15px] leading-[25px] text-black/50 mb-6 tablet:mb-[33px]">
            You will receive an email confirmation shortly.
          </p>

          {/* Order Summary */}
          <div className="flex flex-col tablet:flex-row rounded-lg overflow-hidden mb-6 tablet:mb-[46px]">
            {/* Items */}
            <div className="bg-[#F1F1F1] p-6 flex-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={firstItem.image} 
                    alt={firstItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-bold leading-[25px] uppercase">
                    {firstItem.shortName || firstItem.name}
                  </h3>
                  <p className="text-[14px] font-bold text-black/50">
                    $ {firstItem.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-[15px] font-bold text-black/50">
                  x{firstItem.quantity}
                </span>
              </div>

              {remainingCount > 0 && (
                <>
                  <div className="border-t border-black/10 my-3"></div>
                  <p className="text-[12px] font-bold text-black/50 text-center">
                    and {remainingCount} other item(s)
                  </p>
                </>
              )}
            </div>

            {/* Grand Total */}
            <div className="bg-black p-6 tablet:w-[198px] flex flex-col justify-center">
              <p className="text-[15px] leading-[25px] text-white/50 uppercase mb-2">
                GRAND TOTAL
              </p>
              <p className="text-[18px] font-bold text-white">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <button
            onClick={onClose}
            className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-[15px] text-[13px] font-bold tracking-[1px] uppercase transition-colors"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;