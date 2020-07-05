import React, { createContext, useCallback, useState, useContext } from 'react';

const CartContext = createContext([]);

function CartProvider({ children }) {
  const [data, setData] = useState([]);

  const addToCart = useCallback(async ({ product }) => {
    // Não funcional

    const productExists = await data.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (product && !productExists) {
      setData((oldCart) => [...oldCart, product]);
    }
  }, []);

  return (
    <CartContext.Provider value={{ products: data, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
