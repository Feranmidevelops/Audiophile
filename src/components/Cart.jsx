import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../cart/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    updateQuantity, 
    clearCart, 
    isCartOpen, 
    closeCart 
  } = useCart();

  if (!isCartOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeCart}
      ></div>

      {/* Modal */}
      <div className="fixed top-[116px] right-6 tablet:right-10 desktop:right-[165px] w-full max-w-[377px] bg-white rounded-lg p-8 z-50">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[18px] font-bold tracking-[1.29px] uppercase">
            CART ({cartItems.length})
          </h2>
          <button 
            onClick={clearCart}
            className="text-[15px] leading-[25px] text-black/50 hover:text-[#D87D4A] underline transition-colors"
          >
            Remove all
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {/* Product Image */}
              <div className="w-16 h-16 bg-[#F1F1F1] rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-[15px] font-bold leading-[25px] uppercase">
                  {item.shortName || item.name}
                </h3>
                <p className="text-[14px] font-bold text-black/50">
                  $ {item.price.toLocaleString()}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="bg-[#F1F1F1] flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-[15.5px] py-[7px] text-[13px] tracking-[1px] text-black/25 hover:text-[#D87D4A] transition-colors font-bold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-4 text-[13px] tracking-[1px] font-bold min-w-[40px] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-[15.5px] py-[7px] text-[13px] tracking-[1px] text-black/25 hover:text-[#D87D4A] transition-colors font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[15px] leading-[25px] text-black/50 uppercase">
            TOTAL
          </span>
          <span className="text-[18px] font-bold">
            $ {total.toLocaleString()}
          </span>
        </div>

        {/* Checkout Button */}
        <button 
          onClick={handleCheckout}
          className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-[15px] text-[13px] font-bold tracking-[1px] uppercase transition-colors"
        >
          CHECKOUT
        </button>
      </div>
    </>
  );
};

export default Cart;