import React from 'react';

import { CartProvider } from './CartContext';
import { FavoritesProvider } from './FavoritesContext';

function AppProvider({ children }) {
  return (
    <CartProvider>
      <FavoritesProvider>{children}</FavoritesProvider>;
    </CartProvider>
  );
}

export default AppProvider;
