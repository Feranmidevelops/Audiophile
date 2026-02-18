// App.jsx
import React from 'react';
import { CartProvider } from './cart/CartContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import ProductDetails from './pages/ProductDetails';
import Checkout from './checkout/CheckoutPage';

function App() {
  return (
    <Router>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;