import React, { createContext, useCallback, useState, useContext } from 'react';

const CartContext = createContext([]);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  let value = 0;

  for (let product in cart) {
    value += cart[product].price;
  }

  const addToCart = ({ product }) => {
    const productExists = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!productExists) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = ({ id }) => {
    const filteredProducts = cart.filter((product) => product.id !== id);
    console.log(filteredProducts);

    setCart(filteredProducts);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, value }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
