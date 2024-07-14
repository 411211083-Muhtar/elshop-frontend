import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (productId) => {
    setCart(cart.map(item => 
      item.id === productId ? 
      { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : 
      item));
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
