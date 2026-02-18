import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../cart/CartContext';
import Cart from './Cart';

const Header = () => {
  const { cartCount, openCart } = useCart();

  return (
    <>
      <header className="bg-black text-white border-b border-white/10">
        <div className="container mx-auto px-6 py-8">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-[2px] hover:text-[#D87D4A] transition-colors">
              audiophile
            </Link>
            <ul className="flex space-x-8">
              {[
                { name: 'HOME', path: '/' },
                { name: 'HEADPHONES', path: '/headphones' },
                { name: 'SPEAKERS', path: '/speakers' },
                { name: 'EARPHONES', path: '/earphones' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-[#FAFAFA] hover:text-[#D87D4A] text-[13px] font-bold tracking-[1px] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button 
              onClick={openCart}
              className="text-white hover:text-[#D87D4A] transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart />
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>
      
      {/* Cart Modal */}
      <Cart />
    </>
  );
};

export default Header;