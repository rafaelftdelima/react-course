import React from 'react';

import { GlobalStorage } from './GlobalContext';
import Product from './Product';
import Clear from './Clear';

const App = () => {
  return (
    <GlobalStorage>
      <Product />
      <Clear />
    </GlobalStorage>
  );
};

export default App;
