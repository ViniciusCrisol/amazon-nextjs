import React, { createContext, useCallback, useState, useContext } from 'react';

const FavoritesContext = createContext([]);

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = ({ product }) => {
    const productExists = favorites.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!productExists) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = ({ id }) => {
    const filteredProducts = favorites.filter((product) => product.id !== id);

    setFavorites(filteredProducts);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  return context;
}

export { FavoritesProvider, useFavorites };
