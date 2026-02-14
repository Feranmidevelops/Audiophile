
// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white border-b border-white/10">
      <div className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-[2px] hover:text-[#D0BDA4] transition-colors">
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
                  className="text-[#FAFAFA] hover:text-[#D0BDA4] text-[13px] font-bold tracking-[1px] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="text-white hover:text-[#D0BDA4] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 21L16 17M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;