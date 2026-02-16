// components/Layout.jsx
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="font-manrope">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;