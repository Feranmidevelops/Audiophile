
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const categories = [
    {
      name: 'HEADPHONES',
      image: '/techxx99mark1.png',
      link: '/headphones'
    },
    {
      name: 'SPEAKERS',
      image: '/zx9.png',
      link: '/speakers'
    },
    {
      name: 'EARPHONES',
      image: '/earphones.png',
      link: '/earphones'
    }
  ];

  return (
    <section className=" mt-16  tablet:px-10 desktop:px-32 py-10">
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8 tablet:gap-3">
        {categories.map((category) => (
          <div 
            key={category.name}
            className="bg-light rounded-lg pt-24 pb-6 px-8 flex flex-col items-center relative group hover:cursor-pointer"
          >
            {/* Product Image */}
            <div className="absolute -top-12 w-40 h-40">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Category Name */}
            <h3 className="text-h6 uppercase mt-16 mb-4">
              {category.name}
            </h3>

            {/* Shop Link */}
            <Link 
              to={category.link}
              className="text-subtitle uppercase text-black/50 hover:text-primary flex items-center gap-3 transition-colors"
            >
              SHOP
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd"/>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryNav;