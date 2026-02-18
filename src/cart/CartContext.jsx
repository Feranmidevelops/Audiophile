import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Use lazy initialization to load from localStorage ONCE on mount
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('audiophile-cart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('audiophile-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Add a product to the cart
   * @param {Object} product - The product object to add
   * @param {number} quantity - The quantity to add (default: 1)
   */
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity of existing item
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      // Add new item to cart
      return [...prevItems, { 
        id: product.id,
        name: product.name,
        shortName: product.name.split(' ').slice(0, 2).join(' '), // e.g., "XX99 MK"
        price: product.price,
        image: product.image,
        slug: product.slug,
        quantity
      }];
    });
  };

  /**
   * Update the quantity of a cart item
   * @param {string|number} productId - The product ID
   * @param {number} newQuantity - The new quantity
   */
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  /**
   * Remove a product from the cart
   * @param {string|number} productId - The product ID to remove
   */
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  /**
   * Clear all items from the cart
   */
  const clearCart = () => {
    setCartItems([]);
  };

  /**
   * Open the cart modal
   */
  const openCart = () => setIsCartOpen(true);

  /**
   * Close the cart modal
   */
  const closeCart = () => setIsCartOpen(false);

  /**
   * Toggle the cart modal
   */
  const toggleCart = () => setIsCartOpen(prev => !prev);

  /**
   * Get total number of items in cart
   */
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  /**
   * Get total price of all items in cart
   */
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  /**
   * Check if a product is in the cart
   * @param {string|number} productId - The product ID to check
   */
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  /**
   * Get quantity of a specific product in cart
   * @param {string|number} productId - The product ID
   */
  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const value = {
    // State
    cartItems,
    isCartOpen,
    cartCount,
    cartTotal,
    
    // Actions
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
    
    // Helpers
    isInCart,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};