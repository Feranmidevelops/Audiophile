
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccessModal = ({ isOpen, cartItems, grandTotal, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !cartItems || cartItems.length === 0) return null;

  const firstItem = cartItems[0];
  const remainingCount = cartItems.length - 1;

  const handleBackToHome = () => {
    if (onClose) onClose();
    navigate('/');
  };

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
            onClick={handleBackToHome}
            className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-[15px] text-[13px] font-bold tracking-[1px] uppercase transition-colors"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessModal;