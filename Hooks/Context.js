import React, { createContext, useCallback, useState, useContext } from 'react';

const Context = createContext({});

function Provider({ children }) {
  const [data, setData] = useState([]);

  return (
    <Context.Provider
      value={{
        cart: data.cart,
        favorites: data.favorites,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useAuth() {
  const context = useContext(Context);

  return context;
}

export { Provider, useAuth };
