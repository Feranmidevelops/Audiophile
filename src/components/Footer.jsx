
// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-start mb-12">
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
        </div>
        
        <div className="grid grid-cols-2 gap-8 mb-12">
          <p className="text-[#FAFAFA]/50 max-w-md">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </p>
        </div>
        
        <div className="text-[#FAFAFA]/50 text-sm font-bold">
          Copyright 2021. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;