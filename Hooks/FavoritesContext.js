import React, { createContext, useCallback, useState, useContext } from 'react';

const FavoritesContext = createContext([]);

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = useCallback(({ product }) => {
    setFavorites((oldFavorites) => [...oldFavorites, product]);
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  return context;
}

export { FavoritesProvider, useFavorites };
