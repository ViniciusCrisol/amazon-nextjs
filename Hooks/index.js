import React from 'react';

import { Provider } from './Context';

function AppProvider({ children }) {
  return <Provider>{children}</Provider>;
}

export default AppProvider;
