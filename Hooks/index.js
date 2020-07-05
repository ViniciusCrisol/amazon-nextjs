import React from 'react';

import { CartProvider } from './CartContext';

function AppProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}

export default AppProvider;
