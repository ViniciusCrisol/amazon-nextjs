import React, { createContext, useCallback, useState, useContext } from 'react';

const CartContext = createContext([]);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback(({ product }) => {
    setCart((oldCart) => [...oldCart, product]);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
