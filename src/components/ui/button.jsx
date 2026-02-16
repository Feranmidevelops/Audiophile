

import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = 'px-8 py-4 text-subtitle font-bold uppercase tracking-[1px] transition-all duration-300 inline-block';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-white',
    secondary: 'bg-secondary hover:bg-[#4C4C4C] text-white',
    outline: 'bg-transparent border-2 border-secondary hover:bg-secondary hover:text-white text-secondary'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
// import React from 'react';
// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   onClick, 
//   type = 'button',
//   className = '',
//   disabled = false,
//   to
// }) => {
//   const baseStyles = 'inline-block px-8 py-4 text-subtitle uppercase font-bold tracking-[1px] transition-all text-center cursor-pointer';
  
//   const variants = {
//     primary: 'bg-primary text-white hover:bg-primary-dark',
//     secondary: 'bg-secondary text-white hover:bg-[#4C4C4C]',
//     outline: 'border border-dark text-dark hover:bg-dark hover:text-white',
//     outlineWhite: 'border border-white text-white hover:bg-white hover:text-dark',
//   };

//   const Tag = to ? 'a' : 'button';
//   const props = to ? { href: to } : { type, onClick };

//   return (
//     <Tag
//       {...props}
//       disabled={disabled}
//       className={`${baseStyles} ${variants[variant]} ${className} ${
//         disabled ? 'opacity-50 cursor-not-allowed' : ''
//       }`}
//     >
//       {children}
//     </Tag>
//   );
// };

// export default Button;